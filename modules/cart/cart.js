/*home_index 项目酒仙网*/
angular.module('CartModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('cart',{
		url:'/cart',
		templateUrl:'./modules/cart/cart.html',
		controller:'CartCtrl',
		css:'./modules/cart/cart.css'
	})
})
.controller('CartCtrl',["$scope",'getInfo',function($scope,getInfo){
         $(".mine-header-a1").on("click",function(){
        	 window.history.back();
        })
         $scope.show3 =false;
         $scope.show4 =true;
         if(localStorage.numBer>0){
         $scope.show3 =true;
         $scope.show4 =false;
         }
         $('.zongji').text(localStorage.numBer);
         if(localStorage.arrxx){
         	var arrxx = localStorage.arrxx.split(","),
         	    str ="";
         	for(var i=0;i<arrxx.length;i++){
                var abc =JSON.parse(JSON.parse(localStorage[arrxx[i]]).data)
                var abcd =JSON.parse(JSON.parse(localStorage[arrxx[i]]).number)
                str +='<li id ='+abc.goods_id+'>\
					<span>\
					<img src="images/shoppingCart-face.jpg">\
					</span>\
					<img src="'+abc.goods_thumb+'"/>\
					<a href="#">'+abc.goods_name+'\
					</a>\
					<h4 class="jiage">'+(abc.shop_price||abc.market_price)+'￥</h4>\
					<div style="text-align:center;" class="NUM">'+abcd+'</div>\
					<img src="images/shoppingCart-delete.jpg" class="deleteShop">\
					<div></div>\
				</li>'
         	}
         	$('.gouwudan').append(str);
         	$('.gouwudan').find("li").each(function(){
                 var mumPre = parseFloat($(this).find('.NUM').text());
		         var onePre = parseFloat($(this).find('.jiage').text());
		         var ok1 = parseFloat($(".addx").text());
		         ok1 += mumPre * onePre;
		         $('.addx').text(parseFloat(ok1)+"￥");
                 localStorage.money =$('.addx').text();
         	})

         }
         $('.gouwudan').on("click",".deleteShop",function(){
                 var del = $(this).closest("li")[0].id
                 localStorage.numBer = parseInt(localStorage.numBer)-JSON.parse(JSON.parse(localStorage[del]).number);
                 $(".zongji").text(localStorage.numBer)
                 delete localStorage[del];
                 var arrm = localStorage.arrxx.split(',');
                 for(var u=0;u<arrm.length;u++){
                    if(arrm[u]==del){
                        arrm.splice(u,1);
                        localStorage.arrxx =arrm;
                    }
                 }
                 
                 
                 $(this).closest("li").remove();
                  $('.gouwudan').find("li").each(function(){
                 var mumPre = parseFloat($(this).find('.NUM').text());
		         var onePre = parseFloat($(this).find('.jiage').text());
		         var ok1 = 0;
		         ok1 += mumPre * onePre;
		         $('.addx').text(parseFloat(ok1)+"￥");
                 localStorage.money =$('.addx').text();
         	})
                 if(localStorage.numBer=="0"){
                 	$scope.$apply(function(){
                 	$scope.show3 =false;
                    $scope.show4 =true;
                 	})
                 }
                  
         	})
         

}])