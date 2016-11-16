/*home_index 项目酒仙网*/
angular.module('ZhanghuModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('zhanghu',{
		url:'/zhanghu',
		templateUrl:'./modules/mine/zhanghu.html',
		controller:'ZhanghuCtrl',
		css:'./modules/mine/zhanghu.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('ZhanghuCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
}])