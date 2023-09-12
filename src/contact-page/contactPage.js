import { createChildElement } from "../utility/utility";
import homepage from "../homepage/homepage";

export { contactPage as default };

const contactPage = document.createElement("div");
contactPage.id = "contact-page-tab";
contactPage.dataset.tabName = "Contact";

const contactUsHeading = createChildElement("h3", contactPage);
contactUsHeading.textContent = "Contact Us";

const contactUsParagraph = createChildElement("p", contactPage);
contactUsParagraph.textContent =
  "At Culinary Delights, we are always eager to hear from our valued guests. " +
  "Whether you have a question, feedback, or wish to make a reservation, " +
  "we're here to assist you. Feel free to reach out to us through the " +
  "following contact methods:";

const addressHeading = createChildElement("h4", contactPage);
addressHeading.textContent = "Address:";

const addressElement = createChildElement("address", contactPage);
addressElement.innerHTML =
  "Culinary Delights Restaurant<br>" +
  "123 Main Street<br>" +
  "City, State, ZIP Code";

const phoneHeading = createChildElement("h4", contactPage);
phoneHeading.textContent = "Phone:";

const phoneElement = createChildElement("address", contactPage);
phoneElement.textContent = "Reservations & General Inquiries: (123) 456-7890";

const emailHeading = createChildElement("h4", contactPage);
emailHeading.textContent = "Email:";

const emailElement = createChildElement("address", contactPage);
emailElement.innerHTML =
  "General Inquiries: info@culinarydelights.com<br>" +
  "Reservations: reservations@culinarydelights.com<br>" +
  "Feedback & Suggestions: feedback@culinarydelights.com";

const thanksElement = createChildElement("p", contactPage);
thanksElement.textContent =
  "We thank you for choosing Culinary Delights and look forward to welcoming " +
  "you to our restaurant soon. Your satisfaction is our priority, and we are " +
  "here to ensure your experience with us is nothing short of exceptional.";
