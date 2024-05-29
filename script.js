// JavaScript to open and close the modal
var modal = document.getElementById("thankyou-card");
var btn = document.getElementById("subscribe");
var closeButton = document.getElementsByClassName("close")[0];
var mainContent = document.getElementById("mainContent");
// var emailContent = getElementById("email");

btn.onclick = function () {
  modal.style.display = "block";
  mainContent.classList.add("blur-background");
};

closeButton.onclick = function () {
  modal.style.display = "none";
  mainContent.classList.remove("blur-background");
  // document.getElementById("email").value = "";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    mainContent.classList.remove("blur-background");
  }
};
