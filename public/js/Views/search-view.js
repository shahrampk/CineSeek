import View from "./View.js";
class SearchView {
  _parentEL = document.querySelector("#search");
  getQuery() {
    const query = this._parentEL.querySelector("#search__field").value;
    this.clearInput(query);
    return query;
  }
  clearInput() {
    this._parentEL.querySelector("#search__field").value = "";
  }
  addHandlerSearch(handler) {
    this._parentEL.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }
  
}
export default new SearchView();
