/**
 * @author [hoyinWong]
 * @description [头部]
 * @Date [2017-03-02]
 */
'use strict';
var Vue = require('vue');
require('./w-head.scss');
module.exports = Vue.extend({
	template: require('./w-head.jade')(),
	data: function(){
		return {
			showTabs: false
		};
	},
	ready: function(){
	},
	methods:{
		showTabsClick: function(){
			var she = this;
			she.$data.showTabs = true;
		},
		closeTabsClick: function(){
			var she = this;
			she.$data.showTabs = false;
		}
	}
});