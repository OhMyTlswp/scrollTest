var imgBox = document.getElementById('img-box'),
  main = document.querySelector('.main'),
  body = document.querySelector('body'),
  sliderElement = document.querySelectorAll('.slider'),
  rotaion = document.querySelector('.rotation');
sliderElement[1].style.transform = 'translateX(' + -1600 + 'px)';
imgBox.style
window.pageXOffset = 0;
imgBoxHeight = imgBox.offsetHeight
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 50) {
    if (window.pageYOffset < 250) {
      //window.pageXOffset = 0;
      imgBox.style.transform = 'translateY(' + window.pageYOffset + 'px) scale(' + 50 / window.pageYOffset + ')';
    }
    //imgBox.style.transform = 'scale(' + 50 / window.pageYOffset + ')';
  }
  if (window.pageYOffset == 0) {
    imgBox.style.transform = '';
    body.style.overflowX = 'hidden';
  }
  sliderElement[0].style.transform = 'translateX(' + -window.pageYOffset / 60 + 'vw)';
  sliderElement[1].style.transform = 'translateX(' + (-100 + window.pageYOffset / 60) + 'vw)';
  sliderElement[2].style.transform = 'translateX(' + -window.pageYOffset / 60 + 'vw)';
});
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100 && window.pageYOffset < 1500) {
    rotaion.style.transform = 'scale(' + window.pageYOffset / 2800 + ') rotateZ(-' + (window.pageYOffset / 800) + 'deg)';
  }
  if (window.pageYOffset > 1500) {
    rotaion.style.transform = 'scale(' + 0.7 + ') rotateZ(' + (0) + 'deg)';
  }
});