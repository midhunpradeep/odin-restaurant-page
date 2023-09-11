import { createChildElement } from "./utility/utility";
import homepage from "./homepage/homepage";

const contentElement = createChildElement("div", document);
contentElement.id = "content";

const heading = createChildElement("h1", homepage);
heading.textContent = "Culinary Delights";

const subtitle = createChildElement("h2", homepage);
subtitle.textContent = "Where exquisite flavors meet warm hospitality.";

contentElement.appendChild(homepage);
