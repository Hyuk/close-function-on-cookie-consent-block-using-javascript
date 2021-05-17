cookieBanner = document.getElementsByClassName('cookie-banner')[0];
closeButton = document.getElementsByClassName('close')[0];

if (localStorage.getItem('cookieSeen') != 'shown') {
  
  cookieBanner.style.display = 'block';
};

closeButton.addEventListener('click', function(e) {
  cookieBanner.style.display = 'none';
  localStorage.setItem('cookieSeen','shown');
});

/* jQuery
if (localStorage.getItem(‘cookieSeen’) != ‘shown’) {
  $(‘.cookie-banner’).delay(2000).fadeIn();
  localStorage.setItem(‘cookieSeen’,’shown’)
};
$(‘.close’).click(function() {
  $(‘.cookie-banner’).fadeOut();
});
*/