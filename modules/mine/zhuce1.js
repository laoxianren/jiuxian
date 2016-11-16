/*home_index 项目酒仙网*/
angular.module('Zhuce1Modules',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('zhuce1',{
		url:'/zhuce1',
		templateUrl:'./modules/mine/zhuce1.html',
		controller:'Zhuce1Ctrl',
		css:'./modules/mine/zhuce1.css'
	})
})
.service('getInfo',['$http',function($http){
	 
}])
.controller('Zhuce1Ctrl',["$scope",'getInfo',function($scope,getInfo){
       $scope.show =false;
       $scope.click_ul =function(){
       $scope.show =!$scope.show;
         
    }
     $scope.denglu=function(){
        localStorage.n=localStorage.n+1;
     }






		    
  //    function checkPhone(){ 
  //  		 var phone = document.getElementById('phone').value;
  //   	if(!(/^1[34578]\d{9}$/)){
		//         return false;
		//     }else{
		//         return true;//不写此返回值也行，此时就直接提交了
		//     }

		// }
		// if(checkPhone ==false){
		// 	$('.btn').angular('ui-sref',"zhuce1");
		// }
		$("phone").onfocus=function(){
			$("v").innerHTML = "长度在6-16之间；只能由数字、字母、下划线组成；首字母不能是数字";
		}
		$("phone").onblur = function(){

			var parrent1 = /^[a-z_]\w{5,15}$/i;

			if( parrent1.test($("phone").value) ){
				$("v").innerHTML = "输入正确！"
			}else{
				$("v").innerHTML = "输入错误！"
			}
		}
		document.getElementById("ba").onclick=function(){
			document.getElementById("baa").style.display="block";
		}
		document.getElementById("baaa").onclick=function(){
			document.getElementById("baa").style.display="block";
		}
		document.getElementById("span").onclick=function(){
			document.getElementById("baa").style.display="none";
		}

	function $ (idName) {
			return document.getElementById(idName);
		}
}])

