export default function rentSale() {
  const btn = document.querySelector("#rent-sale-btn");
  const rent = document.querySelector("#rent");
  const sale = document.querySelector("#sale");

  if (btn) {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      if (rent.classList.contains("active")) {
        rent.classList.remove("active");
        sale.classList.add("active");
      } else {
        rent.classList.add("active");
        sale.classList.remove("active");
      }
    })
  }
}