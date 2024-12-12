export default function showMore() {
  const showBlocks = document.querySelectorAll("[data-show]");

  if (showBlocks.length) {
    showBlocks.forEach((block) => {
      const numberShow = block.dataset.show;
      const items = block.querySelectorAll(".item-show");
      const hiddenItems = Array.from(items).slice(numberShow, items.length);
      const btnShow = block.querySelector(".btn-show");
      const btnShowContent = block.querySelector(".btn-show span");
      const inputShow = block.querySelector(".input-show");

      // вставляем значение в кнопку "показать"
      btnShowContent.textContent = `Показать все (${hiddenItems.length})`;

      // скрываем элементы
      hiddenItems.forEach((i) => i.classList.add("hidden"));

      // показываем все элементы
      btnShow.addEventListener("click", () => {
        items.forEach((i) => i.classList.remove("hidden"));
        btnShow.remove();
      });

      inputShow.addEventListener("input", (e) => {
        items.forEach((i) => {
          if (!i.classList.contains("hidden")) {
            if (i.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
              i.style.display = "block";
            } else {
              i.style.display = "none";
            }
          }
        });
      });
    });
  }
}
