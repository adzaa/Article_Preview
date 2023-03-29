const shareContainer = document.querySelector(".share-options");

const shareBtn = document.querySelector(".share");

shareBtn.addEventListener("click", function () {
  if (shareContainer.style.display === "block") {
    shareContainer.style.display = "none";
  } else {
    shareContainer.style.display = "block";
  }
});
