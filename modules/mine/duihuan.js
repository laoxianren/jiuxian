/*home_index 项目酒仙网*/
angular.module('DuihuanModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('duihuan',{
		url:'/duihuan',
		templateUrl:'./modules/mine/duihuan.html',
		controller:'DuihuanCtrl',
		css:'./modules/mine/duihuan.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('DuihuanCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
}])