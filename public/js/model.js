// Model.js file
import { API_KEY } from "./config.js";
import { BASE_URL } from "./config.js";
export const state = {
  trendingMovies: [],
  cardNum: 0,
};

export const fetchTrendingMovies = async function () {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    const data = await response.json();
    state.trendingMovies = data.results;
    console.log(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export function setCardNum(cardNum) {
  state.cardNum = cardNum;
}
