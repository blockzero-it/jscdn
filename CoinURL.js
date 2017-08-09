jQuery(document).ready(function($) {
  var exclude = Array("blockzero.it", "twitter.com", "facebook.com", "creativecommons.org", "iubenda.com");

  var id = "c8e2fbb5a3d46cbf59c8a42ef25eabf6";
  var redirect = "http://cur.lv/redirect.php?id=" + id + "&url=";

  var links = $("a[href^='http']");

  $.each(links, function() {
    var link = $(this).attr('href');
    var nocoin = $(this).data('nocoin');

    if (nocoin) {
      return true;
    }

    var deny = false;
    $.each(exclude, function() {
      if (link.indexOf($(this))) {
        deny = true;
        return true;
      }
    });

    if (deny) {
      return true;
    }

    link.attr('href', redirect + encodeURIComponent(link));
  });
});
