export { homepage as default };

import { createChildElement } from "../utility/utility";
import Image from "./patrick-tomasso-GXXYkSwndP4-unsplash.jpg";

const homepage = document.createElement("div");
homepage.id = "homepage-tab";
homepage.dataset.tabName = "Home";

const image = createChildElement("img", homepage);
image.src = Image;

const aboutUsHeading = createChildElement("h3", homepage);
aboutUsHeading.textContent = "About us:";

const aboutUsParagraph = createChildElement("p", homepage);
aboutUsParagraph.textContent =
  "At Culinary Delights, we are passionate about food and believe in the " +
  "magic of culinary artistry. Our team of skilled chefs combines fresh, " +
  "locally sourced ingredients with innovative techniques to craft dishes " +
  "that not only tantalize your palate but also tell a story on your plate.";
