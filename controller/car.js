const getJson = require('./../server/api');
exports.car = async ctx => {
    const _session = ctx.session.username;
    let data = null;
    if(_session){
        data = await getJson('/data/car/index.json'); 
    }else{
        data = {
            result:false,
            code:5001,
            message:"未登陆"
        };
    };
    ctx.body = data;   
}