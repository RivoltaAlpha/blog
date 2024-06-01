document.addEventListener("DOMContentLoaded", () => {
  // JavaScript to open and close the modal
  var modal = document.getElementById("thankyou-card");
  var btn = document.getElementById("subscribe");
  var closeButton = document.getElementsByClassName("close")[0];
  var mainContent = document.getElementById("mainContent");
  var bodyContainer = document.getElementById("container");
  const forms = document.forms;
  const subscribeForm = forms["subscriptionForm"];

  btn.onclick = function () {
    modal.style.display = "block";
    mainContent.classList.add("blur-background");
    bodyContainer.classList.add("blur-background");
    //clear inputs
    subscribeForm.querySelector('input[type="email"]').value = "";
  };

  closeButton.onclick = function () {
    modal.style.display = "none";
    mainContent.classList.remove("blur-background");
    bodyContainer.classList.remove("blur-background");
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      mainContent.classList.remove("blur-background");
    }
  };
});
