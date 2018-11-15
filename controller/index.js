
const getJson = require('./../server/api');
/**
 * 首页
 */
exports.bannerList = async ctx => {
    const data = await getJson('/data/index/index.json');
    ctx.body = data;
}
exports.recommendList = async ctx => {
    const data = await getJson('/data/index/recommend.json');
    ctx.body = data;
}

exports.list = async ctx => {
    const data = await getJson('/data/index/list.json');
    ctx.body = data;
}
