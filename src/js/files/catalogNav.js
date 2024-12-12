export default function catalogNav() {
  const filterBtn = document.querySelector("#filter-open");
  const catalogBtn = document.querySelector("#catalog-open");

  const catalog = document.querySelector("#catalog-products");
  const filters = document.querySelector("#filters-products");

  if (filters) {
    filterBtn.addEventListener("click", () => {
      filters.classList.add("open");
      catalog.classList.remove("open");

      catalogBtn.classList.remove("active");
      filterBtn.classList.add("active");
    });

    catalogBtn.addEventListener("click", () => {
      filters.classList.remove("open");
      catalog.classList.add("open");

      catalogBtn.classList.add("active");
      filterBtn.classList.remove("active");
    });
  }
}
