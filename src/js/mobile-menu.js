
(() => {
  const refs = {
  menuBtnRef: document.querySelector("[data-menu-open]"),
  mobileMenuRef: document.querySelector("[data-menu]"),
  };

  const links = document.querySelectorAll('.mobile-menu__menu-link');
  links.forEach(element => element.addEventListener('click', toggleModal));

  refs.menuBtnRef.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menuBtnRef.classList.toggle('is-open');
    refs.mobileMenuRef.classList.toggle('is-open');
  }
})();
