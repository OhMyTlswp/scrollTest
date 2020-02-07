var bannerWr2 = document.querySelector('.banner-wr2'),
  bannerWr = document.querySelector('.banner-wr'),
  cardProduct = document.querySelector('.card-product'),
  bestseller = document.querySelector('.bestseller-wr');
//card = '<div class="bestseller-wr"><div class="card-product"><div class="card-product-img-wr"><img src="img/iphone11-black.png" class="card-product-img"></div><div class="card-product-info"> <div class="stars"><img src="img/star.svg"><img src="img/star.svg"><img src="img/star.svg"> <img src="img/star.svg"> <img class="star-black" src="img/star-black.svg"></div> <div class="card-product-description">Смартфон Apple iPhone 11 64GB Purple</div><div class="price"><div class="card-product-price"> 56 990₽ </div><div class="card-product-credit-price"> от 5690₽/мес</div></div></div></div></div>'
window.addEventListener('scroll', function() {
  if (window.pageYOffset > bannerWr.offsetTop && 60 / window.pageYOffset > 1 / 1.5) {
    //window.pageXOffset = 0;
    bannerWr.style.height = '' + 60 / window.pageYOffset + 'vh';
    //sliderBox.style.transform = 'translateY(' + (window.pageYOffset / 5) + 'vh)';
  }
  if (window.pageYOffset < bannerWr.offsetTop) {
    //window.pageXOffset = 0;
    bannerWr.style.height = '' + 60 + 'vh';
    //sliderBox.style.transform = 'translateY(' + (window.pageYOffset / 5) + 'vh)';
  }
})
window.onload = function() {
  for (let index = 0; index < 5; index++) {
    //bestseller.innerHTML = card;
  }
}