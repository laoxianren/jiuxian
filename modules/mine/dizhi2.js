/*home_index 项目酒仙网*/
angular.module('Dizhi2Modules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('dizhi2',{
		url:'/dizhi2',
		templateUrl:'./modules/mine/dizhi2.html',
		controller:'Dizhi2Ctrl',
		css:'./modules/mine/dizhi2.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('Dizhi2Ctrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
}])