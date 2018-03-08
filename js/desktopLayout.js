var resolucao = $(window).width() > 800 ? 'desktop' : 'mobile';
$(window).resize(function(){
    resolucao = $(window).width() > 800 ? 'desktop' : 'mobile';
    console.log(resolucao);
});

function goSlide1Base() {

	// MAIN SLIDER ANIMATIONS

	$('#slider1').stop().animate({
		"margin-left":"0"
	}, 1000);
	$('#slider2').stop().animate({
		"margin-left":"100%"
	}, 1000);
	$('#slider3').stop().animate({
		"margin-left":"200%"
	}, 1000);
	$('#slider4').stop().animate({
		"margin-left":"300%"
	}, 1000);

	// NAV BAR

	$('#btsMask img, #btLeftSlide').css({
		"display":"none"
	});
	$('#btRightSlide, #btMask1 img').css({
		"display":"block"
	});

	// SLIDE 2

	$('#machine').stop().animate({
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
	$('#hills, #mainTextSlide4, #saiRodada').stop().fadeOut(500);

}

function goSlide2Hoven() {

	// MAIN SLIDER ANIMATIONS

	$('#slider1').stop().animate({
		"margin-left":"-100%"
	}, 1000);
	$('#slider2').stop().animate({
		"margin-left":"0"
	}, 1000);
	$('#slider3').stop().animate({
		"margin-left":"100%"
	}, 1000);
	$('#slider4').stop().animate({
		"margin-left":"200%"
	}, 1000);

	// NAV BAR

	$('#btsMask img').css({
		"display":"none"
	});
	$('#btLeftSlide, #btRightSlide, #btMask2 img').css({
		"display":"block"
	});

	// SLIDE 2

	$('#machine').stop().animate({
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
	$('#hills, #mainTextSlide4, #saiRodada').stop().fadeOut(500);


}

function goSlide3Pizzas() {

	if ($('#btMask2 img').css("display") == "block") {

		// bikeCanvas ANIMATION

		$('#bikeCanvas').fadeIn(0);
		$('#bikeCanvas').stop().animate({
			"right":-($(window).width() + $('#bikeCanvas').width())
		}, 3*$(window).width() + $('#bikeCanvas').width(), function() {
			$('#bikeCanvas').css({
				"right":"5%",
				"display":"none"
			});

			// MAIN SLIDER ANIMATIONS

			$('#slider1').stop().animate({
				"margin-left":"-200%"
			}, 1000);
			$('#slider2').stop().animate({
				"margin-left":"-100%"
			}, 1000);
			$('#slider3').stop().animate({
				"margin-left":"0"
			}, 1000);
			$('#slider4').stop().animate({
				"margin-left":"100%"
			}, 1000);

			// NAV BAR

			$('#btsMask img').css({
				"display":"none"
			});
			$('#btLeftSlide, #btRightSlide, #btMask3 img').css({
				"display":"block"
			});

			// SLIDE 2

			$('#machine').stop().animate({
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

		});

	}
	else {

		// MAIN SLIDER ANIMATIONS

		$('#slider1').stop().animate({
			"margin-left":"-200%"
		}, 1000);
		$('#slider2').stop().animate({
			"margin-left":"-100%"
		}, 1000);
		$('#slider3').stop().animate({
			"margin-left":"0"
		}, 1000);
		$('#slider4').stop().animate({
			"margin-left":"100%"
		}, 1000);

		// NAV BAR

		$('#btsMask img').css({
			"display":"none"
		});
		$('#btLeftSlide, #btRightSlide, #btMask3 img').css({
			"display":"block"
		});

		// SLIDE 2

		$('#machine').stop().animate({
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
	}

}

function goSlide4Share() {

	// MAIN SLIDER ANIMATIONS

	$('#slider1').stop().animate({
		"margin-left":"-300%"
	}, 1000);
	$('#slider2').stop().animate({
		"margin-left":"-200%"
	}, 1000);
	$('#slider3').stop().animate({
		"margin-left":"-100%"
	}, 1000);
	$('#slider4').stop().animate({
		"margin-left":"0"
	}, 1000);

	// NAV BAR

	$('#btsMask img, #btRightSlide').css({
		"display":"none"
	});
	$('#btLeftSlide, #btMask4 img').css({
		"display":"block"
	});

	// SLIDE 2

	$('#machine').stop().animate({
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
	$('#hills, #mainTextSlide4, #saiRodada').stop().delay(1800).fadeIn(500);

}


function phrasesMarginsRandomSLide1() {

	function getRandMargin() {
		var marginsSlide = ["0 -300px", "300px 0", "0 300px", "-300px 0"];
		var randMarginsSlide = marginsSlide[Math.floor(Math.random() * marginsSlide.length)];
		return randMarginsSlide;
	}

	$('#clouds2 div img:gt(0)').each(function() {

		$(this).css({
			"margin": getRandMargin(),
			"opacity":"0"
		});

	});

	setInterval(function() {

		$('#clouds2 div img:eq(0)')
			.animate({"margin": getRandMargin(),"opacity":"0"}, 200)
			.next()
			.animate({"margin": "25px 0 0 0","opacity":"1"}, 500)
			.end()
			.appendTo('#clouds2 div');

	},  2500);

}

function logoAnimation() {

	var logoMargin = $('.sliderContainer').offset().left;

	$('#logo').css({
		"left":logoMargin + 20
	});

	$(window).resize(function() {

		$('#logo').css({
			"left":logoMargin + 20
		});
	});

	$(window).scroll(function() {

	    if ($(document).scrollTop() > $('#pageZero').height()-100){
	        $('ul li:eq(0)').addClass('active');
	        $('#logo img').stop().animate({
	        	"height":"0"
	        }, 100);
	        $('#logoToUp img').stop().animate({
	        	"height":"110px"
	        }, 100, function() {
	        	$('#logoToUp').stop().animate({
	            	"top":"55px"
	            }, 100);
	        });
	    }
	    else {
	    	$('ul li:eq(0)').removeClass('active');
	    	$('#logo img').stop().animate({
	        	"height":"110px"
	        }, 100)
	        $('#logoToUp img').stop().animate({
	        	"height":"0"
	        }, 100, function() {
	        	$('#logoToUp img').stop().animate({
	            	"top":"55px"
	            }, 100);
	        });
	    }

	});
	
}

function navBarSlider() {
	
	$('#bt1, #logo').click(function(){
		goSlide1Base();
	});

	$('#bt2').click(function(){
		goSlide2Hoven();
	});

	$('#bt3').click(function(){
		goSlide3Pizzas();
	});

	$('#bt4').click(function(){
		goSlide4Share();
	});

}

function arrowsLeftRightSlide() {

	$('#btRightSlide').click(function() {
		if($('#btMask1 img').css("display") == "block") {
			goSlide2Hoven();
		}

		else if ($('#btMask2 img').css("display") == "block") {
			goSlide3Pizzas();
		}

		else if ($('#btMask3 img').css("display") == "block") {
			goSlide4Share();
		}

	});

	$('#btLeftSlide').click(function() {
		if($('#btMask2 img').css("display") == "block") {
			goSlide1Base();
		}

		else if ($('#btMask3 img').css("display") == "block") {
			goSlide2Hoven();
		}

		else if ($('#btMask4 img').css("display") == "block") {
			goSlide3Pizzas();
		}
	});

}

function navBarAnimation() {

		$('#bts div[id^="bt"]').mouseenter(function() {

		$('#hoverLayer').css({
			"display":"block"
		});

		var pos = $(this).position();
		var marginLeft = pos.left;

		$('#hoverLayer').stop().animate({
			"margin-left":marginLeft
		}, 300);

		if (marginLeft == 0) {
			$('#hoverLayer').css({
				"background-image" : "url('imgs/nav/1.png')",
				"background-size" : "100% 100%",
				"background-position" : "center center",
				"background-repeat" : "no-repeat",
				"width":"156px"
			});
		}
		else if (marginLeft == 156) {
			$('#hoverLayer').css({
				"background-image" : "url('imgs/nav/2.png')",
				"background-size" : "100% 100%",
				"background-position" : "center center",
				"background-repeat" : "no-repeat",
				"width":"157px"
			});
		}
		else if (marginLeft == 313) {
			$('#hoverLayer').css({
				"background-image" : "url('imgs/nav/3.png')",
				"background-size" : "100% 100%",
				"background-position" : "center center",
				"background-repeat" : "no-repeat",
				"width":"156px"
			});
		}
		else if (marginLeft == 469) {
			$('#hoverLayer').css({
				"background-image" : "url('imgs/nav/4.png')",
				"background-size" : "100% 100%",
				"background-position" : "center center",
				"background-repeat" : "no-repeat",
				"width":"180px"
			});
		}
	});

	$('#bts').mouseleave(function() {
		if ($('#btMask1 img').css('display') == 'block') {
			$('#hoverLayer').css({
				"display":"none",
				"margin-left":"0"
			});
		}
		else if ($('#btMask2 img').css('display') == 'block') {
			$('#hoverLayer').css({
				"display":"none",
				"margin-left":"156px"
			});
		}
		else if ($('#btMask3 img').css('display') == 'block') {
			$('#hoverLayer').css({
				"display":"none",
				"margin-left":"313px"
			});
		}
		else if ($('#btMask4 img').css('display') == 'block') {
			$('#hoverLayer').css({
				"display":"none",
				"margin-left":"469px"
			});
		}
	});
}

function sizingAndRisizing() {

	$('#where1').height($('#where1').width() / 2);
	$('#where5').height($('#where5').width() / 5);
	$('#where6').height($('#where6').width());
	$('#pageZero').height($(window).height());
	$('#slide').height($('#pageZero').height());
	$('#where5 > div:nth-child(2) div').width($('#where5 > div:nth-child(2)'));
	$('#slide > div:gt(0)').css({
		"margin-top":-($('#slide').height())
	});
	$('#map').css({
		"margin-top":-480+$('#where1').height(),
		"height":160-$('#where1').height()+480
	});
	$('#where3').css({
		"margin-top":-640+$('#where1').height(),
		"height":160-$('#where1').height()+640
	});

	$(window).resize(function() {
		$('#where1').height($('#where1').width() / 2);
		$('#where5').height($('#where5').width() / 5);
		$('#where6').height($('#where6').width());
		$('#pageZero').height($(window).height());
		$('#slide').height($('#pageZero').height());
		$('#where5 > div:nth-child(2) div').width($('#where5 > div:nth-child(2)'));
		$('#slide > div:gt(0)').css({
			"margin-top":-($('#slide').height())
		});
		$('#map').css({
			"margin-top":-480+$('#where1').height(),
			"height":160-$('#where1').height()+480
		});
		$('#where3').css({
			"margin-top":-640+$('#where1').height(),
			"height":160-$('#where1').height()+640
		});
	});

}

function scrollEvents() {

	$('html, body').stop().animate({
	    scrollTop: 0
	}, 1000);

	$('#logoToUp').click(function() {
	    $('html, body').stop().animate({
	        scrollTop: $("#pageZero").offset().top
	    }, 1000);
	});

	$(document).on("click", "#arrowSlide4, ul li:eq(0)", function() {
	    $('html, body').stop().animate({
	        scrollTop: $("#wrapperWhere").offset().top
	    }, 1000, function() {
	    	$('body').css({
				"overflow-y": "visible"
			});
	    });
	});

}

function contactFancyBox() {

	var hideOverflow = false;
	$('ul li:eq(2), #closeFancy').click(function() {
	    $('#fancyTalkToUs').fadeToggle(300);

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

function navSlider3HoverPhrase() {

	$('#cmState1').mouseenter(function() {
		$('#cmState1 img:eq(0)').stop().fadeOut(100, function() {
			$('#cmState1 img:eq(1)').stop().fadeIn(100);
		});
	});

	$('#cmState1').mouseleave(function() {
		$('#cmState1 img:eq(1)').stop().fadeOut(100, function() {
			$('#cmState1 img:eq(0)').stop().fadeIn(100);
		});
	});

}

function pizzasSlider3Animations() {

	$('#btsSlide3 > div:first-child img:first-child').click(function() {
		$('#pizza img:eq(0)').stop().delay(200).fadeIn(200);
		$('#pizza img:eq(1)').stop().fadeOut(200);
		$('#pizza img:eq(2)').stop().fadeOut(200);
		$('#textRight img:eq(0)').stop().delay(200).fadeIn(200);
		$('#textRight img:eq(1)').stop().fadeOut(200);
		$('#textRight img:eq(2)').stop().fadeOut(200);

		$('#btsSlide3 > div img:first-child').stop().animate({
			"margin-top":"0"
		},100);
		$('#btsSlide3 > div img:nth-child(2)').stop().animate({
			"margin-top":"-26px"
		},100);
		$(this).stop().animate({
			"margin-top":"7px"
		},100);
		$(this).parent('#btsSlide3 > div').find('img:nth-child(2)').stop().animate({
			"margin-top":"-33"
		},100);

	});

	$('#btsSlide3 > div:nth-child(2) img:first-child').click(function() {
		$('#pizza img:eq(0)').stop().fadeOut(200);
		$('#pizza img:eq(1)').stop().delay(200).fadeIn(200);
		$('#pizza img:eq(2)').stop().fadeOut(200);
		$('#textRight img:eq(0)').stop().fadeOut(200);
		$('#textRight img:eq(1)').stop().delay(200).fadeIn(200);
		$('#textRight img:eq(2)').stop().fadeOut(200);
		$('#btsSlide3 > div img:first-child').stop().animate({
			"margin-top":"0"
		},100);
		$('#btsSlide3 > div img:nth-child(2)').stop().animate({
			"margin-top":"-26px"
		},100);
		$(this).stop().animate({
			"margin-top":"7px"
		},100);
		$(this).parent('#btsSlide3 > div').find('img:nth-child(2)').stop().animate({
			"margin-top":"-33"
		},100);

	});

	$('#btsSlide3 > div:nth-child(3) img:first-child').click(function() {
		$('#pizza img:eq(0)').stop().fadeOut(200);
		$('#pizza img:eq(1)').stop().fadeOut(200);
		$('#pizza img:eq(2)').stop().delay(200).fadeIn(200);
		$('#textRight img:eq(0)').stop().fadeOut(200);
		$('#textRight img:eq(1)').stop().fadeOut(200);
		$('#textRight img:eq(2)').stop().delay(200).fadeIn(200);

		$('#btsSlide3 > div img:first-child').stop().animate({
			"margin-top":"0"
		},100);
		$('#btsSlide3 > div img:nth-child(2)').stop().animate({
			"margin-top":"-26px"
		},100);
		$(this).stop().animate({
			"margin-top":"7px"
		},100);
		$(this).parent('#btsSlide3 > div').find('img:nth-child(2)').stop().animate({
			"margin-top":"-33"
		},100);
	});

}

function slide4Slider() {

	$("#photosSlide4 > div:eq(0) img:gt(0)").fadeOut(0);
	$("#photosSlide4 > div:eq(1) img:gt(0)").fadeOut(0);
	$("#photosSlide4 > div:eq(2) img:gt(0)").fadeOut(0);

	setInterval(function() { 
		$('#photosSlide4 > div:eq(0) img:eq(0)').fadeOut(800).next().fadeIn(300).end().appendTo('#photosSlide4 > div:eq(0)');
		$('#photosSlide4 > div:eq(1) img:eq(0)').fadeOut(800).next().fadeIn(300).end().appendTo('#photosSlide4 > div:eq(1)');
		$('#photosSlide4 > div:eq(2) img:eq(0)').fadeOut(800).next().fadeIn(300).end().appendTo('#photosSlide4 > div:eq(2)');
	},  4000);

}

function slide4ArrowEffect() {

	$('#arrowSlide4').mouseenter(function(){
		$(this).stop().animate({
			"bottom":"70px"
		}, 500, function(){
			$(this).stop().animate({
				"bottom":"80px"
			}, 500)
		});
	});

}

function runSiteDesktop() {

		phrasesMarginsRandomSLide1();
		pizzasSlider3Animations();
		navSlider3HoverPhrase();
		arrowsLeftRightSlide();
		sizingAndRisizing();
		slide4ArrowEffect();
		navBarAnimation();
		contactFancyBox();
		logoAnimation();
		navBarSlider();
		scrollEvents();
		slide4Slider();

}

$(document).ready(function() {
	runSiteDesktop();
});