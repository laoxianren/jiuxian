/*home_index 项目酒仙网*/
angular.module('YouhuiquanModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('youhuiquan',{
		url:'/youhuiquan',
		templateUrl:'./modules/mine/youhuiquan.html',
		controller:'YouhuiquanCtrl',
		css:'./modules/mine/youhuiquan.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('YouhuiquanCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
}])