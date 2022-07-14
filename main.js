const btnOpen = document.querySelector(".btn-open-modal"),
      btnClose = document.querySelector(".btn-close-modal");

const modal = document.querySelector(".modal-window");

btnOpen.addEventListener("click", () => {
    modal.classList.add("active");
});

btnClose.addEventListener("click", () => {
    modal.classList.remove("active");
});