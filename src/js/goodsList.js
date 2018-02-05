/* 
* @Author: Marte
* @Date:   2018-02-05 19:44:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-05 20:40:03
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
            $nav.mouseover(function(){
                $h3.css('background','#3f241f');
                $nav.children('ul').css('display','block');
                $nav.find('ul').css({
                    'background':'#624b40',
                    'color':'#ffffff',
                })
                $h3.find('a').css('color','#ffffff')
            }).mouseout(function(){
                $nav.css('background','#624b40');
                $nav.children('ul').css('display','none')
            })
        })
    })
})