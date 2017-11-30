// 创建应用模块
var app = angular.module("yike",[]);
//run方法的作用是在模块创建好之后直接执行
//因为toggle切换页面的方法对所有页面都有效,所以将该方法绑定在根作用域上
app.run(["$rootScope",function($rootScope){
	//在根目录绑定collapse属性,初始值为false,
	//表示navs header body 没有弹出
	$rootScope.collapsed = false;
	//绑定toggle方法:点击菜单,页面来回切换
	$rootScope.toggle=function(){
		$rootScope.collapsed=!$rootScope.collapsed;
		//将导航栏的小标题添加显示和隐藏效果
		//获取所有的dd
		var dds = document.querySelectorAll("dd");
		//循环遍历每一个dd,修改dd的样式,达到显示隐藏的效果
		if ($rootScope.collapsed) {
			//如果这个值为true,表示显示
			
		}else{
			//这个值为false,表示隐藏
			
		}
	}
}]);