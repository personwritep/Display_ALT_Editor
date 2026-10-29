// ==UserScript==
// @name        Display ALT Editor ⭐
// @namespace        http://tampermonkey.net/
// @version        0.9
// @description        編集画面内の記事画像にマウスホバーでALTを表示
// @author        Ameba Blog User
// @match        https://blog.ameba.jp/ucs/entry/srventryinsertinput.do*
// @match        https://blog.ameba.jp/ucs/entry/srventryupdateinput.do*
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


let p_aiAlt=document.querySelector('.p-aiAlt__content');
if(p_aiAlt){
    let help=
        '<div class="alt_help">'+
        '<a href="https://ameblo.jp/personwritep/entry-12981455269.html" target="_blank">'+
        '?</a></div>'+
        '<style>'+
        '.p-accessibility .p-aiAlt .p-aiAlt__container:hover { width: 150px; } '+
        '.p-aiAlt__content { display: flex; } '+
        '.alt_help { font: bold 14px/18px Meiryo; padding: 0 4px; margin: 6px -16px 0 20px; '+
        'height: 15px; border: 1px solid #aaa; border-radius: 20px; z-index: 1; cursor: pointer; } '+
        '.alt_help:hover { background: #00ffe2; } '+
        '.alt_help a { text-decoration: none !important; } '+
        '.p-accessibility .p-aiAlt__header, .p-accessibility .p-aiAlt__subTitle { display: none; }'+
        '</style>';

    if(!p_aiAlt.querySelector('.alt_help')){
        p_aiAlt.insertAdjacentHTML('afterbegin', help); }}


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
                    let body=iframe_doc.querySelector('body.cke_editable');
                    if(body){
                        body.addEventListener('mouseover', (event)=>{
                            if(event.target.tagName==='IMG'){
                                disp(event.target); }}); }

                    card_thumb();
                    abort_key();

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



                function abort_key(){
                    function h_keydown(event){
                        if(event.key==='Control'){
                            let alt_disp=iframe_doc.querySelector('.alt_disp');
                            if(alt_disp){
                                alt_disp.style.visibility='hidden';
                                setTimeout(()=>{
                                    alt_disp.style.visibility='';
                                }, 2000); }}}

                    function add_listener(targetDoc){
                        targetDoc.removeEventListener('keydown', h_keydown);
                        targetDoc.addEventListener('keydown', h_keydown); }

                    add_listener(document);
                    add_listener(iframe_doc);

                } // abort_key()

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
