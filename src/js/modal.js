(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-buy_now]"),
    closeModalBtn: document.querySelector("[data-moda-close-buy_now]"),
    modalwindow: document.querySelector("[data-modal-buy_now"),
  };

  const openModalBtn = document.querySelectorAll("[data-modal-open-buy_now]");
  openModalBtn.forEach(element => element.addEventListener('click', toggleModal));

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modalwindow.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-franchise]"),
    closeModalBtn: document.querySelector("[data-moda-close-franchise]"),
    modalwindow: document.querySelector("[data-modal-franchise"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modalwindow.classList.toggle("is-hidden");
  }
})();







 document.querySelector('.form-field').addEventListener('focusin', e => {
      e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
    })
  document.querySelector('.form-field').addEventListener('focusout', e => {
      e.currentTarget.placeholder = '';
    })


