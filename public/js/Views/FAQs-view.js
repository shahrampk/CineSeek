// FAQs-view.js
console.log("FAQs-view.js loaded");

/**
 * View class for managing FAQ accordion functionality
 */
class ViewFAQs {
  #parentEl = document.querySelector(".FSQ-box");

  switchAccordion() {
    if (!this.#parentEl) return;

    this.#parentEl.addEventListener("click", (e) => {
      const target = e.target.closest(".FSQs");
      if (!target) return;

      const ansEl = target.parentNode.querySelector(".FAQs-ans");
      const icon = target.querySelector("div");
      if (!ansEl) return;

      const isAlreadyOpen = !ansEl.classList.contains("hidden");

      // Close all before opening a new one
      this._hideOtherOpenedEl(icon);

      // Toggle current one (only open if it was not already open)
      if (!isAlreadyOpen) {
        ansEl.classList.remove("hidden");
        icon.classList.add("rotate-40");
      }
    });
  }

  // Hides all open FAQ answers
  _hideOtherOpenedEl(icon) {
    if (!this.#parentEl) return;
    const ansArr = this.#parentEl.querySelectorAll(".FAQs-ans");
    ansArr.forEach((ans) => ans.classList.add("hidden"));
    icon.classList.remove("rotate-40");
  }
  rotateIcon() {}
}

export default new ViewFAQs();
