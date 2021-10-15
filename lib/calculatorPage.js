import { createElement } from "./elements.js";
// 📝 The onSubmit argument is not used. It should tell the parent component when the form is submitted and bypass the birthday.
// 📝 A submit input/button is missing
// Creates the page to enter the birthday
export function createCalculatorPage(onSubmit) {
  // Creates <input type="date" />

  // Creates <input type="date" />

  //   for (i = 0; i < 10; i++) {
  //     let submitButton = createElement(
  //       "button",
  //       {
  //         className: "submitButton",
  //         type: "submit",
  //       },
  //       [i]
  //     );
  //   }

  let firstValue = 0;

  const number1 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 1,
      onclick: function () {
        firstValue = number1.value;
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
        firstValue = number2.value;
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
        firstValue = number3.value;
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
        firstValue = number4.value;
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
    },
    ["5"]
  );

  const number6 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 6,
    },
    ["6"]
  );

  const number7 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 7,
    },
    ["7"]
  );

  const number8 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 8,
    },
    ["8"]
  );

  const number9 = createElement(
    "button",
    {
      className: "submitButton",
      type: "button",
      value: 9,
    },
    ["9"]
  );

  const deleteNumber = createElement("button", {
    className: "submitButton fas fa-backspace",
    type: "button",
    value: "delete",
  });

  const plus = createElement(
    "button",
    {
      className: "submitButton calcMethod",
      type: "button",
      value: "+",
    },
    ["+"]
  );

  const minus = createElement(
    "button",
    {
      className: "submitButton calcMethod",
      type: "button",
      value: "-",
    },
    ["-"]
  );

  const multiply = createElement(
    "button",
    {
      className: "submitButton calcMethod",
      type: "button",
      value: "x",
    },
    ["x"]
  );

  const divide = createElement(
    "button",
    {
      className: "submitButton calcMethod",
      type: "button",
      value: "/",
    },
    ["/"]
  );

  const submitButton = createElement(
    "button",
    {
      className: "submitButton result",
      type: "submit",
    },
    ["="]
  );

  const numberInput = createElement("input", {
    type: "text",
    placeholder: firstValue,
    id: "showNumber",
    disabled: true,
  });

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
        onSubmit(firstValue);
      },
    },
    [calculatorContainer]
  );

  return formElement;
}
