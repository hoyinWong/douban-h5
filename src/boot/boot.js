'use strict';
require('./boot.scss');
var 
	Vue = require('vue'),
	VueRouter = require('vue-router');

Vue.use(VueRouter);
var 
	app = Vue.extend({
		el: function(){
			return '#app'
		},
		ready: function(){
			var vm = this;
		}
	});

var router = new VueRouter();
router.map({
	'/index': {
		component: require('../components/page/p-index/p-index.js')
	},
	'/movie': {
		component: require('../components/page/p-movie/p-movie.js')
	},
	'*': {
		component: require('../components/page/p-index/p-index.js')
	}
});

router.start(app, '#app');