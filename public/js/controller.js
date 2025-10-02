// Controller.js
import * as model from "./model.js";
import CeroucelView from "./Views/ceroucel-view.js";
import movieDetailsView from "./Views/movieDetails-view.js";

const controllTrendingMovies = async function () {
  try {
    await model.fetchTrendingMovies();

    CeroucelView.render(model.state.trendingMovies);
  } catch (err) {
    console.error(err);
  }
};
const controlMovementSlider = function (direction) {
  CeroucelView.controllmovenent(direction);
};
const showMovieCard = function (cardNum) {
  model.setCardNum(cardNum);
  // generating markup
    movieDetailsView.showHide("flex","hidden" );
    movieDetailsView.render(model.state);
  };
  const hideMovieCard = function () {
    movieDetailsView.showHide("hidden", "flex");
};

// Initializes the application
const init = function () {
  // FAQsView.switchAccordion();
  controllTrendingMovies();
  CeroucelView.moveSlider(controlMovementSlider);
  CeroucelView.showDetailCard(showMovieCard);
  movieDetailsView.hideingingDetailsCard(hideMovieCard);
};

init();
