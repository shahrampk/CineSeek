// Controller.js
import * as model from "./model.js";
import FAQsView from "./Views/FAQs-view.js";
import CeroucelView from "./Views/ceroucel-view.js";
import ceroucelView from "./Views/ceroucel-view.js";
import movieDetailsView from "./Views/movieDetails-view.js";

const controllTrendingMovies = async function () {
  try {
    await model.fetchTrendingMovies();

    ceroucelView.render(model.state.trendingMovies);
  } catch (err) {
    console.error(err);
  }
};
const controlMovementSlider = function (direction) {
  ceroucelView.controllmovenent(direction);
};
const showMovieCard = function (cardNum) {
  model.setCardNum(cardNum);
  // generating markup
  movieDetailsView.render(model.state);
  movieDetailsView.showHide("flex", "hidden");
};
const hideMovieCard = function () {
  movieDetailsView.showHide("hidden", "flex");
};

// Initializes the application
const init = function () {
  FAQsView.switchAccordion();
  controllTrendingMovies();
  CeroucelView.moveSlider(controlMovementSlider);
  ceroucelView.showDetailCard(showMovieCard);
  movieDetailsView.hideingingDetailsCard(hideMovieCard);
};

init();
