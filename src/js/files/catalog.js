export default function catalog() {
  const catalogBtn = document.querySelector("#catalog-btn");
  const catalog = document.querySelector("#catalog");

  if (catalog) {
    catalogBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!catalog.classList.contains("open")) handleOpen();
      else handleClose();
    });

    function handleClose(e) {
      if (e?.target.closest("#catalog")) return;
      catalog.classList.remove("open");
      catalogBtn.classList.remove("active");
      catalogBtn.classList.remove("active");

      document.body.classList.remove("body-hidden");
      document.body.removeEventListener("click", handleClose);
    }

    function handleOpen() {
      catalog.classList.add("open");
      catalogBtn.classList.add("active");

      document.body.classList.add("body-hidden");
      document.body.addEventListener("click", handleClose);
    }
  }
}
