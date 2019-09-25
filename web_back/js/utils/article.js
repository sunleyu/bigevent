var article = {
    show: function (param, callback) {
        $.get(Article.Article_show, param, function(res) {
            callback(res)
        });
    },
    publish: function (fd, callback) {
        $.get(Article.Article_publish, fd, function(res) {
            callback(res)
        });
    },
    del: function(id, callBack) {
        $.get(Article.Article_del, { id: id }, function(res) {
          callBack(res);
        });
      },
}