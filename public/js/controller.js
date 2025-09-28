// Controller.js
import * as model from "./model.js";
import FAQsView from "./Views/FAQs-view.js";
import ceroucelView from "./Views/ceroucel-view.js";

console.log("Controller.js loaded");

const controllTrendingMovies = async function () {
  try {
    await model.fetchTrendingMovies();
    console.log(model.state.trendingMovies);
    ceroucelView.render(model.state.trendingMovies);
  } catch (err) {
    console.error(err);
  }
};

// Initializes the application
const init = function () {
  FAQsView.switchAccordion();
  controllTrendingMovies();
};

init();
