(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-window-open]"),
    closeModalBtn: document.querySelector("[data-modal-window-close]"),
    modalwindow: document.querySelector("[data-modal-window]"),
  };
const openModalBtn = document.querySelectorAll("[data-modal-window-open]");
  openModalBtn.forEach(element => element.addEventListener('click', toggleModal));

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modalwindow.classList.toggle("is-hidden");
  }
})();

