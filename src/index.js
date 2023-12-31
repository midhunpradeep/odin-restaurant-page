import { createChildElement } from "./utility/utility";
import homepage from "./homepage/homepage";
import menuPage from "./menu-page/menu-page";
import contactPage from "./contact-page/contactPage";

import "./normalize.css";
import "./reset.css";
import "./style.css";

const contentElement = createChildElement("div", document.body);
contentElement.classList.add("content");
contentElement.id = "content";

const header = createChildElement("header", contentElement);

const headingContainer = createChildElement("div", header);
headingContainer.classList.add("heading-container");

const heading = createChildElement("h1", headingContainer);
heading.textContent = "Culinary Delights";

const subtitle = createChildElement("h2", headingContainer);
subtitle.textContent = "Where exquisite flavors meet warm hospitality.";

const tabNavBar = createChildElement("nav", header);
const tabNavList = createChildElement("ul", tabNavBar);

function createTabListItemElement(tabElement) {
  const listElement = document.createElement("li");
  const button = createChildElement("button", listElement);
  button.type = "button";
  button.textContent = tabElement.dataset.tabName;

  button.addEventListener("click", () => {
    switchActiveTab(tabElement);
  });

  return listElement;
}

function switchActiveTab(newActiveTab) {
  for (const activeTab of document.querySelectorAll("[data-active-tab]")) {
    delete activeTab.dataset.activeTab;
  }

  newActiveTab.dataset.activeTab = "";
  console.log(newActiveTab);
}

const tabs = [homepage, menuPage, contactPage];

for (const tab of tabs) {
  contentElement.appendChild(tab);
  tabNavList.appendChild(createTabListItemElement(tab));
}
switchActiveTab(tabs[0]);
