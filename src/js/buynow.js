(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-rec-open]"),
    closeModalBtn: document.querySelector("[data-rec-close]"),
    modal: document.querySelector("[data-rec]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();