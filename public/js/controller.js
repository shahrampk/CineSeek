// Controller.js
import FAQsView from "./Views/FAQs-view.js";
// import * as model from "./model.js"; // Uncomment when model is implemented

console.log("Controller.js loaded");

/**
 * Handles FAQ toggle logic
 */
const controlFAQs = function () {
  FAQsView.switchAccordion();
};

/**
 * Initializes the application
 */
const init = function () {
  controlFAQs();
};

init();
