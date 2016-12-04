import Vue from 'vue'
var stocks = require('../data/stocks.json');
var initialStocks = stocks.slice(0);

var mainTable;
var vm ;

function initDataTable(){
	return $('#main-table').DataTable({
		stateSave:false,
    	paging: false,
    	searching:false
    })
}

function pageInit(){

	

	 vm = new Vue({
	 el: 'body',
	 data:{
	 	stocks:stocks,
	 	priceStrength:80,
	 	halfPriceStrength:80,
	 	profitStrength:0,
	 	capitalisation:100
	 },
	 methods: {
	    restore:function () {
	    	vm.$data.stocks = initialStocks;
	    },
	    filter:function(){
	    	mainTable.destroy();
	    	var tmpStocks = stocks.slice(0);
	    	if(vm.priceStrength > 0 ){
	    		tmpStocks = tmpStocks.filter(function(item){
		    		if(parseInt(item.priceStrength) >= parseInt(vm.priceStrength)){
		    			return true;
		    		}
		    		return false;
	    		})
	    	}
	    	if(vm.halfPriceStrength > 0 ){
	    		tmpStocks = tmpStocks.filter(function(item){
		    		if(parseInt(item.halfPriceStrength) >= parseInt(vm.halfPriceStrength)){
		    			return true;
		    		}
		    		return false;
	    		})
	    	}
	    	if(vm.profitStrength > 0 ){
	    		tmpStocks = tmpStocks.filter(function(item){
		    		if(parseInt(item.profitStrength) >= parseInt(vm.profitStrength)){
		    			return true;
		    		}
		    		return false;
	    		})
	    	}
	    	if(vm.capitalisation > 0 ){
	    		tmpStocks = tmpStocks.filter(function(item){
		    		if(parseInt(item.capitalisation) <= parseInt(vm.capitalisation)){
		    			return true;
		    		}
		    		return false;
	    		})
	    	}
	    	vm.stocks = tmpStocks;
	    	Vue.nextTick(function () {
	    		mainTable = initDataTable();
			})
	    }
	  }
	})

	mainTable = initDataTable();
	
}

$(pageInit())

