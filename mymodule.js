module.exports = function(dir, extend, callback) {
    var fs = require('fs');
    var path = require('path');


    fs.readdir(dir, function(err, list) {
        if (err)
            return callback(err);

        //满足条件的数组
        var data = [];
        list.forEach(function(file) {
                if (path.extname(file) === '.' + extend) {
                    data.push(file);
                }
            })
            //data is  array
        callback(null, data);
    });
}
