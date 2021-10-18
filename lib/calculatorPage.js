import { createElement } from "./elements.js";
// import { add, subtract, multiply, divide } from "/lib/calculateMethods.js";
// 📝 The onSubmit argument is not used. It should tell the parent component when the form is submitted and bypass the birthday.
// 📝 A submit input/button is missing
// Creates the page to enter the birthday

// function createNumber(amount) {
//   const number = [];
//   for (i = 0; i < amount; i++) {
//     number[i] = createElement(
//       "button",
//       {
//         className: "submitButton",
//         type: "button",
//         value: i,
//         onclick: function () {
//           firstValue = i;
//           formElement.querySelector("#showNumber").placeholder = this.value;
//         },
//       },
//       [i]
//     );
//   }
// }

export function createCalculatorPage(onSubmit) {
  // Creates and Initializes the firstValue variable to 0
  let firstValue = 0;
  // Creates and Initializes the secondValue variable to 0
  let secondValue = 0;
  // Creates and Initializes the result variable to 0
  let result = 0;
  // Creates and Initializes the number variable to 0, which is to output the value of the current number
  let number = 0;
  // Creates an empty operator array, which is used to store and return the value of the last used operator
  let operator = [];
  // Creates an empty values array, which is used to store and return values of the number buttons clicked
  let values = [];

  // Creates <input type="text" for display purposes (displays numbers or math operation symbols in real time)/>
  const numberInput = createElement("input", {
    type: "text",
    placeholder: firstValue,
    id: "showNumber", // Given an id for easier accessabillity
    disabled: true,
  });

  //  Creates a button element with a value 1
  const number1 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 1,
      onclick: function () {
        values.push(this.value); // On every onclick it pushes the value of the clicked button in the Array

        // Checks if the values Array has more than one number
        if (values.length > 1) {
          // if true, it concatenates the last array value to nubmer (String)
          number += values[values.length - 1];
        } else {
          // if not true, it gives the number the value of the first value from the values Array
          number = values[0];
        }
        // selects the input and displays the current number
        formElement.querySelector("#showNumber").placeholder = number;
      },
    },
    ["1"]
  );

  const number2 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 2,
      onclick: function () {
        values.push(this.value);

        if (values.length > 1) {
          number += values[values.length - 1];
        } else {
          number = values[0];
        }
        formElement.querySelector("#showNumber").placeholder = number;
      },
    },
    ["2"]
  );

  const number3 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 3,
      onclick: function () {
        values.push(this.value);

        if (values.length > 1) {
          number += values[values.length - 1];
        } else {
          number = values[0];
        }
        formElement.querySelector("#showNumber").placeholder = number;
      },
    },
    ["3"]
  );

  const number4 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 4,
      onclick: function () {
        values.push(this.value);

        if (values.length > 1) {
          number += values[values.length - 1];
        } else {
          number = values[0];
        }
        formElement.querySelector("#showNumber").placeholder = number;
      },
    },
    ["4"]
  );

  const number5 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 5,
      onclick: function () {
        values.push(this.value);
        // alert(values.length);
        if (values.length > 1) {
          number += values[values.length - 1];
        } else {
          number = values[0];
        }
        formElement.querySelector("#showNumber").placeholder = number;
      },
    },
    ["5"]
  );

  const number6 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 6,
      onclick: function () {
        values.push(this.value);

        if (values.length > 1) {
          number += values[values.length - 1];
        } else {
          number = values[0];
        }
        formElement.querySelector("#showNumber").placeholder = number;
      },
    },
    ["6"]
  );

  const number7 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 7,
      onclick: function () {
        values.push(this.value);

        if (values.length > 1) {
          number += values[values.length - 1];
        } else {
          number = values[0];
        }
        formElement.querySelector("#showNumber").placeholder = number;
      },
    },
    ["7"]
  );

  const number8 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 8,
      onclick: function () {
        values.push(this.value);

        if (values.length > 1) {
          number += values[values.length - 1];
        } else {
          number = values[0];
        }
        formElement.querySelector("#showNumber").placeholder = number;
      },
    },
    ["8"]
  );

  const number9 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 9,
      onclick: function () {
        values.push(this.value);

        if (values.length > 1) {
          number += values[values.length - 1];
        } else {
          number = values[0];
        }
        formElement.querySelector("#showNumber").placeholder = number;
      },
    },
    ["9"]
  );

  const number0 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 0,
      onclick: function () {
        values.push(this.value);

        // Checks if the values Array has more than one inputed number and if the first value not 0 is
        if (values.length > 1 && values[0] != 0) {
          // if true, it concatenates the 0 to the number
          number += values[values.length - 1];
        } else {
          // if false, it empties the array so it removes unnecc
          values = [];
        }
        formElement.querySelector("#showNumber").placeholder = number;
      },
    },
    ["0"]
  );

  const deleteNumber = createElement("button", {
    className: "submitButton fas fa-backspace",
    type: "button",
    value: "delete",
    onclick: function () {
      firstValue = 0;
      number = 0;
      values = [];
      formElement.querySelector("#showNumber").placeholder = "0";
    },
  });

  const plus = createElement(
    "button",
    {
      className: "submitButton calcMethod",
      type: "button",
      value: "+",
      placeholder: "+",
      onclick: function () {
        values = [];
        firstValue = parseFloat(number);
        number = 0;
        formElement.querySelector("#showNumber").placeholder = this.placeholder;
      },
    },
    ["+"]
  );

  const minus = createElement(
    "button",
    {
      className: "submitButton calcMethod",
      type: "button",
      value: "-",
      placeholder: "-",
      onclick: function () {
        values = [];
        operator[0] = "-";
        firstValue = parseFloat(number);
        number = 0;
        formElement.querySelector("#showNumber").placeholder = this.placeholder;
      },
    },
    ["-"]
  );

  const multiply = createElement(
    "button",
    {
      className: "submitButton calcMethod",
      type: "button",
      value: "x",
      placeholder: "x",
      onclick: function () {
        values = [];
        operator[0] = "x";
        firstValue = parseFloat(number);
        number = 0;
        formElement.querySelector("#showNumber").placeholder = this.placeholder;
      },
    },
    ["x"]
  );

  const divide = createElement(
    "button",
    {
      className: "submitButton calcMethod",
      type: "button",
      value: "/",
      placeholder: "/",
      onclick: function () {
        values = [];
        operator[0] = "/";
        firstValue = parseFloat(number);
        number = 0;
        formElement.querySelector("#showNumber").placeholder = this.placeholder;
      },
    },
    ["/"]
  );

  const submitButton = createElement(
    "button",
    {
      className: "submitButton result",
      type: "submit",
      onclick: function () {
        values = [];
        secondValue = parseFloat(number);

        if (operator[0] === "-") {
          result = parseFloat(firstValue) - parseFloat(secondValue);
        } else if (operator[0] === "x") {
          result = parseFloat(firstValue) * parseFloat(secondValue);
        } else if (operator[0] === "/") {
          result = parseFloat(firstValue) / parseFloat(secondValue);
        } else {
          result = parseFloat(firstValue) + parseFloat(secondValue);
        }
        operator = [];
      },
    },
    ["="]
  );

  const calculatorContainer = createElement(
    "div",
    {
      className: "calculator__container",
    },
    [
      numberInput,
      number1,
      number2,
      number3,
      plus,
      number4,
      number5,
      number6,
      minus,
      number7,
      number8,
      number9,
      multiply,
      number0,
      divide,
      deleteNumber,
      submitButton,
    ]
  );

  // Create a form element
  const formElement = createElement(
    "form",
    {
      className: "form",
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(result);
      },
    },
    [calculatorContainer]
  );

  return formElement;
}
