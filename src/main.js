import Vue from 'vue'
var stocks = require('../data/stocks.json');
var initialStocks = stocks.slice(0);



function pageInit(){

	var vm = new Vue({
	 el: 'body',
	 data:{
	 	stocks:stocks,
	 	priceStrength:0,
	 	profitStrength:0
	 },
	 methods: {
	    restore:function () {
	    	vm.$data.stocks = initialStocks;
	    },
	    filter:function(){
	    	$('#main-table').DataTable().destroy();
	    	var tmpStocks = stocks.slice(0);
	    	if(vm.priceStrength > 0 ){
	    		tmpStocks = tmpStocks.filter(function(item){
		    		if(parseInt(item.priceStrength) >= parseInt(vm.priceStrength)){
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
	    	vm.stocks = tmpStocks;
	    	Vue.nextTick(function () {
	    		$('#main-table').DataTable({
					stateSave:false,
			    	paging: false,
			    	searching:false
			    });
			})
	    }
	  }
	})

	$('#main-table').DataTable({
		stateSave:false,
    	paging: false,
    	searching:false
    });
}

$(pageInit())

