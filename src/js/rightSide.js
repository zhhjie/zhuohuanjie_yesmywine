/* 
* @Author: Marte
* @Date:   2018-02-07 10:43:20
* @Last Modified by:   Marte
<<<<<<< HEAD
* @Last Modified time: 2018-02-09 17:09:44
=======
* @Last Modified time: 2018-02-07 12:12:06
>>>>>>> a7ba35224e56c6920a38dbeefb3af62cbe0d6ad5
*/

;(function($){
    $('.rightSide').height($(window).outerHeight());
    $('.rightSide').animate({right:0},1000);

    $('.car').mouseover(function(e){
        
        $('.carInfo').css('display','block');
        
    }).mouseout(function(){
        $('.carInfo').css('display','none');
    })
    show();
    function show(){
        $.ajax({
            url: '../api/shopcar.php',
            dataType: 'json',
            success:function(res){
                var html = '';
                $.each(res.data, function(index, val) {
                     /* iterate through array or object */
                     
                     html+=getRender(val);
                     
                });
                $('.carInfo').find('ul').html(html);

                $('.goodscount').text(res.count);
                $('.prod_count').text(res.count);
                $('.btn-remove').click(function(event) {
                    event.stopPropagation();
                    /* Act on the event */
                    console.log(this)
                    var $this = $(this);
                    var $current = $this.closest('li');
                    var num = $('.goodscount').text();

                    $('.goodscount').text(num-1);
                    $current.remove();
                    var gid = $current.attr('data-id');console.log(gid)
                    $.ajax({
                        url: '../api/addToShopcar.php',
                        data: {
                            id:gid,
                            isdelete:true},
                        success:function(data){
                            console.log(data);
                            
                        }
                    })
                });
            }
        })
    }
    

    function getRender(item){
        return '<li data-id='+item.gid+'>'+
                    '<a class="prod-info">'+
                        '<img width="60" height="98" alt="'+item.goodsname+'" src="../'+item.imgurl+'">'+
                        '<span class="name">'+item.goodsname+'</span>'+
                         '<span class="price">'+
                            '<strong>￥'+item.price+'</strong>'+
                             '× <em>'+item.qty+'</em>'+
                        '</span>'+
                    '</a>'+ 
                    '<a title="从购物车移除松木双盒" class="btn-remove" href="javascript:void(0);">&times;'+
                    '</a>'+
                '</li>';
    }
    


})(jQuery);