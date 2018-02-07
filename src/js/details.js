require(['config'],function(){
    require(['jquery'],function($){
        $('header').load('../html/header.html',function(){
            var $nav = $('.nav_l');
            var $h3 = $nav.find('h3');
            $h3.css('background','#624b40');
            $nav.children('ul').css({
                'display':'none',
            });
            $('.head_logo').find('img').eq(0).css('width','160px');
            $('.head_logo').find('a').eq(1).css('width','160px');
            $('.head_logo').find('a').eq(2).css('display','none');
            $('.nav_r').find('span').attr('style','padding:0 10px');
            
            $('.head_c').css('margin-left','0');

            $nav.mouseover(function(){
                $h3.css('background','#3f241f');
                $nav.children('ul').css('display','block');
                $nav.find('ul').css({
                    'background':'#624b40',
                    'color':'#ffffff',
                });
                $nav.find('a').css('color','#ffffff')
            }).mouseout(function(){
                $nav.css('background','#624b40');
                $nav.children('ul').css('display','none')
            })
        });
        $('footer').load('../html/footer.html');

        $('#side').load('../html/rightSide.html');

        require(['rightSide']);
    });
})