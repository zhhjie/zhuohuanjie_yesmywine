
require(['config'],function(){
    require(['jquery','carousel','common'],function($,ca,co){
        $('#pageHeader').load('html/header.html',function(){
            $('.head_r a')[0].href = 'html/shopcar.html';  
            require(['header']);

        });
        $('#pageFooter').load('html/footer.html');
        var b_width = $(window).width();
        /*
            轮播图
         */
        $('#banner').css('width',b_width);
        $('.box').carousel({
            imgs:[
                '../img/banner1_1.jpg',
                '../img/banner1_2.jpg',
                '../img/banner1_3.jpg',
                '../img/banner1_4.jpg',
                '../img/banner1_5.jpg',
                '../img/banner1_6.jpg',
                '../img/banner1_1.jpg',
                ],
            'height':'500',
            'width':'1920',
        });
        $('.box').css('width',b_width);
        $('.xo_box').carousel({
            imgs:[
                '../img/banner3_1.jpg',
                '../img/banner3_2.jpg',
                '../img/banner3_3.jpg',
                '../img/banner3_4.jpg',
                '../img/banner3_5.jpg',
                '../img/banner3_1.jpg',
            ],
            'height':'252',
            'width':'760',
        });
        $('.china_box').carousel({
            imgs:[
                '../img/banner4_1.jpg',
                '../img/banner4_2.jpg',
                '../img/banner4_3.jpg',
                '../img/banner4_1.jpg',
            ],
            'height':'252',
            'width':'760',
        });
        $('.old_box').carousel({
            imgs:[
                '../img/banner5_1.jpg',
                '../img/banner5_2.jpg',
                '../img/banner5_1.jpg',
            ],
            'height':'252',
            'width':'760',
        });
        $('.set_box').carousel({
            imgs:[
                '../img/banner6_1.jpg',
                '../img/banner6_2.jpg',
                '../img/banner6_1.jpg',
            ],
            'height':'252',
            'width':'760',
        });

        var $tab = $('.tag_rec');

        co.exchange($tab);

       

        $.ajax({
            url: '../api/index.php',
            dataType:'json',
            success:function(data){
                //葡萄酒
                //性价比之选
                var goodsCost='';
                $.each(data.wine.slice(0,5),function(idx,item){
                    goodsCost += getRender(item);
                })
                $('.goodsCost').html(goodsCost);
                //新品上市
                var news = '';
                $.each(data.wine.slice(4,9),function(idx,item){
                    news += getRender(item);
                }) 
                $('.news').html(news);
                //洋酒、烈酒
                var xo = '';
                $.each(data.xo.slice(4,9),function(idx,item){
                    xo += getRender(item);
                }) 
                $('.xolist').html(xo);
                //中国白酒
                //爆款精选
                var handpick = '';
                $.each(data.chinaBj.slice(0,5),function(idx,item){
                    handpick += getRender(item);
                })
                $('.handpick').html(handpick);

                //大牌直降
                var depreciate = '';
                $.each(data.chinaBj.slice(4,9),function(idx,item){
                    depreciate += getRender(item);
                })
                $('.depreciate').html(depreciate);

                //陈年老酒
                //高性价比老酒
                var cost_effective = '';
                $.each(data.oldWine.slice(0,5),function(idx,item){
                    cost_effective += getRender(item);
                })
                $('.cost_effective').html(cost_effective);
                //收藏珍品
                var gem = "";
                $.each(data.oldWine.slice(4,9),function(idx,item){
                    gem += getRender(item);
                })
                $('.gem').html(gem);
                //酒具
                var set = "";
                $.each(data.set.slice(4,9),function(idx,item){
                    set += getRender(item);
                })
                $('.set').html(set);
                //猜你喜欢
                var guess = "";
                $.each(data.goodslist.slice(1,7),function(idx,item){
                    guess += `<li class="clearfix" data-id=${item.gid}>
                        <a href="html/details.html">
                            <img src="${item.imgurl}"  alt="" class="link"/>
                        </a>  
                        <a href="#">${item.goodsname}</a>
                        <p>Baron De Valafier</p>
                        <p>产地：法国(France)</p>
                        <p>品种：40%美乐(Merlot),30%歌海娜(Grenache/Granacha)，30%佳丽酿(Carignan)</p>
                        <p>好评度：$(item.praisedegree)</p>
                        <p class="price">￥<strong>${item.price}</strong></p>
                    </li>`
                })
                $('.like_right').html(guess);

                //限时秒杀
                var secskill = "";
                $.each(data.set.slice(0,6),function(idx,item){
                    secskill += `<li data-id="${item.gid}">
                        <a href="html/details.html">
                            <img src="${item.imgurl}" alt="" class="link"/>
                            <p class="name">${item.goodsname}</p>
                            <p class="info">梅多克产区佳酿，橡木桶陈酿12个月！</p>
                            <p class="price">
                                <span>￥<i>${item.price}</i></span>
                                ￥<del>238.0</del> 
                            </p>
                        </a>
                    </li>`
                })
                $('.seckillList').html(secskill);

                //tab人气抢购
                var tagInfo = "";
                $.each(data.goodslist.slice(5,30),function(idx,item){
                    tagInfo += `<li data-id=${item.gid}>
                                <p>还剩<i></i>天<i></i>时<i></i>分</p>
                                <a href="html/details.html">   
                                    <img src="${item.imgurl}" alt="" class="link"/>
                                    <div>
                                        <p>${item.goodsname}</p>
                                        <p class="price">抢购价：￥<span>${item.price}</span></p>
                                    </div>
                                </a>
                            </li>`;
                })
                $('.infoList').html(tagInfo);

                //tab人气切换
                var $tablist = $('.tag_rec'); 
                $tablist.on('mouseenter','li',function(){
                    var $this = $(this);
                    var idx =$this.index();
                    var height = $('.tagInfo').outerHeight();
                    var $list = $('.infoList');
                    var target = -idx*height;
                    $list.animate({top:target});
                });


                //手风琴
                var $accordion = $('.accordion');
                $accordion.on('mouseenter','li',function(){
                    var $this = $(this);
                    $this.stop().animate({width:450},1000).siblings('li').stop().not('.end_a').animate({width:150},1000);
                    $('.end_a').stop().animate({width:300},1000);
                }).on('mouseleave','li',function(){
                    $(this).stop().animate({width:150},1000).siblings('li').stop().not('.end_a').animate({width:150},1000);
                    $('.end_a').stop().animate({width:450},1000);

                })



                //创建html
                function getRender(item){
                    return '<li data-id="'+item.gid+'">'+
                            '<a href="html/details.html">'+
                                '<img src="'+item.imgurl+'" alt="" class="link"/>'+
                                '<div class="info">'+
                                    '<p class="name">'+item.goodsname+'</p>'+
                                    '<p class="price">'+
                                        '<span>￥<i>'+item.price+'</i></span>'+
                                    '</p>'+
                                '</div>'+
                                '<div class="saleInfo clearfix">'+
                                    '<p class="fl">售出<span>'+item.salenum+'</span></p>'+
                                    '<p class="fr">好评<span>'+item.praisedegree+'</span></p>'+
                                '</div>'+   
                            '</a>'+
                        '</li>'
                }

                 //倒数几时
                var $lis = $('.infoList').children('li');
                var $countdowns = $('.countdown').find('i');
                var day,hour,min,sec;
                setInterval(function(){
                    var res = co.countDown('2018-2-15');
                    day = res.d;
                    min = res.m;
                    hour = res.h;
                    sec = res.s;
                    //人气抢购
                    for(var j = 0;j<5;j++){
                        $lis.eq(j).find('i').eq(0).text(day);
                        $lis.eq(j).find('i').eq(1).text(hour);
                        $lis.eq(j).find('i').eq(2).text(sec);    
                    }
                    //  秒杀
                    $countdowns.eq(0).text(hour);
                    $countdowns.eq(1).text(min);
                    $countdowns.eq(2).text(sec);
                }, 1000);
                $('#main').on('click','.link',function(){
        
                    var $this = $(this);
                    var id = $this.closest('li').attr('data-id'); 
                    console.log(id)
                    var $a = $this.closest('a');
                    $a[0].href += '?gid='+id;
                })
            }
        })
    })
})
