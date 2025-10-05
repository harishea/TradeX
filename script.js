let overlayblack = document.querySelector(".overlay-black");
let overlaybox1 = document.querySelector(".overlay-box1");
let cancel = document.getElementById("btn-1");

cancel.addEventListener("click", function (event) {
  event.preventDefault();
  overlayblack.style.display = "none";
  overlaybox1.style.display = "none";
});
function logined() {
  overlayblack.style.display = "none";
  overlaybox1.style.display = "none";
}
function login() {
  overlayblack.style.display = "block";
  overlaybox1.style.display = "block";
}
let overlaybox2 = document.querySelector(".overlay-box2");
cancel.addEventListener("click", function (event) {
  event.preventDefault();
});
function cancel2() {
  overlayblack.style.display = "none";
  overlaybox2.style.display = "none";
}
function signuped() {
  overlayblack.style.display = "none";
  overlaybox2.style.display = "none";
}
function signup() {
  overlayblack.style.display = "block";
  overlaybox2.style.display = "block";
}
