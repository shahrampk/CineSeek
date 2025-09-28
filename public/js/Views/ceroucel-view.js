import { API_KEY } from "../config.js";
import { BASE_URL } from "../config.js";
class CerouselView {
  #parentEl = document.querySelector("#carousel");
  #data;
  render(data) {
    console.log(this.#parentEl);
    this.#data = data;
    const markUp = this._generateMarkUp();
    this._clear();
    this.#parentEl.insertAdjacentHTML("afterbegin", markUp);
  }
  _clear() {
    this.#parentEl.innerHTML = "";
  }
  _generateMarkUp() {
    return this.#data.map(this._generateMarkupCerousel).join("");
  }
  _generateMarkupCerousel(movie, i) {
    if (i <= 8)
      return `
            <div class="carousel-item min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[22%]">
                <div class="bg-gray-800/80 rounded-xl overflow-hidden group drop-shadow-lg">
                    <div class="relative">
                        <div
                            class="absolute top-0 left-0 h-full w-full bg-black/20 group-hover:bg-black/35 transition-all duration-300">
                        </div>
                        <img src="https://image.tmdb.org/t/p/w780/${
                          movie.poster_path
                        }"
                            class="w-full h-72 object-cover">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold truncate">${
                          movie.title
                        }</h3>
                        <p class="text-sm text-gray-400">${movie.release_date.slice(
                          0,
                          4
                        )} | ⭐ ${movie.vote_average.toFixed(1)}/10</p>
                        <p class="text-sm mt-2 truncate">${movie.overview}</p>
                        <div class="mt-4 flex space-x-2">
                            <a target="_blank" href="${BASE_URL}/movie/${movie.id}/watch/providers?${API_KEY}"

    

                                class="bg-red-600 hover:bg-red-700 p-2 rounded text-sm transition-all duration-300">
                                Watch on YouTube
                            </a>
                            <button
                                class="bg-gray-600 hover:bg-gray-500 p-2 rounded text-sm transition-all duration-300">
                                + Watchlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }
}
export default new CerouselView();
