var imgBox = document.getElementById('img-box'),
  main = document.querySelector('.main'),
  body = document.querySelector('body'),
  sliderElement = document.querySelectorAll('.slider');
sliderElement[1].style.transform = 'translateX(' + -1600 + 'px)';
imgBox.style
window.pageXOffset = 0;
imgBoxHeight = imgBox.offsetHeight
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 50) {
    if (window.pageYOffset < 250) {
      window.pageXOffset = 0;
      imgBox.style.transform = 'translateY(' + window.pageYOffset + 'px) scale(' + 50 / window.pageYOffset + ')';
    }
    //imgBox.style.transform = 'scale(' + 50 / window.pageYOffset + ')';
  }
  if (window.pageYOffset == 0) {
    imgBox.style.transform = '';
    body.style.overflowX = 'hidden';
  }
  sliderElement[0].style.transform = 'translateX(' + -window.pageYOffset / 5 + 'px)';
  sliderElement[1].style.transform = 'translateX(' + (-1600 + window.pageYOffset / 5) + 'px)';
  sliderElement[2].style.transform = 'translateX(' + -window.pageYOffset / 5 + 'px)';
});