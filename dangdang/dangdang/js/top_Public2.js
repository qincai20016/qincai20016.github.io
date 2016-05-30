$(function(){
	//头部  我的当当
	$('.shopp_nav_05').on('mouseover',function(){
		$('.shopp_nav_05_ul').show();
		$('.shopp_nav_05').css({border:'1px solid gainsboro',background:'white'})
	})
	$('.shopp_nav_05').on('mouseout',function(){
		$('.shopp_nav_05_ul').hide();
		$('.shopp_nav_05').css({border:'none',background:'none'})
	})
	
	//头部企业采购
	$('.shopp_nav_06').on('mouseover',function(){
		$('.shopp_nav_06_ul').show();
		$('.shopp_nav_06').css({border:'1px solid gainsboro',background:'white'})
	})
	$('.shopp_nav_06').on('mouseout',function(){
		$('.shopp_nav_06_ul').hide();
		$('.shopp_nav_06').css({border:'none',background:'none'})
	})
	
	
	//头部客户服务
	$('.shopp_nav_07').on('mouseover',function(){
		$('.shopp_nav_07_ul').show();
		$('.shopp_nav_07').css({border:'1px solid gainsboro',background:'white'})
	})
	$('.shopp_nav_07').on('mouseout',function(){
		$('.shopp_nav_07_ul').hide();
		$('.shopp_nav_07').css({border:'none',background:'none'})
	})
	
	
	
	
	//头部导航
	$.ajax({
		type:"get",
		url:"js/top_Public.json",
		async:false,
		success:function(str){
			console.info(str);//返回所有的数据，包括以及菜单，二级菜单，三级菜单
			var navStair=str.navTitle;
			$.each(navStair, function(i,val) {
				var ul  = "<ul>";
				$.each(val.child, function(e,child) {
					var li= "<li>"+child.name+"</li>";
					ul+=li;
				});
				ul+= "</ul>";
				$('<span>'+val.name+'<div>'+ul+'</div></span>').appendTo('.top_nav')
				$('.top_nav span:eq(0)').attr('class','navFirst');
				$('.top_nav span:eq(0) ul').attr({'class':'navStairUl navStairUlhide'});
			});
			
			var navSecond = $('.top_nav span:eq(0) ul').find('li');
			console.info(navSecond);
			navSecond.hover(function(){
				var iFirst=$(this).parent().parent().parent().index();
				var iSecond = $(this).index();
				var thirdChild = navStair[iFirst].child[iSecond];
				if($(this).find('div').size()==0) {
						var div = "<div class='third_level'>";
						$.each(thirdChild.child, function(e,val) {
							var p = "<p>"+val+"</p>";
							div+=p;
						});
						div+="</div>";
						$(this).append(div);
					}
					$(this).find('div').show();
				
			},function(){
					$(this).find('div').hide();
				})
		}
	});
	
	//头部全部商品详细分类
	$('.navFirst').mouseover(function(){
		$('.navStairUl').css({'display':'block'});
	});
	$('.navFirst').on('mouseout',function(){
		$('.navStairUl').css({'display':'none'});
	});
	
})
