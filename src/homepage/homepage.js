export { homepage as default };

import { createChildElement } from "../utility/utility";
import HomeImage from "./shawnanggg-nmpW_WwwVSc-unsplash.jpg";

const homepage = document.createElement("div");
homepage.id = "homepage-tab";
homepage.dataset.tabName = "Home";

const imageFigure = createChildElement("figure", homepage);
imageFigure.classList.add("full-bleed");

const image = createChildElement("img", imageFigure);
image.src = HomeImage;

const imageCredit = createChildElement("figcaption", imageFigure);
imageCredit.innerHTML =
  'Photo by <a href="https://unsplash.com/@shawnanggg" rel="noreferrer noopener" target="_blank">shawnanggg</a> ' +
  'on <a href="https://unsplash.com/photos/nmpW_WwwVSc" rel="noreferrer noopener" target="_blank">Unsplash</a>';

const homePageContentSections = [
  [
    [
      "p",
      "At Culinary Delights, we invite you to embark on a gastronomic journey" +
        " like no other. Our passion for food, dedication to quality, and " +
        "commitment to exceptional service come together to create an " +
        "unforgettable dining experience.",
    ],
  ],
  [["h3", "Discover our Culinary World"]],
  [
    ["h4", "Exquisite Flavors:"],
    [
      "p",
      "Our menu is a symphony of flavors, carefully composed by our talented " +
        "chefs. From succulent steaks to fresh seafood, and innovative " +
        "vegetarian creations, each dish tells a story of culinary craftsmanship.",
    ],
  ],
  [
    ["h4", "Farm-to-Table Freshness:"],
    [
      "p",
      "We source the finest locally grown ingredients to ensure that every " +
        "plate reflects the vibrant, seasonal bounty of our region. With every " +
        "bite, you'll taste the difference that fresh, responsibly sourced " +
        "ingredients make.",
    ],
  ],
  [
    ["h4", "Unparalleled Service:"],
    [
      "p",
      "Our attentive and knowledgeable staff is here to make your dining " +
        "experience exceptional. We take pride in curating a seamless journey " +
        "from the moment you enter our doors until your last sip of wine.",
    ],
  ],
  [
    [
      "p",
      "Welcome to Culinary Delights, where every dish is a masterpiece, and " +
        "every visit is a culinary adventure. We can't wait to serve you.",
    ],
  ],
];

for (const section of homePageContentSections) {
  const sectionElement = createChildElement("section", homepage);

  for (const [type, content] of section) {
    const element = createChildElement(type, sectionElement);
    element.textContent = content;
  }
}
