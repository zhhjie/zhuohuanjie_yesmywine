/* 
* @Author: Marte
* @Date:   2018-02-09 11:07:55
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 15:20:20
*/

;(function($){
    console.log($('1111'));
    $('.content').focus(function(){
        this.placeholder='';
        $(this).css({
            'background':'#fff',
            'color':'#333',
        });

    }).blur(function(event) {
        /* Act on the event */
        this.placeholder='输入您要查找的商品名称';
        $(this).css({
            'background':'#F4F1F0',
            'color':'#ccc',
        });
    });
    console.log($('.head_r i'))
    $.ajax({
        url: '../api/shopcar.php',
        dataType: 'json',
        success:function(data){
            $('.head_r i').text(data.count);
        }
    })
})(jQuery);