const videoPopup = document.querySelector(".video-popup");
const thumbnail = document.querySelector(".video-thumbnail");
const closeBtn = document.querySelector(".close-btn");

thumbnail.addEventListener("click", function () {
  videoPopup.classList.toggle("popup-visible");
});
closeBtn.addEventListener("click", function () {
  videoPopup.classList.toggle("popup-visible");
});
