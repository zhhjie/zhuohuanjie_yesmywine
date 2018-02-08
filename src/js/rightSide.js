/* 
* @Author: Marte
* @Date:   2018-02-07 10:43:20
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 20:12:27
*/

;(function($){
    $('.rightSide').height($(window).outerHeight());
    $('.rightSide').animate({right:0},1000);
    $('.car').mouseover(function(){console.log(555)
        $('.carInfo').css('display','block');
    }).mouseout(function(){
        $('.carInfo').css('display','none');
    })

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
            console.log(res.count);
            $('.goodscount').text(res.count);console.log($('.goodscount'));

            $('.btn-remove').click(function(event) {
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