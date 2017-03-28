/**
 * @author [hoyinWong]
 * @description [首页-热门话题]
 * @Date [2017-03-05]
 */
'use strict';

var Vue = require('vue');
require('./w-hotTopic.scss');
module.exports = Vue.extend({
	template: require('./w-hotTopic.jade')(),
	data: function(){
		return{
			hotTopic:{
				text: '热榜话题'
			}
		};
	},
	ready: function(){

	},
	methods:{
		
	}
})