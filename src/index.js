import { createChildElement } from "./utility/utility";
import homepage from "./homepage/homepage";
import menuPage from "./menu-page/menu-page";
import contactPage from "./contact-page/contactPage";
import "./style.css";

const contentElement = createChildElement("div", document.body);
contentElement.id = "content";

const heading = createChildElement("h1", contentElement);
heading.textContent = "Culinary Delights";

const subtitle = createChildElement("h2", contentElement);
subtitle.textContent = "Where exquisite flavors meet warm hospitality.";

const tabNavBar = createChildElement("nav", contentElement);
const tabNavList = createChildElement("ul", tabNavBar);

function createTabListItemElement(tabElement) {
  // TODO replace manual display: none with CSS file
  const listElement = document.createElement("li");
  const button = createChildElement("button", listElement);
  button.type = "button";
  button.textContent = tabElement.dataset.tabName;
  tabElement.style.display = "none";

  button.addEventListener("click", () => {
    switchActiveTab(tabElement);
  });

  return listElement;
}

function switchActiveTab(newActiveTab) {
  for (const activeTab of document.querySelectorAll("[data-active-tab]")) {
    delete activeTab.dataset.activeTab;
    activeTab.style.display = "none";
  }

  newActiveTab.dataset.activeTab = "";
  newActiveTab.style.display = "";
  console.log(newActiveTab);
}

const tabs = [homepage, menuPage, contactPage];

for (const tab of tabs) {
  contentElement.appendChild(tab);
  tabNavList.appendChild(createTabListItemElement(tab));
}
switchActiveTab(tabs[0]);
