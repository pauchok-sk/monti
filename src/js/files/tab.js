export default function tab() {
  const buttonsTab = document.querySelectorAll(".btn-tab");
  const tabs = document.querySelectorAll(".tab");

  if (buttonsTab.length) {
    buttonsTab.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        const parent = btn.closest(".tab-container");
        const tabId = btn.dataset.tab;
        const currentTab = parent.querySelector(`.tab[data-tab="${tabId}"]`);

        buttonsTab.forEach((b) => b.classList.remove("active"));
        tabs.forEach((t) => t.classList.remove("active"));

        currentTab.classList.add("active");
        btn.classList.add("active");
      });
    });
  }
}