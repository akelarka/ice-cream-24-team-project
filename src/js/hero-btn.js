(() => {
  const refs = {
    openProdBtn: document.querySelector('[data-hero-open2]'),
    closeProdBtn: document.querySelector('[data-hero-close2]'),
    hero: document.querySelector('[data-hero]'),
    };

    refs.openProdBtn.addEventListener('click', toggleHero);
    refs.closeProdBtn.addEventListener('click', toggleHero);

     function toggleHero() {
     refs.hero.classList.toggle('is-hidden__hero');
     }
              
})();