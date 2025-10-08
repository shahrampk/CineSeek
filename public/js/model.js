// Model.js file
import { API_KEY } from "./config.js";
import { BASE_URL } from "./config.js";
export const state = {
  trendingMoviesData: {
    trendingMovies: [],
    cardNum: 0,
  },
  exploreMovie: {
    data: [],
    page: 1,
    totalPages: 500,
  },
  searchResult: [],
  watchList: JSON.parse(localStorage.getItem("watchlist")) || [],
};
// Trending Movies...
// Fetch trending movies with trailer keys
export const fetchTrendingMovies = async function () {
  try {
    // Step 1: Fetch trending movies
    const response = await fetch(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );

    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`);

    const data = await response.json();

    // Step 2: For each movie, fetch its trailer key
    const moviesWithTrailers = await Promise.all(
      data.results.map(async (movie) => {
        const trailerKey = await fetchTrailerUrl(movie.id);
        return { ...movie, trailerKey }; // Add trailer key to movie object
      })
    );

    // Step 3: Save to state
    state.trendingMoviesData.trendingMovies = moviesWithTrailers;
  } catch (err) {
    console.error("Error fetching trending movies:", err);
    throw err;
  }
};

// Fetch discover movies with trailer keys
export const fetchMoviesData = async function () {
  try {
    // Step 1: Fetch movies list
    const response = await fetch(
      `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${state.exploreMovie.page}`
    );

    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`);

    const data = await response.json();

    // Step 2: For each movie, fetch its trailer key in parallel
    const moviesWithTrailers = await Promise.all(
      data.results.map(async (movie) => {
        const trailerKey = await fetchTrailerUrl(movie.id);
        return { ...movie, trailerKey }; // merge trailer key into movie object
      })
    );

    // Step 3: Save final array to state
    state.exploreMovie.data = moviesWithTrailers;
  } catch (err) {
    console.error("Error fetching discover movies:", err);
    throw err;
  }
};

// Helper function: fetch trailer key from TMDB
const fetchTrailerUrl = async function (movieId) {
  try {
    const res = await fetch(
      `${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();

    const trailer = data.results.find(
      (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    );

    return trailer ? trailer.key : null; // Return only YouTube trailer key
  } catch (err) {
    console.error(`Error fetching trailer for movie ID ${movieId}:`, err);
    return null;
  }
};
export function setCardNum(cardNum) {
  state.trendingMoviesData.cardNum = cardNum;
}
export const moveToPage = function (goToPage) {
  state.exploreMovie.page = goToPage;
};

// Fetch search results with trailer keys
export const loadSearchResult = async function (query, page = 1) {
  try {
    // Step 1: Fetch movie search results
    const response = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );

    if (!response.ok) {
      console.error(`${response.status} - ${response.statusText}`);
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    // Step 2: Handle empty search results
    if (data.results.length === 0)
      throw new Error("No movies found for your search. Try another title!");

    // Step 3: Fetch trailer key for each movie in parallel
    const moviesWithTrailers = await Promise.all(
      data.results.slice(0, 4).map(async (movie) => {
        const trailerKey = await fetchTrailerUrl(movie.id);
        return { ...movie, trailerKey };
      })
    );

    // Step 4: Save final array to state
    state.searchResult = moviesWithTrailers;
  } catch (err) {
    console.error("Error loading search results:", err);
    throw err;
  }
};
export const addToWatchList = function (cardNum) {
  const movieDate = state.exploreMovie.data[cardNum];
  if (!state.watchList.some((m) => m.id === movieDate.id)) {
    state.watchList.push(movieDate);
    localStorage.setItem("watchlist", JSON.stringify(state.watchList));
  }
};
export const deleteFromWatch = function (cardNum) {
  state.watchList.splice(cardNum, 1);

  localStorage.setItem("watchlist", JSON.stringify(state.watchList));
};
