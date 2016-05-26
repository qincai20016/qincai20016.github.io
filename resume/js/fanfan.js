// JavaScript Document
$(function(){
	
	$(".fan_moon").addClass("animated zoomInUp").show();
	setTimeout(function(){
		$(".fan_Tables").addClass("animated rubberBand").show();
		
		},1000);
		setTimeout(function(){
		$(".fan_people").addClass("animated tada").show();
		
		},1800);
		setTimeout(function(){
		$(".fan_name").addClass("animated fadeInLeftBig").show();
		
		},2400);
		setTimeout(function(){
		$(".fan_gg_text").addClass("animated bounceInRight").show();
		
		},2800);
		setTimeout(function(){
		$(".fan_goLook").addClass("animated zoomInDown").show();
		
		},3400);
		
		/*点击换图*/
		
		$(".fan_people ").hover(function(){
			$(".fan_people ").addClass("fan_people2 ");
			});
		$(".fan_people ").mouseleave(function(){
			
			$(".fan_people ").removeClass("fan_people2");
			
			});
		$(".fan_netMod ").hover(function(){
			$(".fan_netMod ").addClass("fan_netMod2 ");
			});
		$(".fan_netMod ").mouseleave(function(){
			
			$(".fan_netMod ").removeClass("fan_netMod2");
			
			});
		$(".fan_shareMod ").hover(function(){
			$(".fan_shareMod ").addClass("fan_shareMod2 ");
			});
		$(".fan_shareMod ").mouseleave(function(){
			
			$(".fan_shareMod ").removeClass("fan_shareMod2");
			
			});
		
	
	
	})