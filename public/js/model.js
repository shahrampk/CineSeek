// Model.js file
import { API_KEY } from "./config.js";
import { BASE_URL } from "./config.js";
console.log("Model.js");
export const state = {
  trendingMovies: [],
};

export const fetchTrendingMovies = async function () {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  state.trendingMovies = data.results;
};
