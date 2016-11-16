/*home_index 项目酒仙网*/
angular.module('MineModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('mine',{
		url:'/mine',
		templateUrl:'./modules/mine/mine.html',
		controller:'MineCtrl',
		css:'./modules/mine/mine.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('MineCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }

     $scope.tuichu=function(){
       localStorage.n=0;
    }
}])