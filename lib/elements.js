export function createElement(tagName, props, childElements) {
  // Create a new element based on the tagName
  const element = document.createElement(tagName);

  // Check, if props should be set
  if (props) {
    // Assign all props to the element
    Object.assign(element, props);
  }

  // Check, if childElements should be added
  if (childElements) {
    // Append all childElements to the element
    element.append(...childElements);
  }

  // Return the element
  return element;
}
