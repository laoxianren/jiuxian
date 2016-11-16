/*home_index 项目酒仙网*/
angular.module('QianbaoModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('qianbao',{
		url:'/qianbao',
		templateUrl:'./modules/mine/qianbao.html',
		controller:'QianbaoCtrl',
		css:'./modules/mine/qianbao.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('QianbaoCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
}])