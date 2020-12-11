const footer = document.querySelector("#footer");

let button = document.querySelector(".card__content--share");

button.addEventListener('click', e => {
  e.target
  
  const width = screen.width;
  let shareElement;
  if (width > 768) {
    shareElement = `<p>Computador</p>`;
  } else {
    footer.innerHTML = '';
    shareElement = `
      <div class="share__social-media">
      <p>Share</p>
        <button><img src="images/icon-facebook.svg" alt=""></button>
        <button><img src="images/icon-twitter.svg" alt=""></button>
        <button><img src="images/icon-pinterest.svg" alt=""></button>
      </div>
      <button class="card__content--share-button" id="share-button">
        <img src="images/icon-share-white.svg" alt="icon share" />
      </button>
    `
    const footerShare = document.querySelector('#share');
    footerShare.classList.add('footer__share')
    footerShare.innerHTML = shareElement;
  }
});
