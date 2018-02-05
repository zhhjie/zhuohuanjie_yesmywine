/* 
* @Author: Marte
* @Date:   2018-02-05 19:33:18
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-05 22:07:59
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
        var $tel = $('#tel')
        $tel.on('change',function(){
            if(!reg_tel.test($tel.val())){
                var $span = $('<span/>').text('输入正确的手机号').appendTo('selector').$tel;
                $span.css({
                    
                })
            }
        })
        var code = co.getCode();
        $('.getCode').text(code);
    })
});
