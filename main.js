import { createCalculatorPage } from "./lib/calculatorPage.js";
import { createTitleComponent } from "./lib/titleComponent.js";

// Declare a function to create the elements and logic inside the #app element
function createApp() {
  // Get a reference to the <div id="app"></div> element
  const appElement = document.querySelector("#app");

  // Create title component
  const titleComponent = createTitleComponent();

  // Append the titleComponent to the app
  appElement.append(titleComponent);

  // Create first page with a callback, if the numbers and operation is submitted
  const calculatorPage = createCalculatorPage(function (num1) {
    let result = parseFloat(num1);

    calculatorPage.querySelector("#showNumber").placeholder = `= ${result}`;
  });

  // Append the calculatorPage to the app
  appElement.append(calculatorPage);
}

// Run the createApp function
createApp();
