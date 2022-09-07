(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  const links = document.querySelectorAll('.mobile-menu__menu-link');
  links.forEach(element => element.addEventListener('click', toggleModal));

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();


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