// Controller.js
import * as model from "./model.js";
import CeroucelView from "./Views/ceroucel-view.js";
import movieDetailsView from "./Views/movieDetails-view.js";
import exploreMovieView from "./Views/exploreMovie-view.js";
import paginationView from "./Views/pagination-view.js";
import searchView from "./Views/search-view.js";
import watchListView from "./Views/watchList-view.js";

// Rendering the Trending Movies...
const controlTrendingMovies = async function () {
  try {
    await model.fetchTrendingMovies();

    CeroucelView.render(model.state.trendingMovies);
  } catch (err) {
    console.error(err);
  }
};
// Adding the movement functionallity in Slider...
const controlMovementSlider = function (direction) {
  CeroucelView.controllmovenent(direction);
};
// Rendering Explore Movies Cards...
const exploreMoviesController = async function () {
  try {
    await model.fetchMoviesData();
    exploreMovieView.render(model.state.exploreMovie.data);
    paginationView.render(model.state.exploreMovie);
  } catch (err) {
    console.error(err);
  }
};
// showing the Movie details Card...
const showMovieCard = function (cardNum) {
  model.setCardNum(cardNum);
  // generating markup
  movieDetailsView.showHide("flex", "hidden");
  movieDetailsView.render(model.state);
};
// hiding the Movie details Card...
const hideMovieCard = function () {
  movieDetailsView.showHide("hidden", "flex");
};
// Pagination...
const controlPaginations = async function (goToPage) {
  model.moveToPage(goToPage);
  await exploreMoviesController();
}; // CONTROLLER
const controlSearchResult = async function () {
  try {
    // 1) Get Search Query
    const query = searchView.getQuery();
    if (!query) return;

    // Show loader
    exploreMovieView.renderLoader();

    // Load search results with pagination
    await model.loadSearchResult(query);

    // Render movies
    exploreMovieView.render(model.state.searchResult);

    // Render pagination
    paginationView.showExploreBtn();
    exploreMovieView.addHandlerExploreMovies(exploreMoviesController);
  } catch (err) {
    console.error(err);
  }
};
// WatchList Controller...
const controlWatchlist = function (cardNum) {
  model.addToWatchList(cardNum);
  watchListView.render(model.state.watchList);
};
const deleteWatchlistMovieCard = function (cardNum) {
  model.deleteFromWatch(cardNum);
  watchListView.render(model.state.watchList);
  exploreMovieView.render(model.state.exploreMovie.data);
};
// Initializes the application...
const init = function () {
  controlTrendingMovies();
  exploreMoviesController();
  exploreMovieView.addHandlerWatchList(controlWatchlist);
  CeroucelView.moveSlider(controlMovementSlider);
  CeroucelView.showDetailCard(showMovieCard);
  movieDetailsView.hideingingDetailsCard(hideMovieCard);
  paginationView.addHandlerBtn(controlPaginations);
  searchView.addHandlerSearch(controlSearchResult);
  watchListView.loadWatchListMovie(model.state.watchList);
  watchListView.addHandlerRemoveCard(deleteWatchlistMovieCard);
};

init();
