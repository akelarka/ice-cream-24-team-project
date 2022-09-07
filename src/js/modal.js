(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-window-open]"),
    closeModalBtn: document.querySelector("[data-modal-window-close]"),
    modalwindow: document.querySelector("[data-modal-window]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modalwindow.classList.toggle("is-hidden");
  }
})();

