const titleElement = document.getElementsByClassName(
  "audio_row__performer_title"
);
const arr = Array.from(titleElement);

const markup =
  `<textarea style="position:fixed;top:0;right:0;width:50%;height:100%;background:#FFF;z-index:999;white-space:pre;overflow:auto">${arr.map(({innerText}) => `${innerText}\n`).join('')}\n</textarea>\n`;

document.body.innerHTML += markup
