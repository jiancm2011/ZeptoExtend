;(function ($) {
    $.extend($, {
        render: function (html, data) {
            var str = html,
                rex,
                key;
            for (key in data) {
                rex = new RegExp("{\\$" + key + "}", "gi");
                str = str.replace(rex, data[key]);
            }
            return $(str);
        }
    });
})(Zepto);