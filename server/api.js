
const fs = require('fs'); 
const config =  require('./../config.js');

module.exports = function getJson(url) { 
    return new Promise((resolve, reject) => {
        fs.readFile(config.baseUrl+url,'utf8', (err, data) => {
            if (err) {
                reject(err);
            }else{
                console.log(url+' success');
                resolve(data);
            };
        });
    });
};