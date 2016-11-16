/*home_index 项目酒仙网*/
angular.module('shopInfoModules',['me-lazyload'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('shopInfo',{
		url:'/shopInfo',
		templateUrl:'./modules/shopInfo/shopInfo.html',
		controller:'ShopInfoCtrl',
		css:'./modules/shopInfo/shopInfo.css'
	})
})
.service('GetInfoI',['$http',function($http){
	this.getData =function(){
		return $http.get('./modules/json/shopInfo.json')
	}
}])
.controller('ShopInfoCtrl',["$scope",'GetInfoI',function($scope,GetInfoI){
	    $("body").scrollTop(0);
	   var  goods =JSON.parse(localStorage.shopObj)
	   console.log(goods)
        $scope.name =goods.goods_name
        $scope.shop_img =goods.goods_thumb||goods.middle
        $scope.shop_slogan =goods.Slogan||goods.sub_title
        $scope.price =goods.market_price||goods.cur_price
        $scope.InitSales =goods.InitSales
        GetInfoI.getData().success(function(res){
              $scope.infoArr =res;
              console.log(res);
        });
        $(".header_home").on("click",function(){
        	 window.history.back();
        });
        
          //添加购物车逻辑的整合
        $('.add').on("click",function(){
            $('.number1').text(parseInt($('.number1').text())+1)
        })
        //数字减法计算
        $('.prev').on("click",function(){
            if($(".number1").text()==1){
                return;
            }else{
            $('.number1').text(parseInt($('.number1').text())-1)    
            }
        })
        //获取数据关联购物车
        if(localStorage.numBer){
                $(".number2").text(parseInt(localStorage.numBer))
            }else{
                localStorage.numBer="0";
            }
        //添加购物车,并完成本地存储
        if(localStorage.arrx){
          arrx =localStorage.arrxx.split(",")
        }else{
          arrx =[];
        }
        $('.addCart').on('click',function(){
          if(localStorage.arrxx){
          arrx =localStorage.arrxx.split(",")
        }else{
          arrx =[];
        }
           //添加动画
                $(".addc").show(500);
                if ($(".addc").show()) {
                    setTimeout(function timez(){
                        $(".addc").hide();
                    },1000)
                }
              var goodsId = JSON.parse(localStorage.shopObj).goods_id
              
              $(".number2").text(parseInt($(".number1").text())+parseInt($('.number2').text()));
              localStorage.numBer =$(".number2").text();
              if(localStorage[goodsId]){
              localStorage.setItem(goodsId,JSON.stringify({
              data: localStorage.shopObj,
              number:parseInt($(".number1").text())+parseInt(JSON.parse(localStorage[goodsId]).number)
            }))
              }else{
                arrx.push(goodsId);
                localStorage.arrxx =arrx;
                localStorage.setItem(goodsId,JSON.stringify({
              data: localStorage.shopObj,
              number:parseInt($(".number1").text())
            }));
              }
        });
         var flog =true;
        $(".collect").on('click', function(){
            $(".collectY").show(300);
            if($(".collectY").show()){
                setTimeout(function timez(){
                    $(".collectY").hide();
                },1000)
            }
            
           if(flog){
                 flog=false
                 $(this).children('img')[0].src= "modules/images/bottom15.png";
           }else{
                $(this).children('img')[0].src = "modules/images/bottom05.png";
                if ($(".collectN").show()){
                    setTimeout(function timez(){
                        $(".collectN").hide();
                    },1000)
                }
                flog =true;
           }
        });
        
        
        
}])