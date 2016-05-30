$(function(){
	//<div class="swiper-slide">Slide 1<img src="img/banner_01.jpg"/></div>
	$.ajax({
		type:"get",
		async:true,
		url:"js/header.json",
		success:function(str){
			
			var strData=str.photo;
			console.info(strData);
			var pic='';
			$.each(strData,function(i,val){
				console.info(val.src);
				pic+='<div class="swiper-slide"><img src="'+val.src+'"/></div>'
			})
			console.info(pic);
			$("#big_banner").append(pic);
			
		}
	})
})
