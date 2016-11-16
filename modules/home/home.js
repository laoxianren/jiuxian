angular.module('HomeModules', ['me-lazyload'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: './modules/home/home.html',
			controller: 'HomeCtrl',
			css:'./modules/home/home.css'
		})
	})
	.service('GetInfo', ['$http', function($http) {
		this.getData = function() {
			return $http.get('json_data/index_order.json')
		};
		this.getData1 = function() {
			return $http.get('json_data/index_zstj.json')
		};
		this.getData2 = function() {
			return $http.get('json_data/lunbo.json')
		}
	}])
	.directive('repeatFinish', function() {
		return {
			link: function(scope, element, attr) {
				console.log(scope.$index)
				if (scope.$last == true) {
					var mySwiper = new Swiper('.swiper-container', {
						direction: 'horizontal',
						// loop: true,
						autoplay: 2000,
						paginationClickable: true,
						onAutoplayStop: function(swiper) {

						},
						onAutoplayStop: function(swiper) {
							swiper.startAutoplay();
						},
						// 如果需要分页器
						pagination: '.swiper-pagination',
						scrollbar: '.swiper-scrollbar'
					})
				}
			}
		}
	})
	.controller('HomeCtrl', ["$scope", 'GetInfo', function($scope, GetInfo) {
		$("body").scrollTop(0);
		// $("img").lazyload();
		GetInfo.getData2().success(function(res) {
				$scope.arr2 = res.data.slide
				console.log($scope.arr2)
			})
			//第一个列表的数据拼接
		GetInfo.getData().success(function(res) {
			$scope.arr = res
			console.log(res)
		})
		$scope.click_li = function() {
				console.log(this)
				localStorage.setItem('shopObj', JSON.stringify(this.x))
			}
			//第二个列表的数据拼接
		GetInfo.getData1().success(function(res) {
			$scope.arr1 = res.result.list[0].list
			console.log($scope.arr1)
		})
		$scope.click_li2 = function() {
			console.log(this)
			localStorage.setItem('shopObj', JSON.stringify(this.y))
		}
		$('.index_main1_style li').on("click", function() {
			localStorage.headerName = this.innerText
		})
		 
		$('.index_top_shang').on("click", function() {
			$("body").animate({                 
                        scrollTop: 0  
                    }, 500); 
		})

		

		function GetRTime() {
			var EndTime = new Date('2016/11/20 24:00:00');
			var NowTime = new Date();
			var t = EndTime.getTime() - NowTime.getTime();
			var d = 0;
			var h = 0;
			var m = 0;
			var s = 0;
			if (t >= 0) {
				// d=Math.floor(t/1000/60/60/24);
				h = Math.floor(t / 1000 / 60 / 60 % 24);
				m = Math.floor(t / 1000 / 60 % 60);
				s = Math.floor(t / 1000 % 60);
			}


			// document.getElementById("t_d").innerHTML = d + "天";
			$scope.shi = h + "时";
			$scope.fen = m + "分";
			$scope.miao = s + "秒";
			$scope.$apply(function() {
				$scope.shi = h + "时";
				$scope.fen = m + "分";
				$scope.miao = s + "秒";
			})
		}
		setInterval(GetRTime, 0);
		if (!localStorage.n) {
			localStorage.n = 0;
		}
		if (localStorage.n == 0) {
			$scope.address = 'zhuce';
		} else {
			$scope.address = 'mine';
		}



	}])