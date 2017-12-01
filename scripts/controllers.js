//该文件用于存放控制器
//创建一个独立的模块,该模块的作用就是创建不同的控制器,
//方便其他模块之间使用
angular.module("Ctrls",[])
//创建控制器navs,模拟导航栏数据
.controller("navs",["$scope",function($scope){
	$scope.navs = [
		{"href":"#/index","icon":"icon-home","text":"今日一刻"},
		{"href":"#/older","icon":"icon-file-empty","text":"往期内容"},
		{"href":"#/author","icon":"icon-pencil","text":"热门作者"},
		{"href":"#/category","icon":"icon-menu","text":"栏目浏览"},
		{"href":"#/favourite","icon":"icon-heart","text":"我的喜欢"},
		{"href":"#/settings","icon":"icon-cog","text":"设置"}
	];
}])

//index 控制器
.controller("indexCtrl",["$scope","$rootScope","$filter","$http",function($scope,$rootScope,$filter,$http){
	$rootScope.num = 0;
	$scope.time=$filter("date")(new Date(),"yyyy-MM-dd");
	// var time=new Date();
	// $rootScope.timeStr=$filter("date")(time,"yyyy-MM-dd");
	$rootScope.title = "今日一刻";
	//显示加载图片
	$rootScope.loading=true;
	//发送请求
	$http({
		url:"./api/index.php",
		params:{time:$scope.time}
	}).then(function(data){
 		console.log(data.data.posts);
 		$scope.posts=data.data.posts;
 		//请求结束 获得数据后,加载图片消失
 		$rootScope.loading=false;
	})
}])
.controller("olderCtrl",["$scope","$rootScope","$filter","$http",function($scope,$rootScope,$filter,$http){
	$rootScope.num = 1;
	// var time=new Date();
	// time.setTime(time.getTime()-24*3600*1000);
	$rootScope.title = "往期内容";
	$rootScope.loading=true;
	//发送请求
	$http({
		url:"./api/older.php",
		//params:{time:$scope.time}
	}).then(function(data){
 		console.log(data.data[1].posts);
 		$scope.posts=data.data[1].posts;
 		$scope.time=data.data[0];
 		$rootScope.loading=false;
	})
}])