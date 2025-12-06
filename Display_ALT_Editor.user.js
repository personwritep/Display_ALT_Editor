// ==UserScript==
// @name        Display ALT Editor ⭐
// @namespace        http://tampermonkey.net/
// @version        0.5
// @description        編集画面内の記事画像にマウスホバーでALTを表示
// @author        Ameba Blog User
// @match        https://blog.ameba.jp/ucs/entry/srventry*
// @exclude        https://blog.ameba.jp/ucs/entry/srventrylist*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameba.jp
// @updateURL        https://github.com/personwritep/Display_ALT_Editor/raw/main/Display_ALT_Editor.user.js
// @downloadURL        https://github.com/personwritep/Display_ALT_Editor/raw/main/Display_ALT_Editor.user.js
// @grant        none
// ==/UserScript==



let type=localStorage.getItem('DispALT_E'); // サムネイル処理タイプ 🔵
if(!type){
    type=0; }
localStorage.setItem('DispALT_E', type); // 初期値をセット

let style=
    '<style class="dispalt_el">'+
    '.spui-ToggleSwitch-input:checked~.spui-ToggleSwitch-visual { '+
    'background: #ff6a59; }</style>'+
    '<style class="dispalt_et">'+
    '.spui-ToggleSwitch-input:checked~.spui-ToggleSwitch-visual { '+
    'background: #1da1f2; }</style>';

if(!document.querySelector('.dispalt_el')){
    document.body.insertAdjacentHTML('beforeend', style); }

type_set();



let retry=0;
let interval=setInterval(wait_target, 100);
function wait_target(){
    retry++;
    if(retry>10){ // リトライ制限 10回 1sec
        clearInterval(interval); }
    let target=document.getElementById('cke_1_contents'); // 監視 target
    if(target){
        clearInterval(interval);
        main(); }}


function main(){

    let target0=document.getElementById('cke_1_contents'); // 監視 target
    if(target0){
        let monitor0=new MutationObserver(main_in);
        monitor0.observe(target0, {childList: true}); }

    main_in();

    function main_in(){
        let editor_iframe=document.querySelector('.cke_wysiwyg_frame');
        if(editor_iframe){ // iframe読込みが実行条件
            let iframe_doc=editor_iframe.contentWindow.document;
            if(iframe_doc){
                let adisp=
                    '<div class="alt_disp"><span ></span>'+
                    '<style>'+
                    '.alt_disp { position: absolute; z-index: 10; font: normal 14px/16px Meiryo; '+
                    'padding: 3px 6px 1px; color: #000; border: 1px solid #aaa; background: #fff; '+
                    'display: none; }'+
                    '</style></div>';

                if(!iframe_doc.querySelector('.alt_disp')){
                    iframe_doc.documentElement.insertAdjacentHTML('beforeend', adisp); }



                let target1=iframe_doc.querySelector('body.cke_editable'); // 監視 target
                if(target1){
                    let monitor1=new MutationObserver(img_check);
                    monitor1.observe(target1, {childList: true}); }

                img_check();

                function img_check(){
                    let all_img=iframe_doc.querySelectorAll('img');
                    for(let k=0; k<all_img.length; k++){
                        all_img[k].addEventListener('mouseover', function(){
                            disp(all_img[k]); }); }

                    card_thumb();

                } // img_check()


                function disp(pelement){
                    let spos_y=iframe_doc.documentElement.scrollTop;
                    let pos_x=pelement.getBoundingClientRect().left+4;
                    let pos_y=pelement.getBoundingClientRect().top+spos_y+2;

                    let alt_text=pelement.getAttribute('alt');
                    let alt_disp=iframe_doc.querySelector('.alt_disp');
                    let alt_disp_span=iframe_doc.querySelector('.alt_disp span');
                    if(alt_text && alt_disp && alt_disp_span){
                        alt_disp_span.textContent=alt_text;
                        alt_disp.style.left=pos_x+'px';
                        alt_disp.style.top=pos_y+'px';
                        alt_disp.style.display='block';

                        disp_out(pelement, alt_disp); }}


                function disp_out(pelem, alt_disp){
                    pelem.onmouseleave=()=>{
                        alt_disp.style.display='none'; }
                    pelem.onmouseover=()=>{
                        alt_disp.style.display='block'; }
                    alt_disp.onmouseover=()=>{
                        alt_disp.style.display='block'; }
                    alt_disp.onmouseleave=()=>{
                        alt_disp.style.display='none'; }}



                function card_thumb(){
                    let card_image=iframe_doc.querySelectorAll('.ogpCard_image');
                    for(let k=0; k<card_image.length; k++){
                        if(type==0){
                            card_image[k].setAttribute('alt', '🔗'); }
                        else{
                            card_image[k].setAttribute('alt', ''); }}

                } //card_thumb()

            }} // if(editor_iframe)

    } // main_in()

} // main()



function type_set(){
    let dp_el=document.querySelector('.dispalt_el');
    let dp_et=document.querySelector('.dispalt_et');
    if(dp_el && dp_et){
        if(type==0){
            dp_el.disabled=false;
            dp_et.disabled=true; }
        else{
            dp_el.disabled=true;
            dp_et.disabled=false; }

        let alt_sw=document.querySelector('#js-aiAltFlag');
        if(alt_sw){
            alt_sw.onclick=(event)=>{
                if(event.ctrlKey){
                    event.preventDefault();
                    if(type==0){
                        type=1;
                        dp_el.disabled=true;
                        dp_et.disabled=false; }
                    else{
                        type=0;
                        dp_el.disabled=false;
                        dp_et.disabled=true; }

                    localStorage.setItem('DispALT_E', type); }}}} // 🔵

} // type_set()
