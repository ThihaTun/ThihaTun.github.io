$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});

var lang = {
  "html": "97%",
  "css": "89%",
  "js": "70%",
};

var i = 4;

$.each(lang, function(language, percent) {

  var delay = 500;

  setTimeout(function() {
    $('#' + language + '-percent').html(percent);
  }, delay * i);

  i++;
});
