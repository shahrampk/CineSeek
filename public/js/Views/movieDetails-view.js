import View from "./View.js";
import { genres } from "../config.js";
class ShowMovieDetails extends View {
  _parentEL = document.querySelector("#movie__details");

  hideingingDetailsCard(handler) {
    this._parentEL.addEventListener("click", (e) => {
      const crossBtn = e.target.closest("#cross-btn");
      if (crossBtn || e.target === e.currentTarget) handler();
    });
  }
  _generateMarkUp() {
    console.log(this._data);
    const details = this._data.trendingMovies[this._data.cardNum];
    console.log(details);
    return `
     
        <div id="movie__details_details--box"
            class="h-details-box w-details-box-md lg:w-details-box-lg bg-secondary rounded-lg overflow-hidden border border-gray-800/60 flex flex-col ">
            <div class="image-box bg-green-700 h-3/5 bg-cover bg-center bg-linear-gradient overflow-hidden relative"
                style="background-image:  url('https://image.tmdb.org/t/p/w500/${
                  details.backdrop_path
                }')">
                <div id='cross-btn' class="absolute bg-black/20 cursor-pointer transition-all duration-200 hover:bg-black/30 p-1 rounded-md right-4 top-3 z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div class="overlay bg-movie-card-gradient absolute inset-0"></div>
                <div class="overlay w-full absolute shadow-movie-card-gradient bottom-0  z-40"></div>
                <div class="title absolute w-full bottom-2 left-4 z-50">
                    <h2 class="text-xl md:text-3xl font-bold">${details.title}</h2>
                </div>
            </div>
            <div class="details h-2/5 py-2 px-6 flex flex-col gap-5">
                <div class="movie-info">
                    <span
                        class="px-2 py-1 bg-search-bar/70 inline-flex rounded-sm opacity-90 text-sm justify-center items-center">${
                          details.release_date.split("-")[0]
                        }</span>

                        ${this._generateGenric(details)}
                </div>
                <div class="description">
                    <p class="line-clamp-3 opacity-85 text-sm md:text-base">${details.overview}
                </div>
                <div class="watch mt-2">
                    <a href="" type="button"
                        class="bg-red-600 hover:bg-red-700 transition-all duration-300 px-3 py-2 inline-flex justify-center items-center text-lg rounded group">
                        <span>Watch</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" height="20" class="transition-all duration-300 group-hover:ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `;
  }
  _generateGenric(details) {
    return details.genre_ids
      .map((id) => genres.find((g) => g.id === id))
      .map(
        (act) => `
              <span
                class="px-2 py-1 bg-search-bar/70 inline-flex rounded-sm opacity-90 text-sm justify-center items-center">${act.name}</span>`
      )
      .join(" ");
  }
}
export default new ShowMovieDetails();
