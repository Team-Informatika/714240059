import {renderHTML,onClick,setInner} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/element.js";

renderHTML('content', 'cok.html');

onClick("github",myGithub);
function myGithub() {
    window.open('https://github.com/Ameringkseh', 'blank');
}
onClick("whatsapp",mywhatsapp);
function mywhatsapp() {
    window.open('https://whatsapp.com/6287723806103', 'blank');
}
onClick("instagram",myinstagram);
function myinstagram() {
    window.open('https://instagram.com/not_moch', 'blank');
}

setInner("tex", "kontak saya:")