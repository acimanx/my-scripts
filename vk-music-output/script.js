const obj = document.createElement("div");
obj.id = "output-it";
obj.style.cssText = "position:fixed;top:1vh;right:1vw;width:20vw;height:50vh;background:#FFF;z-index:999;white-space:pre;overflow:auto";
const titleElement = document.getElementsByClassName("audio_row__performer_title");
for (i = 0; i < titleElement.length; i++) {
    const toolMenuItem = titleElement[i].innerText;
    const text = document.createTextNode(toolMenuItem);
    obj.appendChild(text);
    const titlesBreaker = document.createElement("br");
    obj.appendChild(titlesBreaker);
}
document.body.appendChild(obj);
