import homepage from "./homepage/homepage";

const contentElement = document.createElement("div");
contentElement.id = "content";
contentElement.appendChild(homepage);

document.body.appendChild(contentElement);
