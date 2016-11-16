/*home_index 项目酒仙网*/
angular.module('Home_details3Modules',['me-lazyload'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home_details3',{
		url:'/home_details3',
		templateUrl:'./modules/home_details/home_details3.html',
		controller:'Home_details3Ctrl',
		css:'./modules/home_details/home_details3.css'
	})
})
.service('GetInfoS',['$http',function($http){
	this.getData =function(){
		return $http.get('./modules/json/酒仙独家.json')
	}
}])
.controller('Home_details3Ctrl',["$scope",'GetInfoS',function($scope,GetInfoS){
        GetInfoS.getData().success(function(res){
              $scope.jiuArr =res.data.top;
              $scope.jiuArr1 =res.data.centent;
              $scope.jiuArr2 =res.data.bottom;
        });
       $scope.show =false;
       $scope.click_nav =function(){
       $scope.show =!$scope.show;
         
    }
     $scope.headername = localStorage.headerName;
     $('.toTop').on("click", function() {
      $("body").animate({                 
          scrollTop: 0  
      }, 500); 
    })
}])