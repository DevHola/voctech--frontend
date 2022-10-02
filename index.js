const bar = document.getElementById("bar");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const sidebar = document.getElementById("sidebar");
const close = document.getElementById("close");
const clos = document.getElementById("close1");
const close2 = document.getElementById("close2");
const nav = document.getElementById("navigation");
const headina = document.getElementById("headina");
const visio = document.getElementById("visio");
const visioclose = document.getElementById("visioclose");
const visio1 = document.getElementById("visio1");
const popup = document.getElementById("popup");
const tap = document.getElementById("tap");
const popup1 = document.getElementById("popup1");
const main = document.getElementById("main");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (bar1) {
  bar1.addEventListener("click", () => {
    headina.classList.add("active");
  });
}
if (bar2) {
  bar2.addEventListener("click", () => {
    sidebar.classList.add("active");
  });
}

if (tap) {
  tap.addEventListener("click", () => {
    popup.style.visibility = "visible";
    visio.style.filter = "blur(1px)";
    main.style.filter = "blur(1px)";
    visio1.style.filter = "blur(1px)";
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

if (clos) {
  clos.addEventListener("click", () => {
    headina.classList.remove("active");
  });
}
if (close2) {
  close2.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}
if (popup.style.visibility === "visible") {
  const egbe = document.getElementById("egbe");
  const other = document.getElementById("other");
  egbe.style.filter = "blur(1px)";
  other.style.filter = "blur(1px)";
}
function change() {
  var popup = document.getElementById("popup");
  popup.style.visibility = "hidden";
  const visio = document.getElementById("visio");
  visio.style.filter = "none";
  const visio1 = document.getElementById("visio1");
  visio1.style.filter = "none";
}

////////////////////////
