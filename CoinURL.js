jQuery(document).ready(function($) {
  var exclude = Array("blockzero.it", "twitter.com", "facebook.com", "creativecommons.org", "iubenda.com");
  var id = "c8e2fbb5a3d46cbf59c8a42ef25eabf6";

  //CODE
  var redirect = "http://cur.lv/redirect.php?id=" + id + "&url=";
  var links = $("a[href^='http']");

  $.each(links, function() {
    var link = $(this).attr('href');
    var nocoin = $(this).is('[nocoin]');

    if (nocoin) {
      return;
    }

    var deny = false;
    $.each(exclude, function(n, val) {
      if (link.indexOf(val) != -1) {
        deny = true;
        return;
      }
    });

    if (deny) {
      return;
    }

    $(this).attr('href', redirect + encodeURIComponent(link));
  });
});
