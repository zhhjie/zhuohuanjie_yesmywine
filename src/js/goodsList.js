/* 
* @Author: Marte
* @Date:   2018-02-05 19:44:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 15:21:48
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
          
            require(['header']);

        });
        $('footer').load('../html/footer.html');

        $('#side').load('../html/rightSide.html');

        require(['rightSide']);
        //-------------------------分页加载------------------
        var pageNo = 1;
        var pagecount = 0;
        var $ul =$('.pageList ul');
        $.ajax({
            url: '../api/goodslist.php',
            dataType:'json',
            success:function(res){
                var html = '';
                $.each(res.data, function(index, val) {
                     html += getHtml(val);
                });
                $('.goodsList').find('ul').html(html);

                pagecount = Math.ceil(res.total/res.qty);
                var pageHtml = '';
                
                for(var i = 1;i<=pagecount;i++){
                    $('<li/>').text(i).appendTo($ul);
                }
                $ul.children('li').eq(0).addClass('active');
            }
        });
        var idx = 0;
        $ul.on('click','li',function(){
            var $this = $(this);
            $this.addClass('active').siblings('li').removeClass('active');
            idx = $this.index();
            pageLoad();
        });
        $('.next').click(function(){
            idx+=1;
            $ul.children('li').removeClass('active');
            $ul.children('li').eq(idx).addClass('active');
            pageLoad();
        });
        $('.end').click(function(){
            idx = pagecount -1;console.log(idx)
            $ul.children('li').removeClass('active');
            $ul.children('li').eq(idx).addClass('active');
            pageLoad();
        });
        //-----------------------加入购物车------------------------
        var $goodslist = $('.goodsList').find('ul');

        $goodslist.on('click','.btn-addcart',function(){
            var $this = $(this);
            var $currentLi = $this.closest('li');
            var $img = $currentLi.find('img');
            require(['addToCar'],function(){
                addToCart($img);
            });

            var $id = $currentLi.attr('data-id');
            var $pname = $currentLi.find('.pname');
            var $price = $currentLi.find('.minprice');

            var num = $('.goodscount').text();console.log(num);
            num++;
            $('.goodscount').text(num);

            console.log($pname,$id,$price)
            $.ajax({
                url: '../api/addToShopcar.php',
                data: {
                    id:$id,
                    goodsname:$pname.text(),
                    price:$price.find('strong').text(),
                    imgurl:$img[0].src.slice(22),
                    qty:$('.count').find('input').val(),
                     },
                success:function(data){
                    console.log(data);
                    
                }
            });

        })

        //传参到详情页
        $goodslist.on('click','.pimg',function(){
            var $this = $(this);
            var id = $this.closest('li').attr('data-id');
            this.href += '?'+'gid='+id;

        })
        
        function pageLoad(){
            $.ajax({
                url: '../api/goodslist.php',
                dataType: 'json',
                data: {pageNo: idx+1},
                success:function(res){
                    var html = '';
                    $.each(res.data, function(index, val) {
                         html += getHtml(val);
                    });
                    $('.goodsList').find('ul').html('');
                    $('.goodsList').find('ul').html(html);
                }
            });
        }

        function getHtml(val){
            return '<li class="item" data-id="'+val.gid+'">'+
            '<dl><dt><a href="../html/details.html" class="pimg">'+
                '<img src="../'+val.imgurl+'" width="110" height="180" alt="洛神山庄西拉赤霞珠干红葡萄酒(又名：奔富洛神山庄干红葡萄酒)" style="opacity: 1;"></a>'+
                '<p class="promo-icon"></p>'+
                '<!-- 商品荣誉 -->'+
                '<p class="promo-icon"></p>'+
            '</dt><dd class="base">'+
                '<a class="pname" title="'+val.goodsname+'">'+
                    '<span class="cn">'+val.goodsname+'</span>'+ 
                    '<span class="en" title='+val.englishname+'"></span>'+
                    '<span class="promo" title="免运费">免运费</span>'+
                '</a><p class="price">'+
                    '<span class="mian fl"></span>'+
                    '<!--增加立减图标-->'+
                    '<span class="minprice" style="color:#CC0000">'+
                        '¥<strong style="font-family:inherit;">'+val.price+'</strong>'+
                    '</span></p></dd><dd class="action"><a class="btn-addcart">加入购物车</a><p>'+
                    '<a class="btn-style btn-comm" href="javascript:void(0);">'+
                        '<em>为您推荐</em></a>'+
                    '<a href="javascript:;" class="btn-style btn-end btn-add2cart">到货通知</a>'+
                    '</p></dd><dd class="sum"><span class="ratecount"><strong style="color:#CC0000">'+
                    val.praisedegree+'</strong>好评度</span>'+
                '<span class="commentcount"><a href="#"><strong>'+val.commentnum+'</strong></a>评论</span>'+
                '<span class="soldnum"><strong>'+val.salenum+'</strong>售出</span>'+
                '</dd><dd class="info"><ol></ol></dd></dl></li>'
        }

        

    });
})