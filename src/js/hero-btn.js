(() => {
  const refs = {
    openProdBtn: document.querySelector('[data-hero-open2]'),
    closeProdBtn: document.querySelector('[data-hero-close2]'),
    hero: document.querySelector('[data-hero]'),
    };

    refs.openProdBtn.addEventListener('click', toggleProd);
    refs.closeProdBtn.addEventListener('click', toggleProd);
    refs.openProdBtn2.addEventListener('click', toggleProd2);
    refs.closeProdBtn2.addEventListener('click', toggleProd2);
    refs.openProdBtn3.addEventListener('click', toggleProd3);
    refs.closeProdBtn3.addEventListener('click', toggleProd3);

     function toggleHero() {
     refs.hero.classList.toggle('is-hidden__hero');
     }
              
})();