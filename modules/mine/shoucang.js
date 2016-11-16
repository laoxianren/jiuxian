/*home_index 项目酒仙网*/
angular.module('ShoucangModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('shoucang',{
		url:'/shoucang',
		templateUrl:'./modules/mine/shoucang.html',
		controller:'ShoucangCtrl',
		css:'./modules/mine/shoucang.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('ShoucangCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
}])