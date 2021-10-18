import { createCalculatorPage } from "./lib/calculatorPage.js";
import { createTitleComponent } from "./lib/titleComponent.js";
import { add } from "./lib/calculateMethods.js";

// Declare a function to create the elements and logic inside the #app element
function createApp() {
  // Get a reference to the <div id="app"></div> element
  const appElement = document.querySelector("#app");

  // Create title component
  const titleComponent = createTitleComponent();

  // Append the titleComponent to the app
  appElement.append(titleComponent);

  // Create first page with a callback, if the birthday is submitted
  const calculatorPage = createCalculatorPage(function (num1) {
    // 📝 This alert is only temporary. We like to render a second page if the birthday is submitted.
    // 📝 The second page should display details about your birthday like the weekday of birth or the days left until you can celebrate again 🎉.
    // 📝 You might want to add the birthday as argument to the creation of the second page
    // 📝 Make sure to remove the enter birthday page before.

    let result = parseFloat(num1);

    calculatorPage.querySelector("#showNumber").placeholder = `= ${result}`;
  });

  // Append the inputPage to the app
  appElement.append(calculatorPage);
}

// Run the createApp function
createApp();
