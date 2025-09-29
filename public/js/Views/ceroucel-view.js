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
    console.log(this._clear);

    this.#parentEl.insertAdjacentHTML("afterbegin", markUp);
  }
  _clear() {
    this.#parentEl.innerHTML = "";
  }
  _generateMarkUp() {
    return this.#data.map(this._generateMarkupCerousel).join("");
  }
  _generateMarkupCerousel(movie, i) {
    if (i < 10)
      return `
            <div 
              class="carousel-item flex-shrink-0 w-64 h-96  overflow-y-hidden drop-shadow-lg relative hover:scale-105 transition-all duration-300 cursor-pointer">
                <div 
                  class="w-full h-full rounded-xl bg-cover bg-no-repeat bg-center"
                  style="background-image: url('https://image.tmdb.org/t/p/w500/${
                    movie.poster_path
                  }')">
                  <div class="overlay h-full w-full bg-black/50"></div>
                </div>
                 <p class=" text-black text-8xl absolute bottom-0 text-shadow-outline font-bold -translate-x-1/2 ml-3">${
                   i + 1
                 }</p>
            </div>
    `;
  }
}
export default new CerouselView();
