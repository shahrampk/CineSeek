export default class View {
  _data;
  render(data) {
    if (data) this._data = data;
    const markUp = this._generateMarkUp();
    this._clear();
    this._parentEL.insertAdjacentHTML("afterbegin", markUp);
  }
  _clear() {
    this._parentEL.innerHTML = "";
  }
  showHide(add, remove) {
    this._parentEL.classList.add(add);
    this._parentEL.classList.remove(remove);
  }
  renderLoader() {
    this._parentEL.innerHTML = `
        <div class="flex justify-center gap-2 col-span-full min-h-screen pt-10">
          <div class="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
          <div
            class="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"
          ></div>
          <div
            class="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"
          ></div>
        </div>

    `;
  }
  renderErrorMsg(msg) {
    const alertBox = document.querySelector(".alert-box");
    console.log(alertBox);
    alertBox.innerHTML = `
     <div
        class="bg-navbar hover:bg-search-bar/90 transition-colors duration-200 backdrop-blur-md cursor-context-menu border-b-4 opacity-0 animate-showMsg border-red-600 w-fit p-6 shadow-alert rounded-md text-xl">

            <p class="alert-msg opacity-95">${msg}</p>
        </div>
    `;
  }
}
