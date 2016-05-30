;(function(){
	$.extend({
		alert:function(obj){ //这里的obj 为外部传递进来的参数>josn对象
			//创建模态框
			$('html,body').css({width:'100%',height:'100%'});
			
			//如果担心100%影响页面
			//1.获取当前的可视宽度,可视高度
			//2.把获取的宽度高度 赋值给蒙层
			//3.给body设置 样式  超出的滚动条做隐藏
			//4.在蒙层删除或隐藏的情况下 ，重新设置body的滚动条显示
			
			//1.蒙层
			var modal="<div class='modal alert_modal'></div>";
			$('body').append(modal);
			$('.modal').css({opacity:0.3});
			
			//2.弹出框的Div
			var alertDiv="<div class='alert_win'>"
			+"<p class='alert_win_title'>安全提示</p>"
			+"<div>"+obj.word+"</div>"
			+"<div><button id='sure'>我知道了</button></div>"
			+"</div>";
			$('body').append(alertDiv);
			//绑定回调函数
			$('#sure').click(function(){
				if (obj.sure) {obj.sure()};//如果有这个接口obj.sure ，就执行这个方法obj.sure()
				$(this).parent().parent().remove();
				$('.modal').remove();
			})
			$('#cancel').click(function() {
				if (obj.cancel) {obj.cancel()};
				$(this).parent().parent().remove();
				$('.modal').remove();
			})
		}
	});
})();
