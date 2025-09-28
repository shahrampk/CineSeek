// FAQs-view.js
console.log("FAQs-view.js loaded");

/**
 * View class for managing FAQ accordion functionality
 */
class ViewFAQs {
  #parentEl = document.querySelector(".FSQ-box");

  /**
   * Initializes the FAQ accordion event listener
   * @param {Function} handler - Callback function to execute when an accordion is toggled
   */
  switchAccordion(handler) {
    if (!this.#parentEl) return;

    this.#parentEl.addEventListener("click", (e) => {
      const target = e.target.closest(".FSQs");
      if (!target) return;

      const ansEl = target.parentNode.querySelector(".FAQs-ans");
      if (!ansEl) return;

      const isAlreadyOpen = !ansEl.classList.contains("hidden");

      // Close all before opening a new one
      this.hideOtherOpenedEl();

      // Toggle current one (only open if it was not already open)
      if (!isAlreadyOpen) {
        ansEl.classList.remove("hidden");
      }
      handler();
    });
  }

  /**
   * Hides all open FAQ answers
   */
  hideOtherOpenedEl() {
    if (!this.#parentEl) return;

    const ansArr = this.#parentEl.querySelectorAll(".FAQs-ans");
    ansArr.forEach((ans) => ans.classList.add("hidden"));
  }
}

export default new ViewFAQs();
