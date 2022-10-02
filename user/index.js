const slider = document.querySelector(".slider");

const counter = document.querySelector(".counter");
function slidingprogress() {
  counter.style.left = slider.value / 2 + "%";
  counter.innerHTML = "Day " + "" + slider.value + " of " + slider.max;
}
slidingprogress();
