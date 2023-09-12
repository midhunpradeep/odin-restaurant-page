import homepage from "../homepage/homepage";

export { menuPage as default };

import { createChildElement } from "../utility/utility";

const menuPage = document.createElement("div");
menuPage.id = "menu-page-tag";
menuPage.dataset.tabName = "Menu";

const aboutMenuParagraph = createChildElement("p", menuPage);
aboutMenuParagraph.textContent =
  "Explore our diverse menu, thoughtfully curated to cater to every palate." +
  " From mouthwatering appetizers that set the stage for your meal to" +
  " decadent desserts that provide the perfect conclusion, our menu is a" +
  " culinary journey through a world of flavors. Whether you crave classic" +
  " comfort food or crave an adventurous gastronomic experience, we have" +
  " something to satisfy your cravings.";

const menuContainer = createChildElement("div", menuPage);
menuContainer.classList.add("menu-container");

function generateMenuSection(heading, contents) {
  const sectionFigureElement = document.createElement("figure");

  const headingElement = createChildElement("figcaption", sectionFigureElement);
  headingElement.textContent = heading;

  const listElement = createChildElement("ul", sectionFigureElement);
  for (const [name, description] of contents) {
    const menuItemElement = createChildElement("li", listElement);

    const nameElement = createChildElement("p", menuItemElement);
    nameElement.textContent = name;

    const descriptionElement = createChildElement("p", menuItemElement);
    descriptionElement.textContent = description;
  }

  return sectionFigureElement;
}

const menuData = new Map();
menuData.set("Appetizers", [
  [
    "Caprese Salad",
    "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
  ],
  [
    "Crispy Calamari",
    "Tender calamari rings lightly fried to perfection, served with zesty marinara sauce.",
  ],
  [
    "Mushroom Bruschetta",
    "Sautéed mushrooms with garlic and herbs on toasted baguette slices, topped with shaved Parmesan.",
  ],
]);
menuData.set("Entrees", [
  [
    "Filet Mignon",
    "A succulent 8-ounce filet mignon grilled to your liking, served with garlic mashed potatoes and seasonal vegetables.",
  ],
  [
    "Lobster Linguine",
    "Fresh lobster tail and claw meat tossed in a creamy garlic and white wine sauce with linguine pasta.",
  ],
  [
    "Vegetable Stir-Fry",
    "A medley of crisp seasonal vegetables stir-fried with tofu in a savory ginger soy sauce, served over steamed jasmine rice.",
  ],
]);
menuData.set("Desserts", [
  [
    "Tiramisu",
    "Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cheese, dusted with cocoa.",
  ],
  [
    "Berry Panna Cotta",
    "Creamy vanilla bean panna cotta topped with a vibrant mixed berry compote.",
  ],
]);

for (const [heading, contents] of menuData) {
  const sectionElement = generateMenuSection(heading, contents);
  menuContainer.appendChild(sectionElement);
}

const endParagraph = createChildElement("p", menuPage);
endParagraph.textContent =
  "We hope you enjoy this small but delightful selection of dishes at Culinary Delights!";
