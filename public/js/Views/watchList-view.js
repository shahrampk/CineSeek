import View from "./View.js";
class WatchListView extends View {
  _parentEL = document.querySelector("#watchlist");
  _generateMarkUp() {
    console.log(this._data);
    if (this._data.length <= 0) {
      return `
        <li class="group flex items-center justify-center gap-2 px-5 py-10 
               rounded-md border border-transparent 
               text-gray-300 md:text-lg font-medium hover:bg-search-bar hover:text-white
               transition-all duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-12 h-12 mr-1">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
               <p>No Movie yet. Find a nice movie and add it into Watchlist :)</p>
        </li>
      `;
    }
    return this._data
      .map(
        (movieDate, i) =>
          `
        <li class="group">
            <div 
              class="flex items-center justify-between p-4 rounded-xl 
                    backdrop-blur hover:border-red-500 hover:-translate-y-1 hover:bg-search-bar hover:shadow-lg
                     transition-all duration-300 ease-in-out cursor-pointer" 
              title="Watch Trailer">
          
              <!-- Left Side -->
              <div class="flex items-center gap-4">
                <!-- Movie Image -->
                <img 
                  src="${
                    movieDate.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${movieDate.backdrop_path}`
                      : "fallback.jpg"
                  }" 
                  alt="${movieDate.title}" 
                  class="w-14 h-14 rounded-lg object-cover bg-center shadow-md text-xs"
                  loading="lazy"
                >
          
                <!-- Movie Title -->
                <span title="${
                  movieDate.title
                }" class="text-sm md:text-base font-medium text-gray-300 group-hover:text-white line-clamp-2">
                  ${movieDate.title}
                </span>
              </div>
          
              <!-- Remove Button -->
              <button 
                id="remove-btn" data-num="${i}"
                class="p-2 rounded-full opacity-0 group-hover:opacity-100 
                       hover:bg-red-500/20 transition-all duration-300"
                title="Remove from Watchlist">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     class="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
</li>
`
      )
      .join("");
  }
  loadWatchListMovie(data) {
    console.log(data);

    window.addEventListener("load", () => {
      this.render(data);
    });
  }
  addHandlerRemoveCard(handler) {
    this._parentEL.addEventListener("click", (e) => {
      const removeBtn = e.target.closest("#remove-btn");
      if (!removeBtn) return;
      handler(+removeBtn.dataset.num);
    });
  }
  removeWatchlistMovieCard() {}
}
export default new WatchListView();
