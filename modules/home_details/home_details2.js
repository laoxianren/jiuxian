/*home_index 项目酒仙网*/
angular.module('Home_details2Modules',['me-lazyload'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home_details2',{
		url:'/home_details2',
		templateUrl:'./modules/home_details/home_details2.html',
		controller:'Home_details2Ctrl',
		css:'./modules/home_details/home_details2.css'
	})
})
.service('GetInfoZ',['$http',function($http){
	this.getData =function(){
		return $http.get('./modules/json/团购.json')
	}

}])
.controller('Home_details2Ctrl',["$scope",'GetInfoZ',function($scope,GetInfoZ){
        GetInfoZ.getData().success(function(res){
              $scope.huiArr1 =res.data.img1;
              $scope.huiArr2 =res.data.img2;
              $scope.huiArr3 =res.data.img3;
              $scope.huiArr4 =res.data.img4;
              $scope.huiArr5 =res.data.img5;
              $scope.huiArr6 =res.data.img6;
              $scope.huiArr7 =res.data.img7;
              $scope.huiArr8 =res.data.img8;
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