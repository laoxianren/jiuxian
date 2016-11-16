/*home_index 项目酒仙网*/
angular.module('MiaopaiModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('miaopai',{
		url:'/miaopai',
		templateUrl:'./modules/home/miaopai.html',
		controller:'MiaopaiCtrl',
		css:'./modules/home/miaopai.css'
	})
})
.service('GetInfoo',['$http',function($http){
		this.getData5 = function() {
			return $http.get('json_data/index_order.json')
		};
}])
.controller('MiaopaiCtrl',["$scope",'GetInfoo',function($scope,GetInfoo){
		GetInfoo.getData5().success(function(res) {
				$scope.arr5 = res			
			})
      $scope.click_li = function() {
				console.log(this)
				localStorage.setItem('shopObj', JSON.stringify(this.o))
			}

    
var mySwiper1 = new Swiper ('.swiper-container', {
    
    loop: true,
    paginationClickable: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination'
    
   
   
  })        








       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
}])	