/*home_index 项目酒仙网*/
angular.module('DindanModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('dindan',{
		url:'/dindan',
		templateUrl:'./modules/mine/dindan.html',
		controller:'DindanCtrl',
		css:'./modules/mine/dindan.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('DindanCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
}])