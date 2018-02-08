;(function($){
    $.fn.carousel = function(options){

        var defaults = {
            width:320,
            height:320,
            autoplay:true,
            showbtn:false,
            duration:3000,
            index:0,
            type:'horizontal',
            marquee:true,
            page:true,
            pageIndex:0
        };

        return this.each(function(){

            var opt = $.extend({},defaults,options);

            opt.len = opt.imgs.length;console.log()
            var $this = $(this);
            var timer;
            if(opt.len>1 && opt.page == true){
                var $page = $('<ul/>').appendTo($this);
                $page.addClass('page');
                $page.css({
                    'left':'50%',
                    'bottom':10,
                    'margin-left':$page.width()/2,
                    'text-align':'center',
                    'line-height':'30px',
                })
                for(var i = 1;i<opt.len;i++){
                    var $li = $('<li/>').text(i).appendTo($page);
                    $li.css({
                        'width':'30',
                        'height':'30',
                        'border-radius':'50%',
                        'margin-right':'5px'
                    })
                }
                $page.children().eq(0).addClass('active');
                $page.on('mouseenter','li',function(e){
                    $ul.stop();
                    opt.pageIndex = $(this).text()-1;
                    $page.find('li').eq(opt.pageIndex).addClass('active').siblings('li').removeClass('active');
                    var target = -opt.pageIndex*opt.width;
                    $ul.animate({left:target},2000);
                    e.preventDefault();
                })
            }


            
            $this.css({
                width:opt.width,
                height:opt.height
            })
            $this.addClass('carousel');

            var $ul

            init();

            $this.on('mouseenter',function(){
                clearInterval(timer);
            }).on('mouseleave',function(){
                timer = setInterval(function(){
                    opt.index ++;
                    opt.pageIndex++;
                    show();
                }, opt.duration)
            }).trigger('mouseleave');
            function init(){
                $ul = $('<ul/>');
                $ul.addClass('clearfix');
                var html = $.map(opt.imgs,function(item){
                    return `<li class='fl'><a href="#"><img src="${item}"></img></a></li>`
                })
                $ul.html(html).appendTo($this);
                $ul.css(
                    'width',opt.len*opt.width,
                );

            }

            function show(){
                if(opt.index<0){
                    opt.index = opt.len-1;
                    opt.pageIndex = index;
                }else if(opt.index>=opt.len){
                    $ul.css('left',0);
                    opt.index = 1;
                }
                if(opt.index>=opt.len-1){
                    opt.pageIndex = 0;
                }

                $page.find('li').eq(opt.pageIndex).addClass('active').siblings('li').removeClass('active');
                var target = -opt.index*opt.width;
                $ul.animate({left:target},2000);
            }

        });
    }
})(jQuery);