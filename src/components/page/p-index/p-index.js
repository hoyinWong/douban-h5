/**
 * @author [hoyinWong]
 * @description [douban-h5 首页]
 * @Date [2017-03-01]
 */
'use strict';

var 
	Vue = require('vue');
require('./p-index.scss');

module.exports = Vue.extend({
	template: require('./p-index.jade')(),
	data: function(){
		return {};
	},
	components: {
		'wHead': require('../../widget/w-head/w-head.js'),
		'wHotTopic': require('../../widget/w-hotTopic/w-hotTopic.js'),
		'wIndexRecommend': require('../../widget/w-indexRecommend/w-indexRecommend.js')
	},
	watch: {

	},
	ready: function(){
	}
});