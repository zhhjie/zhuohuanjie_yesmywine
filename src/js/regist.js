/* 
* @Author: Marte
* @Date:   2018-02-05 19:33:18
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 15:33:16
*/

require(['config'],function(){
    require(['jquery','common'],function($,co){
        $('footer').load('../html/footer.html',function(){
            $('.foot-col').hide();
            $('.foot-nav').hide();
            $('.foot-links').hide();
            $('.foot-license').css('background','#fff');
            $('.foot-copyright').css('background','#fff');
        });
        var reg_tel = /\b1[34578]\d{9}\b/g;
        var _code = co.getCode().toLowerCase();
        $('.getCode').text(_code);
        //父级委托，表单事件处理
        $('.fc').on('change','input',function(){
            var $this = $(this); 
            var $p = $this.next();   
            $p.text(''); 
            if(this.id == 'tel'){
                if(!reg_tel.test($this.val())){            
                    $p.text('请输入正确的手机号');
                }else{
                    $p.text('');
                }
            }
            if(this.id == 'code'){      
                $p = $p.next();
                console.log($p);
                if($this.val() != _code){
                    $p.text('验证码错误');
                    $('.getCode').text(_code)
                }else{
                    $p.text('');
                    $('.getCode').text(_code)
                }
            }
            if(this.id == 'pwd1'){
                var reg = /[a-z0-9A-Z]{6,16}/
                if(!reg.test($this.val())){
                    $p.text('密码格式不对');
                }else{
                    $p.text('');
                }
            }
            if(this.id == 'pwd2'){
                if($this.val() != $('#pwd1').val()){
                    $p.text('两次密码输入不一致');
                }else{
                    $p.text('');
                }
            }
        });
    
        
        $('.btn_reg').on('click',function(e){
            var tel = $('#tel').val();
            var password = $('#pwd1').val();
            if($('#isAgree')[0].checked){
                 $.ajax({
                    url: '../api/reg.php',
                    type: 'GET',
                    data: {
                        uname: tel,
                        pwd: password,
                    },
                    success:function(data){console.log(data)
                        if(data == 'success'){
                            location.href = '../html/login.html';
                        }else if(data == 'fail'){
                            $('#tel').next().text('用户名已经存在');
                        }
                    }
                })   
            }
            e.preventDefault();
        })
    })
});
