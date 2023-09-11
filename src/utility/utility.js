export { createChildElement };

function createChildElement(tagName, parentElement) {
  const element = document.createElement(tagName);
  parentElement.appendChild(element);
  return element;
}
