window.addEventListener("load", () => {
  const keysCollection = [...document.querySelectorAll(".key")];
  const audioColelction = [...document.querySelectorAll(".audio")];

  document.onkeypress = e => {
    const keyCode = e.keyCode || e.which;
    const key = keysCollection.find(element => element.dataset.key == keyCode);
    const audio = audioColelction.find(element => element.dataset.key == keyCode);
    
    if (key) {
      key.classList.add('playing');
      audio.play();
    }
  }

  document.onkeyup = e => {
    for (const element of keysCollection) {
      element.classList.remove('playing');
    }
  }
});