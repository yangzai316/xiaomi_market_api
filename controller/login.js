const data = require('./../data/login/user.js');

/**
 * login
 */

exports.login = ctx => { 
    const { username,password } = ctx.request.body;    
    ctx.session.username = username;
    
    let user = ''
    const L = data.user.length;
    for(let i=0;i<L;i++){

        if(data.user[i].username == username&&data.user[i].password == password){
            user = data.user[i].name
            break;
        }else if(data.user[i].username == username){
            user = '01'
            break;
        }else{
            user = '02'
            break;
        };
    };
    let result = false; 
    let message = '';
    if(user == '01'){ 
        result = false;
        message = '密码输入错误'
    }else if(user == '02'){
        result = false;
        message = '账户不存在'
    }else{
        result = true;
        message = '';
        message = '登陆成功'
    };  
    ctx.body = {
        result,user,message
    };
}
