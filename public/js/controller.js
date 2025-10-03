// Controller.js
import * as model from "./model.js";
import CeroucelView from "./Views/ceroucel-view.js";
import movieDetailsView from "./Views/movieDetails-view.js";
import exploreMovieView from "./Views/exploreMovie-view.js";
import paginationView from "./Views/pagination-view.js";

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
    paginationView.render(model.state.exploreMovie);
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
// Pagination
const controlPaginations = async function (goToPage) {
  model.moveToPage(goToPage);
  await exploreMoviesController();
};

// Initializes the application
const init = function () {
  // FAQsView.switchAccordion();
  controlTrendingMovies();
  exploreMoviesController();
  CeroucelView.moveSlider(controlMovementSlider);
  CeroucelView.showDetailCard(showMovieCard);
  movieDetailsView.hideingingDetailsCard(hideMovieCard);
  paginationView.addHandlerBtn(controlPaginations);
};

init();
