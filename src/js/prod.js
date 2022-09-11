(() => {
  const refs = {
    openProdBtn: document.querySelector('[data-prod-open1]'),
    closeProdBtn: document.querySelector('[data-prod-close1]'),
    prod: document.querySelector('[data-prod1]'),
    openProdBtn2: document.querySelector('[data-prod-open2]'),
    closeProdBtn2: document.querySelector('[data-prod-close2]'),
    prod2: document.querySelector('[data-prod2]'),
    openProdBtn3: document.querySelector('[data-prod-open3]'),
    closeProdBtn3: document.querySelector('[data-prod-close3]'),
    prod3: document.querySelector('[data-prod3]'),
    openProdBtn4: document.querySelector('[data-prod-open4]'),
    closeProdBtn4: document.querySelector('[data-prod-close4]'),
    prod4: document.querySelector('[data-prod4]'),
    };

    refs.openProdBtn.addEventListener('click', toggleProd);
    refs.closeProdBtn.addEventListener('click', toggleProd);
    refs.openProdBtn2.addEventListener('click', toggleProd2);
    refs.closeProdBtn2.addEventListener('click', toggleProd2);
    refs.openProdBtn3.addEventListener('click', toggleProd3);
    refs.closeProdBtn3.addEventListener('click', toggleProd3);
    refs.openProdBtn4.addEventListener('click', toggleProd4);
    refs.closeProdBtn4.addEventListener('click', toggleProd4);

     function toggleProd() {
     refs.prod.classList.toggle('is-hidden__product');
    }
     function toggleProd2() {
     refs.prod2.classList.toggle('is-hidden__product');
     }
     function toggleProd3() {
     refs.prod3.classList.toggle('is-hidden__product');
    }
    function toggleProd4() {
     refs.prod4.classList.toggle('is-hidden__product');
    }
              
})();