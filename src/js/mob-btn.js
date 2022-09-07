(() => {
  const refs = {
    openModalBtn5: document.querySelector("[data-modal-window-open2]"),
    closeModalBtn5: document.querySelector("[data-modal-window-close2]"),
    modalwindow5: document.querySelector("[data-modal-window2]"),
  };

  refs.openModalBtn5.addEventListener("click", toggleModal);
  refs.closeModalBtn5.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modalwindow5.classList.toggle("is-hidden");
  }
})();