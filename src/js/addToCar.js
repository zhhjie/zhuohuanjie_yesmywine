/* 
* @Author: Marte
* @Date:   2018-02-08 12:07:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 15:12:51
*/
    function addToCart(ele){
        var $img = ele;
        var _left = $img.offset().left;
        var _top = $img.offset().top;
        
        var $car = $('.car');
        var target_left = $car.offset().left;
        var target_top = $car.offset().top;
        var $copyImg = $img.clone().appendTo($('body'));
        $copyImg.css({
            'position':'absolute',
            'left':_left,
            'top':_top
        })
        $copyImg.animate({
            left: target_left,
            top: target_top,
            width:20,
            height:20},1000,function() {
            /* stuff to do after animation is complete */
                $copyImg[0].parentNode.removeChild($copyImg[0]);
        });        
    }
    
