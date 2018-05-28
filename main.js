const accordions = document.getElementsByClassName('accordion');

for (const accordion of accordions) {
  accordion.onclick = function () {
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // accordion is open, we need to close it
      content.style.maxHeight = null;
    } else {
      // accordion is closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}