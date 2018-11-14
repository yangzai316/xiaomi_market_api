const router = require('koa-router')();
const index_controller = require('./../controller/index');
const category_controller = require('./../controller/category');
const login_controller = require('./../controller/login');
const details_controller = require('./../controller/details');
const car_controller = require('./../controller/car');



// 首页banner
router.get('/index', index_controller.bannerList);
// 首页推荐图片
router.get('/index/recommend', index_controller.recommendList);
// 首页图片list
router.get('/index/list', index_controller.list);
// category
router.get('/category', category_controller.category);
// login
router.post('/login',login_controller.login);
// 商品详情
router.get('/details',details_controller.details);
// 商品详情
router.get('/details/phone',details_controller.phone);
// 商品详情--推荐
router.get('/details/commends',details_controller.commends);
// 商品详情--评论列表
router.get('/details/comment',details_controller.comment);
// 商品详情--评论详情
router.get('/details/commentDetail',details_controller.commentDetail);
// 商品详情--参数详情
router.get('/details/params',details_controller.paramsDetail);
//购物车
router.get('/car',car_controller.car);

module.exports = router;