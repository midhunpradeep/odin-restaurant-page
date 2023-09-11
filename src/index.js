import { createChildElement } from "./utility/utility";
import homepage from "./homepage/homepage";

const contentElement = createChildElement("div", document.body);
contentElement.id = "content";

const heading = createChildElement("h1", contentElement);
heading.textContent = "Culinary Delights";

const subtitle = createChildElement("h2", contentElement);
subtitle.textContent = "Where exquisite flavors meet warm hospitality.";

contentElement.appendChild(homepage);
