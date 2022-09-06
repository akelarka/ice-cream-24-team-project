(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-read-open]"),
    closeModalBtn: document.querySelector("[data-modal-read-close]"),
    modalwindow: document.querySelector("[data-modal-read-more]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modalwindow.classList.toggle("is-hidden");
  }


})();

