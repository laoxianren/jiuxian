/*home_index 项目酒仙网*/
angular.module('PresentModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('present',{
		url:'/present',
		templateUrl:'./modules/cart/present.html',
		controller:'CartaCtrl',
		css:'./modules/cart/present.css'
	})
})
.service('GetInfox',['$http',function($http){
	/*this.getData =function(){
		return $http.get('./data.json')
	}*/
}])
.controller('CartaCtrl',["$scope",'GetInfox',function($scope,GetInfox){
        /*getInfo.getData().success(function(res){
              $scope.arr =res;
        })*/
        $scope.money =localStorage.money;
        $scope.show =false;
        $scope.click_ul =function(){
        $scope.show =!$scope.show;
         
    }
}])