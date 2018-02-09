/* 
* @Author: Marte
* @Date:   2018-02-05 16:44:51
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 16:33:35
*/

require(['config'],function(){
    require(['jquery','common'],function($,co){
        $('footer').load('../html/footer.html',function(){
            $('.foot-col').hide();
            $('.foot-nav').hide();
            $('.foot-links').hide();
            $('.foot-license').css('background','#fff');
            $('.foot-copyright').css('background','#fff');
        })
        
        var $uname = $('.uname');
        var $error = $('.error_tip');

        $error.css('color','#f00');
        $('.btn-login').on('click',function(){
            var uname = $uname.val();
            var pwd = $uname.next().val();
            $.ajax({
                url: '../api/login.php',
                data: {
                    username:uname,
                    password:pwd,
                },
                success:function(data){console.log(data)
                    if(data == 'success'){

                        location.href = '../index.html';
                    }else if(data == 'fail'){
                        $error.text('账户或用户不正确');
                    }else if(data == 'unExist'){
                        $error.text('账户不存在');
                    }
                }
            })   

            
        })
    })
});
