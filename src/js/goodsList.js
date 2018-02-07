/* 
* @Author: Marte
* @Date:   2018-02-05 19:44:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 12:13:01
*/
    
require(['config'],function(){
    require(['jquery'],function($){
        $('header').load('../html/header.html',function(){
            var $nav = $('.nav_l');
            var $h3 = $nav.find('h3');
            $h3.css('background','#624b40');
            $nav.children('ul').css({
                'display':'none',
            });

            $('.nav').css('background','#7E0001');

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