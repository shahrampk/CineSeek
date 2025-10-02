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
  showHide( add, remove) {
    this._parentEL.classList.add(add);
    this._parentEL.classList.remove(remove);
  }
}
