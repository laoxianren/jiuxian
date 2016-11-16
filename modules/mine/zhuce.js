/*home_index 项目酒仙网*/
angular.module('ZhuceModules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('zhuce',{
		url:'/zhuce',
		templateUrl:'./modules/mine/zhuce.html',
		controller:'ZhuceCtrl',
		css:'./modules/mine/zhuce.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('ZhuceCtrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
     $scope.denglu=function(){
        localStorage.n=localStorage.n+1;
     }


     $("phone1").onfocus=function(){
			$("n").innerHTML = "长度在6-16之间；只能由数字、字母、下划线组成；首字母不能是数字";
		}
		$("phone1").onblur = function(){

			var parrent1 = /^[a-z_]\w{5,15}$/i;

			if( parrent1.test($("phone1").value) ){
				$("n").innerHTML = "输入正确！"
			}else{
				$("n").innerHTML = "输入错误！"
			}
		}
		 $("phone2").onfocus=function(){
			$("m").innerHTML = "密码就是账号";
		}
		$("phone2").onblur = function(){
			if($("phone1").value == ""){
				$("n").innerHTML = "输入错误！";
				$("m").innerHTML = "输入错误！";
			}else{
				if( $("phone2").value==$("phone1").value){
				$("m").innerHTML = "输入正确！"
				}else{
				$("m").innerHTML = "输入错误！"
			}
			}

		}
		document.getElementById("btnn").onclick=function(){
			 localStorage.zhanghuname = $("phone1").value;
		}



		function $ (idName) {
			return document.getElementById(idName);
		}
}])