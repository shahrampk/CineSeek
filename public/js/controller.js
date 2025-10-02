// Controller.js
import * as model from "./model.js";
import CeroucelView from "./Views/ceroucel-view.js";
import movieDetailsView from "./Views/movieDetails-view.js";
import exploreMovieView from "./Views/exploreMovie-view.js";

const controlTrendingMovies = async function () {
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

const exploreMoviesController = async function () {
  try {
    await model.fetchMoviesData();
    exploreMovieView.render(model.state.exploreMovie.data);
    console.log(model.state.exploreMovie.data);
  } catch (err) {
    console.error(err);
  }
};

const showMovieCard = function (cardNum) {
  model.setCardNum(cardNum);
  // generating markup
  movieDetailsView.showHide("flex", "hidden");
  movieDetailsView.render(model.state);
};
const hideMovieCard = function () {
  movieDetailsView.showHide("hidden", "flex");
};

// Initializes the application
const init = function () {
  // FAQsView.switchAccordion();
  controlTrendingMovies();
  exploreMoviesController();
  CeroucelView.moveSlider(controlMovementSlider);
  CeroucelView.showDetailCard(showMovieCard);
  movieDetailsView.hideingingDetailsCard(hideMovieCard);
};

init();
