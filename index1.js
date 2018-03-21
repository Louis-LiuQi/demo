window.onload=function(){
	var num=1;
	var t;
	var interval;
	var w = window.document.body.clientWidth||document.documentElement.clientWidth||document.body.clientWidth;
	var bannerBox = document.getElementById("banner_box");
	var list = bannerBox.firstElementChild.innerHTML;
	var list2 = bannerBox.lastElementChild.innerHTML;
	var li = document.createElement("li");
	var li2 = document.createElement("li");
	li.innerHTML=list;
	li2.innerHTML=list2;
	bannerBox.appendChild(li);
	bannerBox.insertBefore(li2,bannerBox.firstElementChild);
	var banner_list = bannerBox.getElementsByTagName('li');
	var len = banner_list.length;
	var item = document.getElementsByClassName("item_list")[0];
	bannerInit();
	for (var i = 0; i < len-2; i++) {
		item.innerHTML+="<li></li>";
	}
	item.getElementsByTagName('li')[0].classList.add("select"); 
	bannerBox.style.transform = 'translateX(-' + num*w + 'px)';
	// window.addEventListener("resize",bannerInit);
	document.body.onresize= function(){
		bannerInit();
	}

	function bannerInit(){
		w = window.document.body.clientWidth||document.documentElement.clientWidth||document.body.clientWidth;
		bannerBox.style.width = w * len +"px";
		for(var i = 0;i<len;i++){
			banner_list[i].style.width = w+"px";
		}
	}

	function next(){
		if (num<len-1) {
			num++;
			bannerBox.style.transitionDuration = '1.5s';
			bannerBox.style.transform = 'translateX(-' + num*w + 'px)';
			if(num==len-1){
				item.getElementsByTagName('li')[0].classList.add("select");
				item.getElementsByTagName('li')[num-2].classList.remove("select");
			}else{
				for (var i = 0; i < len-2; i++) {
					if (i==num-1) {
						item.getElementsByTagName('li')[i].classList.add("select");
					}else{
						item.getElementsByTagName('li')[i].classList.remove("select");
					}
				}
			}
		}else{
			num=1;
			bannerBox.style.transitionDuration = '0s';
			bannerBox.style.transform = 'translateX(-' + num*w + 'px)';
			setTimeout(next,0);
		}
	}

	function stop(){
		clearInterval(interval);
	}
	function star(){
		interval = setInterval(next,4000);
	}
	star();
}





// $(document).ready(function() {

// 	// banner部分轮播代码

	

// 	// 头部子导航隐藏显示
// 	$(".nav_list>li").hover(function() {
// 		if (!$(".child_nav").is(':animated')) {
// 			// $(this).children('.child_nav').slideDown('fast');
// 			$(this).children('.child_nav').css('display', 'block');
// 		}
		
// 	}, function() {
// 		// $(this).children('.child_nav').slideUp('fast');
// 		$(this).children('.child_nav').css('display', 'none');
// 	});

	// 解决方案添加动画
	// $(".swiper-slide").hover(function() {
	// 	$(this).addClass('animated pulse');
	// }, function() {
	// 	$(this).removeClass('animated pulse');
	// });
	// $(".market_activities>ul>li>a").hover(function() {
	// 	$(this).children('img').addClass('animated flipInY');
	// }, function() {
	// 	$(this).children('img').removeClass('animated flipInY')
	// });
// });