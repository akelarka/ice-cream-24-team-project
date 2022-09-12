(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal-locations]'),
    closeModalBtn: document.querySelector('[data-close-modal-locations]'),
    modalwindow: document.querySelector('[data-modal-our-locations]'),
  };

  const openModalBtn = document.querySelectorAll('[data-modal-window-open]');
  openModalBtn.forEach(element =>
    element.addEventListener('click', toggleModal)
  );

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalwindow.classList.toggle('is-hidden');
  }
})();
