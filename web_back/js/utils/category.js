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
    }
}