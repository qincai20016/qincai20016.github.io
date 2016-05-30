$(function(){
	//tab 切换
	$('.reg-tab').click(function(){
		var index=$(this).index();
		$('.reg-tab').removeClass('tab-active');
		$(this).addClass('tab-active');
		$('.reg-form').css("display","none");
		$('.reg-form').eq(index).css("display","block");
	})
})
