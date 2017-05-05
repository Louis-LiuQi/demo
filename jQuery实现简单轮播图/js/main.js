$(document).ready(function() {
	var length,
		currentIndex = 0,
		interval,
		hasStarted = false, //是否已经开始轮播
		t = 3000; //轮播时间间隔
		length = $('.slider-panel').length;
	$(".slider-panel:not(:first)").hide();
	$(".slider-item:first").addClass("slider-item-selected");
	$(".slider-page").hide();
	$('.slider-panel,.slider-pre,.slider-next').hover(function() {
		stop();
		$(".slider-page").show();
	},function () {
		start();
		$(".slider-page").hide();
	})
	$(".slider-pre").click(function () {
		$(".slider-panel").finish();
		prev();
		return false;
	});
	$(".slider-next").click(function () {
		$(".slider-panel").finish();
		next();
		return false;
	});
	$(".slider-item").hover(function () {
		stop();
		$(".slider-panel").finish();
		var preIndex = $(".slider-item").filter(".slider-item-selected").index();
			currentIndex = $(this).index();
			if (preIndex != currentIndex) {
				play(preIndex,currentIndex);
			}
	},function () {
		start();
	});
	function prev() {
		var preIndex = currentIndex;
		currentIndex = --currentIndex % length;
		play(preIndex,currentIndex);
	}
	function next() {
		var preIndex = currentIndex;
		currentIndex = ++currentIndex % length;
		play(preIndex,currentIndex);
	}
	function play(preIndex,currentIndex) {
		$(".slider-panel").eq(preIndex).fadeOut(500);
		$(".slider-panel").eq(currentIndex).fadeIn(1000);
		$(".slider-item").removeClass("slider-item-selected");
		$(".slider-item").eq(currentIndex).addClass("slider-item-selected");
	}
	function start() {
		if (!hasStarted) {
			hasStarted = true;
			interval = setInterval(next, t)
		}
	}
	function stop() {
		clearInterval(interval);
		hasStarted = false;
	}
	start();
	
});