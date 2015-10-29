//smooth scrolling to links
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Get the lang query string value from the URL.
function getQueryString(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]).toLowerCase() == variable.toLowerCase()) {
            return decodeURIComponent(pair[1]);
        }
    }

    return null;
}

//Get the html element and set to it the lang attribute.
var html = document.getElementsByTagName('html')[0];
var lang = getQueryString('lang') || navigator.language || navigator.userLanguage;
if (lang) {
  lang = lang.substring(0, 2);
  if (lang !== 'de') {
    lang = 'en'
  }
  html.setAttribute('lang', lang);
}