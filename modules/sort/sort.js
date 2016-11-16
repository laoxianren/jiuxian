/*home_index 项目酒仙网*/
angular.module('sortModules',['me-lazyload'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('sort',{
		url:'/sort',
		templateUrl:'./modules/sort/sort.html',
		controller:'SortCtrl',
		css:'./modules/sort/sort.css'
	})
})
.service('getInfo',['$http',function($http){
	/*this.getData =function(){
		return $http.get('./data.json')
	}*/
}])
.controller('SortCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show = false;
       $scope.show3 = true;
       $scope.click_ul =function(){
       $scope.show1 =!$scope.show1;     
    }
       $scope.click_search = function(){
       $scope.show2 = true;
       $scope.show3 = false;
    }
       $scope.click_choice = function(){
       $scope.show2 = false;
       $scope.show3 = true;
    }
}])