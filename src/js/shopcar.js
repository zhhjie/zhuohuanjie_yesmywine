require(['config'],function(){
    require(['jquery'],function(){
        $('header').load('../html/header.html',function(){
            $('header').children('div').not(':first').hide();
        });
        $.ajax({
            url: '../api/shopcar.php',
            dataType: 'json',
            success:function(res){console.log(res)
                var html = "";
                $.each(res.data, function(index, val) {
                     html+=getRender(val);
                });
                $('.prod-count').text(res.count);
                $('.cartGoodsList').find('tbody').html(html);

                var $box = $('.jj_box').parent().parent();console.log($box)
                
                $box.on('click','a',function(){console.log(this)
                    var $this = $(this);
                    var $input = $('.editAmount');
                    var val = $input.val();
                    var gid = $this.closest('tr').attr('data-id');
                    if($this.text() == '-'){
                        val--;
                        if(val > 0){
                            update(gid,-1);
                        }else{
                            val = 0;
                        }
                        $input.val(val);    
                    }
                    if($this.text() == '+'){

                        val++;
                        $input.val(val); 
                        update(gid,1);
                    }
                    if($this.text() == '删除'){
                        $.ajax({
                            url: '../api/addToShopcar.php',
                            data: {
                                id:gid,
                                isdelete:true},
                            success:function(data){
                                console.log(data)
                                var $currentTr = $this.closest('tr')
                                $currentTr.remove();
                            }
                        })
                    }
                })
            }
        })
        

        function getRender(item){
            return '<tr class="border" data-id="'+item.gid+'">'+
                    '<td width="8%" class="btn_fx">'+
                    '<input type="checkbox" name="goodsSelect" value="'+item.gid+'" class="goodsSelect" checked="checked">'+
                    '</td><td width="8%" class="left">'+
                    '<a href="details.html?gid='+item.gid+'" target="_blank" class="prod-img">'+
                        '<img src="../'+item.imgurl+'">'+
                    '</a></td><td class="left">'+            
                    '<a href="details.html?gid='+item.gid+'" target="_blank" class="title">'+item.goodsname+'</a>'+
                    '<span class="red"></span><br>'+
                        '<ins></ins>'+
                    '</td><td width="13%" class="dj_price">'+
                        '¥<b>'+item.price+'</b><br>'+
                    '</td><td width="13%">'+
                    '<span class="jj_box clearfix fl">'+
                    '<a title="减少" class="minus fl">-</a>'+
                    '<input name="input" class="editAmount fl" type="text" value="'+item.qty+'" maxlength="3" minvalue="1" maxvalue="500">'+
                    '<a title="增加" class="add fl">+</a>'+              
                    '</span></td><td class="xj_price" width="13%">¥<b>'+item.price*item.qty+'</b></td>'+
                    '<td width="13%" class="btn_edit">'+
                    '<a class="addFavorite">  加入收藏夹  </a><br><a class="btn-remove">删除</a>'+
                    '</td></tr>'
        }

        function update(gid,val){
            $.ajax({
                url: '../api/addToShopcar.php',
                data: {
                    id:gid,
                    qty: val},
                success:function(data){
                    console.log(data);
                }
            })
        }

    })
})