$(document).ready(function () {
			var num1 = 0;
			var temp;
			var interval;
			$(".item ul li:first").addClass("item_select");
			$(".box,.next,.pre").hover(function () {
				stop();
				$(".next,.pre").show();
			},function () {
				star();
				$(".next,.pre").hide();
			});
			$(".item ul li").hover(function () {
				$(".box div").finish();
				stop();
				temp = $(".item ul li").filter(".item_select").index();
				num1 = $(this).index();
				if (temp !== num1) {
					$(".box div").eq(temp).css("left",0).animate({left:700});
					$(".box div").eq(num1).css("left",-700).animate({left:0});
				$(".item ul li").eq(temp).removeClass("item_select");
				$(".item ul li").eq(temp).css("background-color","gray");
				$(".item ul li").eq(num1).addClass("item_select");}
				$(".item ul li").eq(num1).css("background-color","#fb6d0f");
			},function () {
				star();
			});
			function next() {
				$(".box div").finish();
					temp = num1;
					num1++;
					if (num1>4) {
						num1 = 0;
					}
					$(".box div").eq(temp).animate({left:700});
					$(".box div").eq(num1).css("left",-700).animate({left:0});
					$(".item ul li").eq(temp).removeClass("item_select");
					$(".item ul li").eq(num1).addClass("item_select");
					$(".item ul li").eq(temp).css("background-color","gray");
					$(".item ul li").eq(num1).css("background-color","#fb6d0f");
			};
			function pre() {
				$(".box div").finish();
					temp = num1;
					num1--;
					if (num1==-1) {
						num1 = 4;
					}
					$(".box div").eq(temp).animate({left:-700});
					$(".box div").eq(num1).css("left",700).animate({left:0});
					$(".item ul li").eq(temp).removeClass("item_select");
					$(".item ul li").eq(num1).addClass("item_select");
					$(".item ul li").eq(temp).css("background-color","gray");
					$(".item ul li").eq(num1).css("background-color","#fb6d0f");
			};
			$(".next").unbind("click");
			$(".next").bind("click",function () {
				next();
				return false;
			});
			$(".pre").unbind("click");
			$(".pre").bind("click",function () {
				pre();
				return false;
			});
			function star() {
				interval = setInterval(next,3000);
			}
			function stop() {
				clearInterval(interval);
			}
			star();
		});