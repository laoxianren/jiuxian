/*home_index 项目酒仙网*/
angular.module('listModules', ['me-lazyload'])
      .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('list', {
                  url: '/list',
                  templateUrl: './modules/sort/list.html',
                  controller: 'ListCtrl',
                  css: './modules/sort/list.css'
            })
      })
      .service('GetInfo4', ['$http', function($http) {
            this.getData1 = function() {
                  return $http.get('json_data/index_zstj.json')
            };
      }])
      .controller('ListCtrl', ["$scope", 'GetInfo4', function($scope, GetInfo4) {
            $scope.show = false;
            GetInfo4.getData1().success(function(res) {
                  $scope.arr4 = res.result.list[0].list;
                  console.log($scope.arr4);
            })
            $scope.click_list = function() {
                  localStorage.setItem('shopObj', JSON.stringify(this.a));
                  console.log(this);
                  console.log(localStorage.shopObj);
            }
            $scope.click_choose = function() {
                  $scope.show = !$scope.show;

            }
            $("body").animate({                 
                        scrollTop: 1 
                    }, 500); 

            $scope.flag = 0;
            $scope.flag1 = 0;
            $scope.show1 = false;
            $scope.show2 = true;
            $scope.shouliang = function() {
                  $scope.show1 = false;
                  $scope.show2 = true;
                  $scope.flag1 = 0;
                  $("body").animate({                 
                        scrollTop: 1 
                    }, 500); 

            }
            $scope.price = function() {
                  $scope.show1 = true;
                  $scope.show2 = false;
                  $scope.flag = !$scope.flag;
                  $("body").animate({                 
                        scrollTop: 1 
                    }, 500); 

            }
            $scope.renqi = function() {
                  $scope.show1 = false;
                  $scope.show2 = true;
                  $scope.flag1 = 1;
                  $("body").animate({                 
                        scrollTop: 3 
                    }, 500); 

            }
            $('.ul_lis1').on('click', function() {
                  $(this).addClass('lisClass').siblings('li').removeClass('lisClass');
            });
            var flag1 = false;
            $('.list_ul1 li:eq(1)').on('click', function() {
                  if (flag1) {
                        $('.list_top').css('display', 'inline-block');
                        $('.list_top').css('background-position', '-24px -2px');
                        $('.list_top').css('margin-top', '9px');
                        flag1 = false;
                  } else {
                        $('.list_top').css('display', 'inline-block');
                        $('.list_top').css('background-position', '0 0');
                        $('.list_top').css('margin-top', '8px');
                        flag1 = true;
                  }
            });
            var flag2 = true;
            $('#list_lis1 span').on('click', function() {
                  console.log(this);
                  if (flag2) {
                         $(this).css('background', 'url("modules/images/list_1.png") -70px 0');
                        $('.list_main').css({
                              'width': '50%',
                              'float': 'left',
                               
                        });
                        $('.list_main p').css({'width': '100%',
                                                'overflow':"hidden",
                                                "white-space":"pre",
                                                "text-overflow":'ellipsis'
                                                            });
                        $('.list_main img').css('margin-left', '0.3rem');
                        flag2 = false;
                  } else {
                        $(this).css('background', 'url("modules/images/list_1.png") -45px 0');
                        $('.list_main').css('width', '100%');
                        $('.list_main p').css('width', '55%');
                        $('.list_main img').css('float', 'left');
                        flag2 = true;
                  }
            })
      }])