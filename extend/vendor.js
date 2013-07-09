(function($) {
    var arr, key,
        obj = {
            webkit: "webkitTransform",
            Moz: "MozTransition",
            O: "OTransform",
            ms: "msTransform"
        },
        style = document.body.style;
    
    for(key in obj) {
        if(obj[key] in style) {
            arr = [key, "-" + key.toLowerCase() + "-"];
            break;
        }
    }

    $.extend($, {
        vendor: arr
    });

})(Zepto);