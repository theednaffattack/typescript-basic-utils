import {
  betterCreateElement,
  createElement,
  addGlobalEventListener,
  qs,
  qsa,
} from "./dom-utils";

console.log("Buttons\n", qsa(".btn"));
console.log("Wrapper\n", qs("wrapper"));
console.log("Buttons in Wrapper", qsa(".btn", qs(".wrapper")));

addGlobalEventListener("click", ".btn", (e) => {
  console.log(e.target);
});

addGlobalEventListener("click", ".btn", () => console.log("Runs once"), {
  once: true,
});

addGlobalEventListener(
  "click",
  ".btn",
  () => console.log("Only works on buttons in modal."),
  {},
  qs(".wrapper")
);

document.createElement("div", { is: "" });

const element = createElement("button", {
  className: "btn",
  text: "New",
  dataset: { test: true },
  id: "new",
  "data-hi": "Yes",
});

const betterElement = betterCreateElement("button", {
  className: "btn",
  text: "New Too",
  dataset: { test: true },
  id: "new-too",
  "data-hi": "Yes-2",
});

const newWrapper = qs(".wrapper");

if (newWrapper) {
  newWrapper.append(element);
  newWrapper.append(betterElement);
}
