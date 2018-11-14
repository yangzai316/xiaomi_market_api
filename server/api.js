const fs = require('fs'); 

module.exports = function getJson(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname+url,'utf8', (err, data) => {
            if (err) {
                reject(err);
            }else{
                resolve(data);
            };
        });
    });
};