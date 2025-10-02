import View from "./View.js";
class CerouselView extends View {
  _parentEL = document.querySelector("#carousel");
  _carousel = document.querySelector("#carousel-box");

  _generateMarkUp() {
    return this._data
      .map((movie, i) => {
        if (i < 10)
          return `
            <div data-num= '${i}'
              class="carousel-item flex-shrink-0 w-64 h-96 relative hover:scale-105 transition-all duration-300 cursor-pointer">
                <div 
                  class="w-full h-full rounded-xl bg-contain bg-no-repeat bg-center border border-gray-900"
                  style="background-image: url('https://image.tmdb.org/t/p/w500/${
                    movie.poster_path
                  }')">
                  <div class="overlay h-full w-full rounded-xl bg-black/20"></div>
                </div>
                 <p class=" text-black text-8xl absolute bottom-0 text-shadow-outline font-bold -translate-x-1/2 ml-5">${
                   i + 1
                 }</p>
            </div>
    `;
      })
      .join("");
  }

  controllmovenent(direction) {
    const movieCard = this._parentEL.querySelector(".carousel-item");
    if (direction === "next") {
      //"➡ Next button clicked!"
      carousel.scrollBy({
        left: movieCard.offsetWidth + 32,
        behavior: "smooth",
      });
    }

    if (direction === "prev") {
      // "⬅ Prev button clicked!"
      carousel.scrollBy({
        left: -movieCard.offsetWidth - 32,
        behavior: "smooth",
      });
    }
  }
  moveSlider(handler) {
    this._carousel.addEventListener("click", (e) => {
      const btn = e.target.closest(".carousel-btn");
      if (!btn) return;
      // Check button type
      if (btn.id === "next") handler("next");
      if (btn.id === "prev") handler("prev");
    });
  }
  showDetailCard(handler) {
    this._carousel.addEventListener("click", (e) => {
      const target = e.target.closest(".carousel-item");

      if (!target) return;

      handler(target.dataset.num);
    });
  }
}
export default new CerouselView();
