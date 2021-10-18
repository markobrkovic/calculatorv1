import { createElement } from "./elements.js";

// Creates the title component
export function createTitleComponent() {
  // Create <h1 class="title">Birthday Info 🎂</h1>
  const titleElement = createElement("h1", {
    textContent: "Tendies Calculator",
    className: "typewriter",
  });

  // Return it
  return titleElement;
}
