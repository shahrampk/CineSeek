// Controller.js
import * as model from "./model.js";
import FAQsView from "./Views/FAQs-view.js";
import CeroucelView from "./Views/ceroucel-view.js";
import ceroucelView from "./Views/ceroucel-view.js";

const controllTrendingMovies = async function () {
  try {
    await model.fetchTrendingMovies();
    // console.log(model.state.trendingMovies);
    CeroucelView.render(model.state.trendingMovies);
  } catch (err) {
    console.error(err);
  }
};
const controlMoveSlider = function (direction) {
  ceroucelView.controllmovenent(direction);
};

// Initializes the application
const init = function () {
  FAQsView.switchAccordion();
  controllTrendingMovies();
  CeroucelView.moveSlider(controlMoveSlider);
};

init();
