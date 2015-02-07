var fs = require('fs');
var path = require('path');

var fileDir = process.argv[2],
    fliterName = process.argv[3];

fs.readdir(fileDir, function(err, list) {
    if (err) throw err;
    list.forEach(function(file) {
        if (path.extname(file) === '.' + fliterName)
        console.log(file);
    })
});
