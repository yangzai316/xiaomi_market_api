
const getJson = require('./../server/api'); 

exports.details = async ctx => {
    const data = await getJson('/data/details/index.json');
    ctx.body = data;
}
exports.phone = async ctx => {
    const data = await getJson('/data/details/phones.json');
    ctx.body = data;
} 
exports.commends = async ctx => {
    const data = await getJson('/data/details/commends.json');
    ctx.body = data;
} 
exports.comment = async ctx => {
    if(ctx.query.page>3){
        return ctx.body={
            result:false
        };
    }
    const data = await getJson('/data/details/comment.json');
    ctx.body = data;
}
exports.commentDetail = async ctx => {
    const data = await getJson('/data/details/commentDetail.json');
    ctx.body = data;
} 
exports.paramsDetail = async ctx => {
    const data = await getJson('/data/details/params.json');
    ctx.body = data;
} 
