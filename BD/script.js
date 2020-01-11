var imgBox = document.getElementById('img-box'),
  main = document.querySelector('.main');
imgBox.style
imgBoxHeight = imgBox.offsetHeight
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 50) {
    if (window.pageYOffset < 250) {
      imgBox.style.transform = 'translateY(' + window.pageYOffset + 'px) scale(' + 50 / window.pageYOffset + ')';
    }
    //imgBox.style.transform = 'scale(' + 50 / window.pageYOffset + ')';
  }
  if (window.pageYOffset == 0) {
    imgBox.style.transform = '';
  }
});