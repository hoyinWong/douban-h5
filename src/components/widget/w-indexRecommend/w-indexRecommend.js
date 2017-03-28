/**
 * @author [hoyinWong]
 * @description [首页-推荐内容]
 * @Date [2017-03-05]
 */
'use strict';
var Vue = require('vue');
require('./w-indexRecommend.scss');
module.exports = Vue.extend({
	template: require('./w-indexRecommend.jade')(),
	data: function(){
		return {};
	},
	ready: function(){

	},
	methods: {
		gotoRecommendDetail: function(){
			alert(111);
		}
	}
})
