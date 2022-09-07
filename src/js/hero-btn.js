(() => {
  const refs = {
    openHeroBtn: document.querySelector('[data-hero-open2]'),
    closeHeroBtn: document.querySelector('[data-hero-close2]'),
    hero: document.querySelector('[data-hero]'),
    };

    refs.openHeroBtn.addEventListener('click', toggleHero);
    refs.closeHeroBtn.addEventListener('click', toggleHero);

     function toggleHero() {
     refs.hero.classList.toggle('is-hidden__hero');
     }
              
})();