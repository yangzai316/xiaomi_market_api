# xiaomi_market_api 
本项目主要为[xiaomi_market](https://github.com/yangzaiwangzi/xiaomi_market)，提供后端数据支持，不是专注于某点的项目，本着可以用为目的，很是粗糙，不喜勿喷。<br>
本项目主要使用koa2,将本地json文件的内容以数据的形式返回给前端，json文件的内容拷贝于[小米商城移动版](https://m.mi.com/)，如有侵权，联系删除（@小米商场）。
#### 技术栈
- koa
- koa-router
- koa-session
#### 项目启动
```
git clone https://github.com/yangzaiwangzi/xiaomi_market_api
npm install
npm run dev
```
注意：注意启动文件（index.js）中的 'app.listen(xxxx);' 中的xxxx为本项目启动端口，请配置到 'xiaomi_market' 项目的配置文件（config）中，保证前端项目请求代理配置的正确性。