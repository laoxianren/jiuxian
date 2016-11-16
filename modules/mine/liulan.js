/*home_index 项目酒仙网*/
angular.module('LiulanModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('liulan',{
		url:'/liulan',
		templateUrl:'./modules/mine/liulan.html',
		controller:'LiulanCtrl',
		css:'./modules/mine/liulan.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('LiulanCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
}])