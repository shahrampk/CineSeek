import View from "./View.js";

class PaginationView extends View {
  _parentEL = document.querySelector(".pagination");

  addHandlerBtn(handler) {
    this._parentEL.addEventListener("click", function (e) {
      const btn = e.target.closest(".pagination-btn");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
  _generateMarkUp() {
    const curPage = this._data.page;
    const numPages = this._data.totalPages;
    //   if we are on page 1 and other pages...
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto='${curPage + 1}'
          class="pagination-btn right-btn flex bg-search-bar px-3 py-2 md:px-5 md:py-4 rounded-md md:rounded-lg col-span-3 md:col-span-2 -col-start-4 md:-col-start-3 justify-end items-center gap-3 sm:text-lg cursor-pointer hover:bg-search-bar/80 transition-colors duration-300">
            Next 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>

      `;
    }
    //   if we are on last page...
    if (curPage === numPages && numPages > 1) {
      return `

         <button data-goto='${curPage - 1}'
          class="pagination-btn left-btn flex bg-search-bar px-3 py-2 md:px-5 md:py-4 rounded-md md:rounded-lg col-span-3 md:col-span-2 items-center gap-3 sm:text-lg cursor-pointer hover:bg-search-bar/80 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
             <path stroke-linecap="round" stroke-linejoin="round"
               d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
           Previous
        </button>
      `;
    }
    //   if we are on other pages...
    if (curPage < numPages) {
      return `
         <button data-goto='${curPage - 1}'
             class="pagination-btn left-btn flex bg-search-bar px-3 py-2 md:px-5 md:py-4 rounded-md md:rounded-lg col-span-3 md:col-span-2 items-center gap-3 sm:text-lg cursor-pointer hover:bg-search-bar/80 transition-colors duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-6">
                 <path stroke-linecap="round" stroke-linejoin="round"
                     d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
             </svg>
              Previous
        </button>
        <button data-goto='${curPage + 1}'
            class="pagination-btn right-btn flex bg-search-bar px-3 py-2 md:px-5 md:py-4 rounded-md md:rounded-lg col-span-3 md:col-span-2 -col-start-4 md:-col-start-3 justify-end items-center gap-3 sm:text-lg cursor-pointer hover:bg-search-bar/80 transition-colors duration-300">
            Next 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </button>
        `;
    }
    //   if we are on page 1 and no other pages...
    return ``;
  }
  showExploreBtn() {
    this._parentEL.innerHTML = `
    <button id="explore-Btn"
    class="overflow-hidden w-32 p-2 h-12 bg-navbar text-gray-100/80 border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group col-span-full flex justify-self-center border justify-center">
    Back To
    <span
        class="absolute w-36 h-32 -top-8 -left-2 bg-red-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
    <span
        class="absolute w-36 h-32 -top-8 -left-2 bg-red-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
    <span
        class="absolute w-36 h-32 -top-8 -left-2 bg-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
    <span
        class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Movies</span>
</button>
    `;
  }
}

export default new PaginationView();
