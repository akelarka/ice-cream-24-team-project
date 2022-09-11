(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-read-open]"),
    closeModalBtn: document.querySelector("[data-modal-read-close]"),
    modalwindow: document.querySelector("[data-modal-read-more]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modalwindow.classList.toggle("is-hidden");
  }

var customStopVideo = () => {
  var iframe = document.querySelectorAll('iframe');
  Array.prototype.forEach.call(iframe, iframe => {
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: 'stopVideo'
    }), '*');
  });
}



document.getElementById("closeMod").onclick = function () {
  customStopVideo();
};
})();

