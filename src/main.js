import Vue from 'vue'
var stocks = require('../data/stocks.json');

new Vue({
 el: 'body',
 data:{
 	stocks:stocks
 }
})
