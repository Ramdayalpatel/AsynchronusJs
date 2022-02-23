const fs = require('fs');
const filelocation = __dirname + '/info.txt';
let info = fs.readFile(filelocation, 'utf-8', function (err, data) {
    if (err) {
        console.log(data);
    }
})