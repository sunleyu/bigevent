

var BASE_URL = 'http://localhost:8000';
var URLIST = {
  user_login: BASE_URL + '/admin/login',
  user_logout: BASE_URL + '/admin/logout',
  user_info: BASE_URL + '/admin/getuser'
};

var Category={
  category_add:BASE_URL+"/admin/category_add",
  category_show:BASE_URL + '/admin/category_search',
  category_del:BASE_URL + '/admin/category_delete',
  category_edit:BASE_URL + '/admin/category_edit',
}

var Article={
  Article_show:BASE_URL+"/admin/search",
  Article_publish:BASE_URL+"/admin/article_publish",
  Article_del:BASE_URL+"/admin/article_delete",
  Article_edit:BASE_URL+"/admin/article_edit",

}

var Comment={
  comment_show:BASE_URL+"/get_comments",
  comment_add:BASE_URL+"/post_comment",
}