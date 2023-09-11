import { createChildElement } from "./utility/utility";
import homepage from "./homepage/homepage";

const contentElement = createChildElement("div", document);
contentElement.id = "content";
contentElement.appendChild(homepage);
