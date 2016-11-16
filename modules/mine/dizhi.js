/*home_index 项目酒仙网*/
angular.module('DizhiModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('dizhi',{
		url:'/dizhi',
		templateUrl:'./modules/mine/dizhi.html',
		controller:'DizhiCtrl',
		css:'./modules/mine/dizhi.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('DizhiCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
}])