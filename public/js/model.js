// Model.js file
import { API_KEY } from "./config.js";
import { BASE_URL } from "./config.js";
export const state = {
  trendingMovies: [],
  cardNum: 0,
  exploreMovie: {
    data: [],
    page: 1,
    totalPages: 500,
  },
};
// Trending Movies...
export const fetchTrendingMovies = async function () {
  try {
    const response = await fetch(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`);
    const data = await response.json();
    state.trendingMovies = data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchMoviesData = async function () {
  try {
    const response = await fetch(
      `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${state.exploreMovie.page}`
    );
    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`);
    const data = await response.json();

    state.exploreMovie.data = data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export function setCardNum(cardNum) {
  state.cardNum = cardNum;
}
export const moveToPage = function (goToPage) {
  state.exploreMovie.page = goToPage;
};
