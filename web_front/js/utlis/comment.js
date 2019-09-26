var comments = {
  get: function(article_id, callBack) {
    $.get(Comment.comment_show, { article_id: article_id }, function(res) {
      callBack(res);
    });
  },
  /**
   *
   * @param {*} param  { name,content,article_id}
   * @param {*} callBack
   */
  add: function(param, callBack) {
    $.post(Comment.comment_add, param, function(res) {
      callBack(res);
    });
  }
};
