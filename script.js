// function subscribe() {
//   const emailInput = document.getElementById("email");
//   const email = emailInput.value;

//   if (email) {
//     document.getElementById("subscriber-email").innerText = email;
//     document.getElementById("overlay").style.display = "flex";
//   } else {
//     alert("Please enter a valid email address.");
//   }
// }

// function dismissMessage() {
//   document.getElementById("overlay").style.display = "block";
//   document.getElementById("thankyou-card").style.display = "block";
//   document.getElementById("email").value = "";
// }
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
