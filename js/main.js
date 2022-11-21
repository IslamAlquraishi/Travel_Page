//  Scroll Header
let header = document.getElementById("header");

onscroll = function () {
  // Scroll Background

  if (scrollY <= 125) {
    // 0%
    header.style.background = "#005d4e00";
  } else if (scrollY <= 300) {
    // 25%
    header.style.background = "#005d4e61";
  } else if (scrollY <= 665) {
    // 75%
    header.style.background = "#005d4ebf";
  } else {
    // 100%
    header.style.background = "var(--main-color)";
  }

  // Start Scroll Up

  this.scrollY >= 1480 ? up.classList.add("show") : up.classList.remove("show");
};

//  Alert
let BtnAlert = document.getElementById("btn-alert");
let ContentAlert = document.getElementById("content-alert");

//  Onload Up
onload = function () {
  ContentAlert.classList.add("hide-alert");
  setTimeout(function () {
    ContentAlert.classList.remove("hide-alert");
  }, 300);
};

//  Click Alert
BtnAlert.addEventListener("click", function () {
  ContentAlert.classList.add("hide-alert");
});

//  Loop Alert
setInterval(function () {
  ContentAlert.classList.remove("hide-alert");
}, 45000);

//  bars
let bars = document.getElementById("bars");
let nav = document.getElementById("nav");
let Close = document.getElementById("close");

//  bars Click
bars.addEventListener("click", function () {
  nav.classList.toggle("show");
});

//  bars Close
function CloseBars() {
  nav.classList.add("show");
}

// Close List Links By click AnyWay
document.addEventListener("click", (e) => {
  // e.stopPropagation;
  if (e.target != bars && e.target != Close) {
    nav.classList.add("show");
  }
});

//  Start Click Up
up.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
