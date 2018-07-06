var obj = document.createElement("div");
//create output element
obj.id = "output-it";
//assign id
obj.style.cssText = "position:fixed;top:1vh;right:1vw;width:20vw;height:50vh;background:#FFF;z-index:999;white-space:pre;overflow:auto";
//assign style
var titleElement = document.getElementsByClassName("audio_row__performer_title");
//search for title
for (var i = 0; i < titleElement.length; i++) {
    //loop to show all titles
    var title = titleElement[i].innerText;
    var text = document.createTextNode(title);
    //show it as a text
    obj.appendChild(text);
    //attach text to output element
    var breakIt = document.createElement("br");
    obj.appendChild(breakIt);
    //attach br after text
}

document.body.appendChild(obj);
//attach output element to body
