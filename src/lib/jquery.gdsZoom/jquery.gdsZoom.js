;(function($){
	$.fn.gdsZoom = function(options){
		// 默认值
		var defaults = {
			// 放大区域的宽高
			width:400,
			height:300,

			// 显示位置
			position:'right',//left,top,bottom,right

			// 小图与大图的间距
			gap:15
		}

		return this.each(function(){
			var opt = $.extend({},defaults,options);

			var $small = $(this);

			var $smallImg = $small.find('img');

			// 添加特定类
			// 设置样式
			$small.addClass('gds-zoom');

			init();


			// 获取/创建节点
			// 绑定事件
			function init(){
				// 创建大图区域
				var $big = $('<div/>').addClass('gds-zoom-big');

				$big.css({
					width:opt.width,
					height:opt.height
				});

				// 大图位置
				var left,top;
				if(opt.position === 'right'){
					left = $small.offset().left + $small.outerWidth() + opt.gap;
					top = $small.offset().top;
				}else if(opt.position === 'left'){
					left = $small.offset().left - opt.width - opt.gap;
					top = $small.offset().top;
				}else if(opt.position === 'top'){
					left = $small.offset().left;
					top = $small.offset().top - opt.height - opt.gap;
				}else if(opt.position === 'bottom'){
					left = $small.offset().left;
					top = $small.offset().top + $small.outerHeight() + opt.gap;
				}

				$big.css({
					left:left,
					top:top
				});


				// 创建大图
				var $bigImg = $('<img/>').attr('src',$smallImg.attr('data-big') || $smallImg[0].src);

				$bigImg.css({width:opt.width,height:opt.height})
				// 大图写入$big
				$bigImg.appendTo($big);

				// 写入页面
				$big.appendTo('body');


				// 创建放大镜
				var $minzoom = $('<span/>').addClass('minzoom');
				$minzoom.appendTo($small);

				// 大图与小图的比例
				// 元素必须显示（且加载完成）才可以获取宽高
				var ratio;

				// 鼠标移入移除
				$small.on('mouseenter',function(){
					// $bigImg.attr('src',$smallImg.attr('data-big') || $smallImg[0].src);
					$minzoom.show();
					$big.show();
					
					// 计算比例
					ratio = $bigImg.outerWidth()/$smallImg.outerWidth();

					// 设置放大镜的大小
					// 与大图区域成比例
					$minzoom.css({
						width:opt.width/ratio,
						height:opt.height/ratio
					});

				}).on('mouseleave',function(){
					$big.hide();
					$minzoom.hide();
				}).on('mousemove',function(e){
					var left = e.pageX - $small.offset().left - $minzoom.outerWidth()/2;
					var top = e.pageY - $small.offset().top - $minzoom.outerHeight()/2;

					// 边界判断
					if(left<0){
						left = 0;
					}else if(left > $smallImg.innerWidth()-$minzoom.outerWidth()){
						left = $smallImg.innerWidth()-$minzoom.outerWidth()
					}


					if(top < 0){
						top = 0;
					}else if(top > $smallImg.innerHeight()-$minzoom.outerHeight()){
						top = $smallImg.innerHeight()-$minzoom.outerHeight()
					}


					$minzoom.css({
						left:left,
						top:top
					});


					$bigImg.css({
						left:-left*ratio,
						top:-top*ratio
					})
				})

			}

		});
	}
})(jQuery);