// ==UserScript==
// @name        Display ALT Editor
// @namespace        http://tampermonkey.net/
// @version        0.3
// @description        編集画面内の記事画像にマウスホバーでALTを表示
// @author        Ameba Blog User
// @match        https://blog.ameba.jp/ucs/entry/srventry*
// @exclude        https://blog.ameba.jp/ucs/entry/srventrylist*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameba.jp
// @updateURL        https://github.com/personwritep/Display_ALT_Editor/raw/main/Display_ALT_Editor.user.js
// @downloadURL        https://github.com/personwritep/Display_ALT_Editor/raw/main/Display_ALT_Editor.user.js
// @grant        none
// ==/UserScript==

let target=document.getElementById('cke_1_contents'); // 監視 target
if(target){
    let monitor=new MutationObserver(main);
    monitor.observe(target, {childList: true}); }

main();

function main(){
    let editor_iframe=document.querySelector('.cke_wysiwyg_frame');
    if(editor_iframe){ // iframe読込みが実行条件
        let iframe_doc=editor_iframe.contentWindow.document;
        if(iframe_doc){

            let adisp=
                '<div class="alt_disp"><span ></span>'+
                '<style>'+
                '.alt_disp { position: absolute; display: none; font: normal 14px/16px Meiryo; '+
                'padding: 3px 6px 1px; color: #000; border: 1px solid #aaa; background: #fff; }'+
                '</style></div>';

            if(!iframe_doc.querySelector('.alt_disp')){
                iframe_doc.documentElement.insertAdjacentHTML('beforeend', adisp); }



            let target0=iframe_doc.querySelector('body.cke_editable'); // 監視 target
            if(target0){
            let monitor0=new MutationObserver(img_check);
            monitor0.observe(target0, {childList: true}); }

            img_check();

            function img_check(){
                let all_img=iframe_doc.querySelectorAll('img');
                for(let k=0; k<all_img.length; k++){
                    all_img[k].addEventListener('mouseover', function(){
                        disp(all_img[k]); }); }

                // 引数「0」はサムネイル画像の「代替テキスト」に「🔗」を記入する　🔴
                // 引数「1」はサムネイル画像の「代替テキスト」自動追加を有効にする 🔴
                card_thumb(0);

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



            function card_thumb(n){
                let card_image=iframe_doc.querySelectorAll('.ogpCard_image');
                for(let k=0; k<card_image.length; k++){
                    if(n==0){
                        card_image[k].setAttribute('alt', '🔗'); }
                    else{
                        if(card_image[k].getAttribute('alt')=='🔗'){
                            card_image[k].setAttribute('alt', ''); }}}}

        }} // if(editor_iframe)
} // main()
