/*酒仙网合作项目,
  1612_07组 2016.11.12
  合作项目成员:魏阳,郑和滨,王宝杰,张光辉,陈均泽;
  MIT License 
*/
angular.module('jiuxian',['ui.router','angularCSS','HomeModules','CartModules'
	,'Home_details1Modules','Home_details2Modules','Home_details3Modules',
	'MineModules','DindanModules','ZhuceModules','list_detailModules','Zhuce1Modules','sortModules','MiaopaiModules','listModules','DizhiModules','Dizhi2Modules','DuihuanModules','LiulanModules','QianbaoModules','ShoucangModules','YouhuiquanModules','ZhanghuModules','shopInfoModules','PresentModules'])

   .config(function($stateProvider,$urlRouterProvider){
           $urlRouterProvider.otherwise('home');
   })
   