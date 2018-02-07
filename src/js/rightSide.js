/* 
* @Author: Marte
* @Date:   2018-02-07 10:43:20
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 12:12:06
*/

;(function($){
    $('.rightSide').height($(window).outerHeight());
    $('.rightSide').animate({right:0},1000);
    $('.car').mouseover(function(){console.log(555)
        $('.carInfo').css('display','block');
    }).mouseout(function(){
        $('.carInfo').css('display','none');
    })
})(jQuery);