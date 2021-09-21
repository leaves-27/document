  class Base {
  	static url = "http://d.2dfire.com";
  	static global_web_name = "/weixin/";

  	getWindowHeight(){
			return $(window).height();
		}
		getContentWidth(){
			return $(window).width();
		}
		getContentHeight(){
			return $(document).height();
		},
		setBottomBackground(){
			if($(".bottom_background").height() < global_window_height) {
			  $(".bottom_background").height(global_window_height);
			}
		}
  }


 class SessionState //用来进行缓存的一套机制


 class storage //SessionState的存取方法


 class Utils { 
 		getQueryParam //从url中获取参数
 		isBlackStr //判断是否非字符串
 }

 class String{
 	indexOf:判断字符串是否是以某个字符串开头
 }

 class cookie{} 对存取cookie的方法进行扩展

 // 声明了哪些全局变量
 // 声明了哪些全局方法
 // 执行了哪些动作













