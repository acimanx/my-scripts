const allLinks = document.querySelectorAll(".js-folders-user-profile-link");

const eventHandler = ((() => {
  let i = 0;
  return n => () => {
    setInterval(() => {
      i++;
      const currentLink = allLinks[i];

      window.open(currentLink.href, "popUp", "width=300,height=300");
    }, 2500);
  };
}))();

const button = document.createElement("button");
button.innerHTML = "Autovisit profiles on this page";
button.setAttribute("style", "position:fixed;top:0;right:0;z-index:9999");
document.body.appendChild(button);

for (let n = 0; n < allLinks.length; n++) {
  ((n => {
    button.onclick = eventHandler(n);
  }))(n);
}
