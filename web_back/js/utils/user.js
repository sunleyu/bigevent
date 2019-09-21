var USER={
  user_login:function(username,password,callback){
    $.post(URLIST.user_login, {
      user_name: username,
      password: password
    }, function (res) {
      callback(res)
    });
  },
  user_logout:function(callback){
    $.post(URLIST.user_logout, function (res) {
     callback(res);
    })
  },
  user_info:function(callback){
    $.get(URLIST.user_info, function (res) {
      callback(res);
     })
  }
    
}
























// var user = {
//   /**
//    * 管理员登陆
//    * @param {*} userName 用户名
//    * @param {*} password 密码
//    * @param {*} callBack 回调函数
//    */
//   login: function(userName, password, callBack) {
//     // alert(userName + password);
//     $.post(URLIST.user_login, { user_name: userName, password: password }, function(res) {
//       // res 是本次请求，从服务器回来的数据
//       callBack(res);
//     });
//   },

//   logout: function(callBack) {
//     $.post(URLIST.user_logout, function(res) {
//       callBack(res);
//     });
//   },

//   getInfo: function(callBack) {
//     $.get(URLIST.user_info, function(res) {
//       callBack(res);
//     });
//   }
// };
