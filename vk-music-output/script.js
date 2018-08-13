const a = Array.from(document.getElementsByClassName("audio_row__performer_title")).map(({innerText}) => `${innerText}\n`).join("")
const b = `<textarea style="position:fixed;top:0;right:0;width:50%;height:100%;background:#FFF;z-index:999;white-space:pre;overflow:auto">${a}\n</textarea>\n`;
document.body.innerHTML += b;
