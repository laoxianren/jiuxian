/*home_index 项目酒仙网*/
angular.module('list_detailModules', ['me-lazyload'])
      .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('list_detail', {
                  url: '/list_detail',
                  templateUrl: './modules/sort/list_detail.html',
                  controller: 'List1Ctrl',
                  css: './modules/sort/list_detail.css'
            })
      })
      .service('GetInfoxy', ['$http', function($http) {
            this.getData1 = function() {
                  return $http.get('./modules/json/list_detail1.json')
            };
            this.getData2 = function() {
                  return $http.get('./modules/json/list_detail2.json')
            };
            this.getData3 = function() {
                  return $http.get('./modules/json/list_detail3.json')
            };
            this.getData4 = function() {
                  return $http.get('./modules/json/list_detail4.json')
            };
      }])
      .controller('List1Ctrl', ["$scope", 'GetInfoxy', function($scope, GetInfoxy) {
            GetInfoxy.getData1().success(function(res){
            	$scope.arr1 = res.goodsCate.list;
            	 
            })
            GetInfoxy.getData2().success(function(res){
            	$scope.arr2 = res.goodsCate.list;
            	 
            })
            GetInfoxy.getData3().success(function(res){
            	$scope.arr3 = res.goodsCate.list;
            	 
            })
            GetInfoxy.getData4().success(function(res){
            	$scope.arr4 = res.goodsCate.list;
            	
            })
           $scope.click_xx = function() {
                        localStorage.setItem('shopObj', JSON.stringify(this.i))
                  }
      }])




