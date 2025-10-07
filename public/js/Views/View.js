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

  renderErrorMsg(msg, pagination) {
    const alertBox = document.querySelector(".alert-box");
    alertBox.innerHTML = `
     <div
        class="bg-navbar hover:bg-search-bar/90 transition-colors duration-200 backdrop-blur-md cursor-context-menu border-b-4 opacity-0 animate-showMsg border-red-600 w-fit p-6 shadow-alert rounded-md text-xl">

            <p class="alert-msg opacity-95">${msg}</p>
        </div>
    `;
  }
  renderErrorBox(
    msg = "SomeThing went wrong, Please Try Again after some time!"
  ) {
    this._parentEL.innerHTML = `
                <div class="error flex justify-center col-span-full gap-2 my-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                
                    <p>${msg}</p>
                    </div>`;
    pagination._clear();
  }
}
