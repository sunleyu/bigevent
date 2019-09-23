var category = {
    add: function (name, slug, callback) {
        $.post(Category.category_add, {
            name: name,
            slug: slug
        }, function (res) {
            callback(res);
        });
    },
    show: function (callback) {
        $.get(Category.category_show, {

        }, function (res) {
            callback(res);

        })
    },
    del: function (id,callback) {
        $.post(Category.category_del, {id:id

        }, function (res) {
            callback(res);

        })
    },
    edit:function(id,name,slug,callback){
        $.post(Category.category_edit,{id:id,name:name,slug:slug},function(res){
            callback(res);
        })
    }
}