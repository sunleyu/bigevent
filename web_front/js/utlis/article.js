var article = {
    show: function (param, callback) {
        $.get(Article.Article_show, param, function(res) {
            callback(res)
        });
    },
    
    
    
}