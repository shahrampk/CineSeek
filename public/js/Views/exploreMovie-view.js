import View from "./View.js";
class ExploreMoiveView extends View {
  _parentEL = document.querySelector("#explore_movies_section");
  addHandlerExploreMovies(handler) {
    const exploreBtn = document.querySelector("#explore-Btn");
    exploreBtn.addEventListener("click", handler);
  }
  _generateMarkUp() {
    return this._data
      .map(
        (movieData) => `
                     <div
                        class="movie-card relative  border border-neutral-800 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between">

                        <!-- Poster -->
                        <div class="relative flex flex-col gap-2">
                            <img alt="${
                              movieData.title
                            }" src="https://image.tmdb.org/t/p/w500/${
          movieData.backdrop_path
        }" class="w-full h-56 object-cover bg-left-top">
                            <div class="overlay top-0 left-0 h-full w-full bg-black/20 absolute"></div>
                             <!-- Top (title + release + rating) -->
                            <div class="px-4 pb-0 relative z-50">
                                <h3 class="text-xl font-semibold text-white line-clamp-1">
                                    ${movieData.title}
                                </h3>
                                <p class="text-xs text-gray-400 flex items-center gap-3 mt-1">
                                    <span>${
                                      movieData.release_date.split("-")[0]
                                    }</span>
                                    <span class="flex items-center text-yellow-500">
                                        <svg class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 
                                1.902 0l1.286 3.97a1 1 0 
                                00.95.69h4.15c.969 0 1.371 
                                1.24.588 1.81l-3.357 2.44a1 
                                1 0 00-.364 1.118l1.287 3.97c.3.921-.755 
                                1.688-1.539 1.118l-3.357-2.44a1 
                                1 0 00-1.175 0l-3.357 
                                2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 
                                1 0 00-.364-1.118L2.314 8.397c-.783-.57-.38-1.81.588-1.81h4.15a1 
                                1 0 00.95-.69l1.286-3.97z" />
                                        </svg>
                                        ${movieData.vote_average.toFixed(1)}/10
                                    </span>
                                </p>
                            </div>
                        </div>
                        
                        <!-- Content -->
                        <div class="p-4 pt-0 flex flex-col justify-between">
                            <!-- Middle (overview) -->
                            <div class="">
                                <p class="text-sm text-gray-400 mt-3 line-clamp-2">
                                    ${movieData.overview || ""}
                                </p>
                            </div>
                        
                            <!-- Bottom (buttons) -->
                            <div class="mt-4 flex gap-3">
                                <button
                                    class="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded-lg transition">
                                    Trailer
                                </button>
                                <button
                                    class="flex-1 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg transition">
                                    Watchlist
                                </button>
                            </div>
                        </div>
                        
                    </div>
   `
      )
      .join("");
  }
}
export default new ExploreMoiveView();
