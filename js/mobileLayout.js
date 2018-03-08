/*$(window).resize(function() {
if($(window).width() < 768 && $(window).width() > 480) {
	$('*').fadeOut(1000);
}
});*/
function contactFancyBoxMob() {

	var hideOverflow = false;
	$('#talkToUsMob, #closeFancyMob').click(function() {
	    $('#fancyTalkToUsMob').fadeToggle(300);

	    if(hideOverflow = !hideOverflow) {
		    $('nav').css({
		    	"background-color":"rgb(239, 52, 51)",
		    	"width":"95%",
		    	"border":"none"
		    });
		}
		else {
			$('nav').css({
		    	"background-color":"rgba(242, 125, 52, 0.95)",
		    	"width":"100%",
		    	"border-top": "2px solid rgb(243, 157, 56)"
		    });
		}

	});

}
function sizingAndRisizingMob() {
	$('#whereMob > div:nth-child(2)').height($('#whereMob > div:nth-child(2)').width()); // INSTAGRAM
	$('#whereMob > div:nth-child(3)').height($('#whereMob > div:nth-child(3)').width()*0.31);
	$('#whereMob > div:nth-child(4)').height($('#whereMob > div:nth-child(4) img').height()-5);
	$('#whereMob > div:nth-child(6) > div:first-child').height($('#whereMob > div:nth-child(6) > div:first-child').width()/2);
	$('#whereMob > div:nth-child(6) > div:nth-child(2)').height($('#whereMob > div:nth-child(6) > div:nth-child(2)').width());
	$('#slideMob').height($('#pageZero').height());
	$('#pageZero').height($(window).height());
	$('#slideMob > div:gt(0)').css({
		"margin-top":-($('#slide').height())
	});
	$('#pizzaMob').height($('#pizzaMob img:first-child').height());

	$(window).resize(function() {
		$('#whereMob > div:nth-child(2)').height($('#whereMob > div:nth-child(2)').width()); // INSTAGRAM
		$('#whereMob > div:nth-child(3)').height($('#whereMob > div:nth-child(3)').width()*0.31);
		$('#whereMob > div:nth-child(4)').height($('#whereMob > div:nth-child(4) img').height());
		$('#whereMob > div:nth-child(6) > div:first-child').height($('#whereMob > div:nth-child(6) > div:first-child').width()/2);
		$('#whereMob > div:nth-child(6) > div:nth-child(2)').height($('#whereMob > div:nth-child(6) > div:nth-child(2)').width());
		$('#slideMob').height($('#pageZero').height());
		$('#pageZero').height($(window).height());
		$('#slideMob > div:gt(0)').css({
			"margin-top":-($('#slide').height())
		});
		$('#pizzaMob').height($('#pizzaMob img:first-child').height());
	});

}

function goSlide1BaseMob() {

	// MAIN SLIDER ANIMATIONS

	$('#slider1Mob').stop().animate({
		"margin-left":"0"
	}, 1000);
	$('#slider2Mob').stop().animate({
		"margin-left":"100%"
	}, 1000);
	$('#slider3Mob').stop().animate({
		"margin-left":"200%"
	}, 1000);
	$('#slider4Mob').stop().animate({
		"margin-left":"300%"
	}, 1000);

	// NAV BAR

	$('#btsMaskMob img, #btLeftSlideMob img').css({
		"display":"none"
	});
	$('#btRightSlideMob img, #btMask1Mob img').css({
		"display":"block"
	});

	// SLIDE 2

	/*$('#machine').stop().animate({
		"left":"130%"
	}, 1300);
	$('#tree1').stop().animate({
		"left":"159%"
	}, 1300);
	$('#tree2').stop().animate({
		"left":"118%"
	}, 1300);
	$('#tableUse').stop().animate({
		"left":"175.5%"
	}, 1300);
	$('#tableEmpty').stop().animate({
		"left":"103%"
	}, 1300);
	$('#mainText').stop().fadeOut(600);
	$('#textAux1, #textAux2, #textAux3, #textAux4').stop().fadeOut(600);

	// SLIDE 3

	$('#pizza').stop().fadeOut(600);
	$('#textLeft, #textRight, #btsSlide3, #cmState1').stop().fadeOut(600);

	// SLIDE4

	$('#photosSlide4').stop().animate({
		"left":"53%",
		"opacity":"0"
	}, 600);
	$('#hills, #mainTextSlide4, #saiRodada').stop().fadeOut(500);*/

}

function goSlide2HovenMob() {

	// MAIN SLIDER ANIMATIONS

	$('#slider1Mob').stop().animate({
		"margin-left":"-100%"
	}, 1000);
	$('#slider2Mob').stop().animate({
		"margin-left":"0"
	}, 1000);
	$('#slider3Mob').stop().animate({
		"margin-left":"100%"
	}, 1000);
	$('#slider4Mob').stop().animate({
		"margin-left":"200%"
	}, 1000);

	// NAV BAR

	$('#btsMaskMob img').css({
		"display":"none"
	});
	$('#btLeftSlideMob img, #btRightSlideMob img, #btMask2Mob img').css({
		"display":"block"
	});

	// SLIDE 2

	/*$('#machine').stop().animate({
		"left":"30%"
	}, 1300);
	$('#tree1').stop().animate({
		"left":"59%"
	}, 1300);
	$('#tree2').stop().animate({
		"left":"18%"
	}, 1300);
	$('#tableUse').stop().animate({
		"left":"75.5%"
	}, 1300);
	$('#tableEmpty').stop().animate({
		"left":"3%"
	}, 1300);
	$('#mainText').stop().delay(1500).fadeIn(500);
	$('#textAux1, #textAux2, #textAux3, #textAux4').stop().delay(2000).fadeIn(500);

	// SLIDE3 

	$('#pizza').stop().fadeOut(600);
	$('#textLeft, #textRight, #btsSlide3, #cmState1').stop().fadeOut(600);

	// SLIDE4

	$('#photosSlide4').animate({
		"left":"53%",
		"opacity":"0"
	}, 600);
	$('#hills, #mainTextSlide4, #saiRodada').stop().fadeOut(500);*/


}

function goSlide3PizzasMob() {

	if ($('#btMask2 img').css("display") == "block") {

		// bikeCanvas ANIMATION

		/*$('#bikeCanvas').fadeIn(0);
		$('#bikeCanvas').stop().animate({
			"right":-($(window).width() + $('#bikeCanvas').width())
		}, 3*$(window).width() + $('#bikeCanvas').width(), function() {
			$('#bikeCanvas').css({
				"right":"5%",
				"display":"none"
			});*/

			// MAIN SLIDER ANIMATIONS

			$('#slider1Mob').stop().animate({
				"margin-left":"-200%"
			}, 1000);
			$('#slider2Mob').stop().animate({
				"margin-left":"-100%"
			}, 1000);
			$('#slider3Mob').stop().animate({
				"margin-left":"0"
			}, 1000);
			$('#slider4Mob').stop().animate({
				"margin-left":"100%"
			}, 1000);

			// NAV BAR

			$('#btsMaskMob img').css({
				"display":"none"
			});
			$('#btLeftSlideMob img, #btRightSlideMob img, #btMask3Mob img').css({
				"display":"block"
			});

			// SLIDE 2

			/*$('#machine').stop().animate({
				"left":"-70%"
			}, 1300);
			$('#tree1').stop().animate({
				"left":"-41%"
			}, 1300);
			$('#tree2').stop().animate({
				"left":"-82%"
			}, 1300);
			$('#tableUse').stop().animate({
				"left":"-24.5%"
			}, 1300);
			$('#tableEmpty').stop().animate({
				"left":"-97%"
			}, 1300);
			$('#mainText').stop().fadeOut(600);
			$('#textAux1, #textAux2, #textAux3, #textAux4').stop().fadeOut(600);

			// SLIDE3 

			$('#pizza').stop().delay(1000).fadeIn(500);
			$('#textLeft, #textRight, #btsSlide3, #cmState1').stop().delay(1600).fadeIn(500);

			// SLIDE4

			$('#photosSlide4').animate({
				"left":"53%",
				"opacity":"0"
			}, 600);
			$('#hills, #mainTextSlide4, #saiRodada').stop().fadeOut(500);

		});*/

	}
	else {

		// MAIN SLIDER ANIMATIONS

		$('#slider1Mob').stop().animate({
			"margin-left":"-200%"
		}, 1000);
		$('#slider2Mob').stop().animate({
			"margin-left":"-100%"
		}, 1000);
		$('#slider3Mob').stop().animate({
			"margin-left":"0"
		}, 1000);
		$('#slider4Mob').stop().animate({
			"margin-left":"100%"
		}, 1000);

		// NAV BAR

		$('#btsMaskMob img').css({
			"display":"none"
		});
		$('#btLeftSlideMob img, #btRightSlideMob img, #btMask3Mob img').css({
			"display":"block"
		});

		// SLIDE 2

		/*$('#machine').stop().animate({
			"left":"-70%"
		}, 1300);
		$('#tree1').stop().animate({
			"left":"-41%"
		}, 1300);
		$('#tree2').stop().animate({
			"left":"-82%"
		}, 1300);
		$('#tableUse').stop().animate({
			"left":"-24.5%"
		}, 1300);
		$('#tableEmpty').stop().animate({
			"left":"-97%"
		}, 1300);
		$('#mainText').stop().fadeOut(600);
		$('#textAux1, #textAux2, #textAux3, #textAux4').stop().fadeOut(600);

		// SLIDE3 

		$('#pizza').stop().delay(1000).fadeIn(500);
		$('#textLeft, #textRight, #btsSlide3, #cmState1').stop().delay(1600).fadeIn(500);

		// SLIDE4

		$('#photosSlide4').animate({
			"left":"53%",
			"opacity":"0"
		}, 600);
		$('#hills, #mainTextSlide4, #saiRodada').stop().fadeOut(500);*/
	}

}

function goSlide4ShareMob() {

	// MAIN SLIDER ANIMATIONS

	$('#slider1Mob').stop().animate({
		"margin-left":"-300%"
	}, 1000);
	$('#slider2Mob').stop().animate({
		"margin-left":"-200%"
	}, 1000);
	$('#slider3Mob').stop().animate({
		"margin-left":"-100%"
	}, 1000);
	$('#slider4Mob').stop().animate({
		"margin-left":"0"
	}, 1000);

	// NAV BAR

	$('#btsMaskMob img, #btRightSlideMob img').css({
		"display":"none"
	});
	$('#btLeftSlideMob img, #btMask4Mob img').css({
		"display":"block"
	});

	// SLIDE 2

	/*$('#machine').stop().animate({
		"left":"-70%"
	}, 1300);
	$('#tree1').stop().animate({
		"left":"-41%"
	}, 1300);
	$('#tree2').stop().animate({
		"left":"-82%"
	}, 1300);
	$('#tableUse').stop().animate({
		"left":"-24.5%"
	}, 1300);
	$('#tableEmpty').stop().animate({
		"left":"-97%"
	}, 1300);
	$('#mainText').stop().fadeOut(600);
	$('#textAux1, #textAux2, #textAux3, #textAux4').stop().fadeOut(600);

	// SLIDE3 

	$('#pizza').stop().fadeOut(600);
	$('#textLeft, #textRight, #btsSlide3, #cmState1').stop().fadeOut(600);

	// SLIDE4

	$('#photosSlide4').stop().delay(1000).animate({
		"left":"50%",
		"opacity":"1"
	}, 500);
	$('#hills, #mainTextSlide4, #saiRodada').stop().delay(1800).fadeIn(500);*/

}

function navBarSliderMob() {
	
	$('#bt1Mob, #logoMob').click(function(){
		goSlide1BaseMob();
	});

	$('#bt2Mob').click(function(){
		goSlide2HovenMob();
	});

	$('#bt3Mob').click(function(){
		goSlide3PizzasMob();
	});

	$('#bt4Mob').click(function(){
		goSlide4ShareMob();
	});

}

function arrowsLeftRightSlideMob() {

	$('#btRightSlideMob img').click(function() {
		if($('#btMask1Mob img').css("display") == "block") {
			goSlide2HovenMob();
		}

		else if ($('#btMask2Mob img').css("display") == "block") {
			goSlide3PizzasMob();
		}

		else if ($('#btMask3Mob img').css("display") == "block") {
			goSlide4ShareMob();
		}

	});

	$('#btLeftSlideMob img').click(function() {
		if($('#btMask2Mob img').css("display") == "block") {
			goSlide1BaseMob();
		}

		else if ($('#btMask3Mob img').css("display") == "block") {
			goSlide2HovenMob();
		}

		else if ($('#btMask4Mob img').css("display") == "block") {
			goSlide3PizzasMob();
		}
	});

}

function phrasesMarginsRandomSLide1Mob() {

	function getRandMarginMob() {
		var marginsSlideMob = ["50px 0", "-50px 0", "0 50px", "0 -50px"];
		var randMarginsSlideMob = marginsSlideMob[Math.floor(Math.random() * marginsSlideMob.length)];
		return randMarginsSlideMob;
	}

	$('#clouds2Mob img:gt(0)').each(function() {

		$(this).css({
			"margin": getRandMarginMob(),
			"opacity":"0"
		});

	});

	setInterval(function() {

		$('#clouds2Mob img:eq(0)')
			.animate({"margin": getRandMarginMob(),"opacity":"0"}, 200)
			.next()
			.animate({"margin": "0","opacity":"1"}, 500)
			.end()
			.appendTo('#clouds2Mob');

	},  2500);

}

function pizzasSlider3AnimationsMob() {

	$('#btsSlide3Mob > div:first-child img:first-child').click(function() {
		$('#pizzaMob img:eq(0)').stop().delay(200).fadeIn(200);
		$('#pizzaMob img:eq(1)').stop().fadeOut(200);
		$('#pizzaMob img:eq(2)').stop().fadeOut(200);
		$('#textRightMob img:eq(0)').stop().delay(200).fadeIn(200);
		$('#textRightMob img:eq(1)').stop().fadeOut(200);
		$('#textRightMob img:eq(2)').stop().fadeOut(200);

		$('#btsSlide3Mob > div img:first-child').stop().animate({
			"margin-top":"0"
		},100);
		$('#btsSlide3Mob > div img:nth-child(2)').stop().animate({
			"margin-top":"-26px"
		},100);
		$('#btsSlide3Mob > div:nth-child(2) img:nth-child(2)').stop().animate({
			"margin-top":"-33px"
		},100);
		$(this).stop().animate({
			"margin-top":"7px"
		},100);
		$(this).parent('#btsSlide3Mob > div:first-child').find('img:nth-child(2)').stop().animate({
			"margin-top":"-33"
		},100);

	});

	$('#btsSlide3Mob > div:nth-child(2) img:first-child').click(function() {
		$('#pizzaMob img:eq(0)').stop().fadeOut(200);
		$('#pizzaMob img:eq(1)').stop().delay(200).fadeIn(200);
		$('#pizzaMob img:eq(2)').stop().fadeOut(200);
		$('#textRightMob img:eq(0)').stop().fadeOut(200);
		$('#textRightMob img:eq(1)').stop().delay(200).fadeIn(200);
		$('#textRightMob img:eq(2)').stop().fadeOut(200);

		$('#btsSlide3Mob > div img:first-child').stop().animate({
			"margin-top":"0"
		},100);
		$('#btsSlide3Mob > div img:nth-child(2)').stop().animate({
			"margin-top":"-26px"
		},100);
		$(this).stop().animate({
			"margin-top":"7px"
		},100);
		$(this).parent('#btsSlide3Mob > div:nth-child(2)').find('img:nth-child(2)').stop().animate({
			"margin-top":"-40"
		},100);

	});

	$('#btsSlide3Mob > div:nth-child(3) img:first-child').click(function() {
		$('#pizzaMob img:eq(0)').stop().fadeOut(200);
		$('#pizzaMob img:eq(1)').stop().fadeOut(200);
		$('#pizzaMob img:eq(2)').stop().delay(200).fadeIn(200);
		$('#textRightMob img:eq(0)').stop().fadeOut(200);
		$('#textRightMob img:eq(1)').stop().fadeOut(200);
		$('#textRightMob img:eq(2)').stop().delay(200).fadeIn(200);

		$('#btsSlide3Mob > div img:first-child').stop().animate({
			"margin-top":"0"
		},100);
		$('#btsSlide3Mob > div img:nth-child(2)').stop().animate({
			"margin-top":"-26px"
		},100);
		$('#btsSlide3Mob > div:nth-child(2) img:nth-child(2)').stop().animate({
			"margin-top":"-33px"
		},100);
		$(this).stop().animate({
			"margin-top":"7px"
		},100);
		$(this).parent('#btsSlide3Mob > div:nth-child(3)').find('img:nth-child(2)').stop().animate({
			"margin-top":"-33"
		},100);
	});

}

function scrollEventsMob() {

	$('html, body').stop().animate({
	    scrollTop: 0
	}, 1000);

	$('#whereMob > div:first-child img:first-child').click(function() {
	    $('html, body').stop().animate({
	        scrollTop: $("#pageZeroMob").offset().top
	    }, 1000);
	});

	$(document).on("click", ".goDown", function() {
	    $('html, body').stop().animate({
	        scrollTop: $("#mapMob").offset().top
	    }, 1000, function() {
	    	$('body').css({
				"overflow-y": "visible"
			});
	    });
	});

	$(document).on("click", "#arrowSlide4Mob", function() {
	    $('html, body').stop().animate({
	        scrollTop: $("#whereMob").offset().top
	    }, 1000, function() {
	    	$('body').css({
				"overflow-y": "visible"
			});
	    });
	});

}

function slide4SliderMob() {

	$("#photosSlide4Mob img:gt(0)").fadeOut(0);
	setInterval(function() { 
		$('#photosSlide4Mob img:eq(0)').fadeOut(800).next().fadeIn(300).end().appendTo('#photosSlide4Mob');
	},  4000);

}

function logoAnimationMob() {

	$(window).scroll(function() {

	    if ($(document).scrollTop() > $('#pageZeroMob').height()-100){
	        $('#logoMob img').stop().animate({
	        	"height":"0"
	        }, 100);
	        $('#whereMob > div:first-child > div:first-child img').stop().animate({
	        	"height":"47px"
	        }, 100);
	    }
	    else {
	    	$('#logoMob img').stop().animate({
	        	"height":"47px"
	        }, 100)
	        $('#whereMob > div:first-child > div:first-child img').stop().animate({
	        	"height":"0"
	        }, 100);
	    }

	});
}

$(document).ready(function() {

	logoAnimationMob();
	sizingAndRisizingMob();
	navBarSliderMob();
	arrowsLeftRightSlideMob();
	scrollEventsMob();
	phrasesMarginsRandomSLide1Mob();
	contactFancyBoxMob();
	pizzasSlider3AnimationsMob();
	slide4SliderMob();

});