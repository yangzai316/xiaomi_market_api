const getJson = require('./../server/api');
exports.category = async ctx => {
    const data = await getJson('/data/category/category.json');
    ctx.body = data;   
}