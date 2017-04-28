const myElements = [
  {
    tagName: "div",
    content: "This is the first element on the page.",
    fontSize: "22px"
  },
  {
    tagName: "p",
    content: "This is the second element on the page, it's a paragraph...",
    fontSize: "14px"
  },
  {
    tagName: "img",
    src: "https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg"
  },
  {
    tagName: "p",
    content: "Oh, I decided to add more...",
    fontSize: "27px"
  }
];

let body = document.querySelector('body');

for (let i = 0; i < myElements.length; i = i + 1) {
  let currentElement = myElements[i];
  let newNode = document.createElement(currentElement.tagName);

  if (currentElement.tagName == "img") {
    newNode.src = currentElement.src;
  } else {
    newNode.innerText = currentElement.content;
    newNode.style.fontSize = currentElement.fontSize;
  }

  body.appendChild(newNode);
}
