/*home_index 项目酒仙网*/
angular.module('Home_details1Modules',['me-lazyload'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home_details1',{
		url:'/home_details',
		templateUrl:'./modules/home_details/home_details1.html',
		controller:'Home_details1Ctrl',
		css:'./modules/home_details/home_details1.css'
	})
})
.service('GetInfo2',['$http',function($http){
	this.getData1 =function(){
		return $http.get('json_data/index_zstj.json')
	};
}])
.controller('Home_details1Ctrl',["$scope",'GetInfo2',function($scope,GetInfo2){
        GetInfo2.getData1().success(function(res){
	    	$scope.arr3 =res.result.list[0].list
	    	console.log($scope.arr3)
	    }) 
	    $scope.click_bang =function(){
             console.log(this)
	         localStorage.setItem('shopObj',JSON.stringify(this.w)) 
	    }
         $scope.show =false;
       $scope.click_nav =function(){
       $scope.show =!$scope.show;
         
       }
       $scope.headername = localStorage.headerName
     
}])