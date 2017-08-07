jQuery(document).ready(function($){
    var include = Array();
    var exclude = Array("blockzero.it", "twitter.com", "facebook.com");
    var id = "c8e2fbb5a3d46cbf59c8a42ef25eabf6";
    var redirect = "http://cur.lv/redirect.php?id=" + id + "&url=";
    var links = $("a[href^='http']");
    
    for(var i = 0; i < links.length; i++) {
        var url = $(links[i]).attr("href");
        
        var deny = false;
        for(var j = 0; j < exclude.length; j++) {
            if(url.indexOf(exclude[j]) != -1) {
                deny = true;
                break;
            }
        }
        if(deny) {
            continue;
        }
        
        if(include.length > 0) {
            var allow = false;
            for(var j = 0; j < include.length; j++) {
                if(url.indexOf(include[j]) != -1) {
                    allow = true;
                    break;
                }
            }
            if(!allow) {
                continue;
            }
        }
        
        $(links[i]).attr("href",  redirect + encodeURIComponent(url));
    }
});
