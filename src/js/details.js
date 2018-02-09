require(['config'],function(){
    require(['jquery'],function($){
        $('header').load('../html/header.html',function(){
            require(['header']);

            var $nav = $('.nav_l');
            var $h3 = $nav.find('h3');
            $h3.css('background','#624b40');
            $nav.children('ul').css({
                'display':'none',
            });

            $('.nav').css('background','#7E0001');

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

        var $prod_name = $('.prod-name');
        var $img = $('#current_img');
        var $pname = $('.pname');
        var $id = $('.temperature');
        var $price = $('.price');
        var gid = location.search.split('?')[1].split('=')[1];

        require(['rightSide'],function(){
            
            //添加到购物车
            $('.addCart').click(function(event) {
                
                require(['addToCar'],function(){
                    addToCart($('#current_img'));
                });
                var currentId = $id.text();

                var num = $('.goodscount').text()*1;

                $('.goodscount').text(num+1);
                $.ajax({
                    url: '../api/addToShopcar.php',
                    data: {
                        id:$id.text(),
                        goodsname:$pname.text(),
                        price:$price.find('strong').text(),
                        imgurl:$img[0].src.slice(22),
                        qty:$('.count').find('input').val(),
                         },
                    success:function(data){
                        console.log(data);


                        var $ul =$('.carInfo').find('ul');
                        var  html = 
                            '<a class="prod-info">'+
                                '<img width="60" height="98" alt="'+$pname.text()+'" src="../'+$img[0].src.slice(22)+'">'+
                                '<span class="name">'+$pname.text()+'</span>'+
                                 '<span class="price">'+
                                    '<strong>￥'+$price.find('strong').text()+'</strong>'+
                                     '× <em>'+($('.goodscount').text()*1)+'</em>'+
                                '</span>'+
                            '</a>'+ 
                            '<a title="从购物车移除松木双盒" class="btn-remove" href="javascript:void(0);">&times;'+
                            '</a>';
                        var $li = $('<li/>');
                        $li.attr('data-id',currentId);
                        $li.html(html);
                        

                        var $lis = $ul.find('li');
                        var len = $lis.length;
                        console.log($lis[0].dataset.id);
                        
                        for(var i = 0;i<len;i++){
                            if($lis[i].dataset.id == currentId){
                                $lis[i].parentNode.removeChild($lis[i]);

                            }
                        }
                        $li.appendTo($ul);
                        
                        console.log($('.carInfo ul').find('li'));




                    }
                });
            });
        });

        $.ajax({
            url: '../api/details.php',
            dataType: 'json',
            data: {id: gid},
            success:function(data){console.log(data)
                $prod_name .text(data.goodsname);
                $img[0].src = "../"+data.imgurl;
                $pname.text(data.goodsname);
                $id.text(gid);
                $('.commentCount').children('i').text(data.commentnum);
                $('.saleNum').children('i').text(data.salenum);
                $price.find('strong').text(data.price);
            }
        })
        
        $('.count').on('click','i',function(){
            var $this = $(this);
            if($this.hasClass('jian')){
                var $input = $this.next();
                var val = $input.val();
                val--;
                if(val<0){
                    val = 0;
                }
                $input.val(val);
            }
            if($this.hasClass('jia')){
                var $input = $this.prev();
                var val = $input.val();
                val++;
                $input.val(val);
            }
        })

        
        
        require(['gdsZoom'],function(){
            $('.jqzoom').gdsZoom({
                width:440,
                height:440,

            });
        })
    });
})