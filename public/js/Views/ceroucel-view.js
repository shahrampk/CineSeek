import { API_KEY } from "../config.js";
import { BASE_URL } from "../config.js";
class CerouselView {
  #carousel = document.querySelector("#carousel");
  #parentEL = document.querySelector("#carousel-box");
  #nextBtn = document.getElementById("next");
  #next = document.getElementById("next");
  #data;
  render(data) {
    this.#data = data;
    const markUp = this._generateMarkUp();
    this._clear();
    this.#carousel.insertAdjacentHTML("afterbegin", markUp);
  }
  _clear() {
    this.#carousel.innerHTML = "";
  }
  _generateMarkUp() {
    return this.#data.map(this._generateMarkupCerousel).join("");
  }
  _generateMarkupCerousel(movie, i) {
    if (i < 10)
      return `
            <div 
              class="carousel-item flex-shrink-0 w-64 h-96 relative hover:scale-105 transition-all duration-300 cursor-pointer">
                <div 
                  class="w-full h-full rounded-xl bg-cover bg-no-repeat bg-center"
                  style="background-image: url('https://image.tmdb.org/t/p/w500/${
                    movie.poster_path
                  }')">
                  <div class="overlay h-full w-full rounded-xl bg-black/40"></div>
                </div>
                 <p class=" text-black text-8xl absolute bottom-0 text-shadow-outline font-bold -translate-x-1/2 ml-5">${
                   i + 1
                 }</p>
            </div>
    `;
  }

  controllmovenent(direction) {
    const movieCard = this.#carousel.querySelector(".carousel-item");
    if (direction === "next") {
      // console.log("➡ Next button clicked!");
      carousel.scrollBy({
        left: movieCard.offsetWidth + 32,
        behavior: "smooth",
      });
    }

    if (direction === "prev") {
      // console.log("⬅ Prev button clicked!");
      carousel.scrollBy({
        left: -movieCard.offsetWidth + 32,
        behavior: "smooth",
      });
    }
  }
  moveSlider(handler) {
    console.log(this.#parentEL);

    this.#parentEL.addEventListener("click", (e) => {
      console.log(this.#parentEL);

      const btn = e.target.closest(".carousel-btn");
      if (!btn) return;
      console.log(btn);

      // Check button type
      if (btn.id === "next") handler("next");
      if (btn.id === "prev") handler("prev");
    });
  }
}
export default new CerouselView();
