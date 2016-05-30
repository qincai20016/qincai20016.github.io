
$(function(){
/*---轮播图-----------*/
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    initialSlide :0,
	    autoplay : 5000,
		autoplayDisableOnInteraction : false
	});
	
/*---导航更多展开按钮-----------*/	
	$(".qla11").click(function(){
		$(".qul-show").show();
		$(".qul-hide").hide();
	});
	
	$(".qla12").click(function(){
		$(".qul-show").hide();
		$(".qul-hide").show();
	});

/*---倒计时-----------*/
	time();
	setInterval(time,1000);
	function time(){
		var now=new Date();
		var mingNian=new Date('2016/05/07 22:00:00');
		var zongMiaoshu=Math.floor((mingNian-now)/1000);
		/*var date=Math.floor(zongMiaoshu/(60*60*24));*/
		var hours=Math.floor(zongMiaoshu%(60*60*24)/(60*60));
		var minutes=Math.floor(zongMiaoshu%(60*60*24)%(60*60)/60);
		var seconds=Math.floor(zongMiaoshu%60);
		var msg=(hours<10?'0':'')+hours+":"+(minutes<10?'0':'')+minutes+":"+(seconds<10?'0':'')+seconds;
		var myTime=$('.cL-cdown');
		myTime.html('倒计时：'+msg);
	}

/*---展开更多-----------*/
	var page=0;
	$(".qyh-con-more").click(function(){
		$.ajax({
			type: "get",
			url: "data/data.json",
			async: true,
			success: function(str) {
				console.info(str);//返回的数据
				var dataStr = str;
				console.info(dataStr)
				var ul='<ul class="qyh-con">';
				$.each(dataStr, function(i, val) {
					var li = '<li><a href="javascript:;">'
							+'<img class="qyh-img" src="'+val.src+'" />'
							+'<div class="qyh-des">'
								+'<p>'+val.des+'</p>'
								+'<div class="des-person">'
									+'<img class="des-toux" src="'+val.toux+'"/>'
									+'<span class="des-nc">'+val.cn+'</span>'
									+'<span class="des-sex"><img src="'+val.sex+'"></span>'
									+'<span class="des-zan"><i class="iconfont zan-icf">&#xe600;</i>'+val.zan+'</span>'
								+'</div></div></a></li>';
					ul += li;
				});
					
					ul+="</ul>";
				$('.qyh-ul').append(ul);
			}
		});
		page++;
	});
	
	
	
})
