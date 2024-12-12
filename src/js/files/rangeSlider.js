import noUiSlider from "nouislider";

export default function rangeSlider() {
  const priceRange = document.querySelector("#price-range");

  if (priceRange) {
    const { min, max } = priceRange.dataset;
    const inputMin = document.querySelector("#price-min");
    const inputMax = document.querySelector("#price-max");
    const indicatorMin = document.querySelector("#price-indicator-min");
    const indicatorMax = document.querySelector("#price-indicator-max");
    const inputs = [inputMin, inputMax];
    const indicators = [indicatorMin, indicatorMax];

    noUiSlider.create(priceRange, {
      start: [+min, +max],
      connect: true,
      range: {
        min: [+min],
        max: [+max],
      },
    });

    priceRange.noUiSlider.on("update", (values, handle) => {
      indicators[handle].textContent = Math.round(values[handle]) + " р."
      inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      priceRange.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  }
}
