/* 
* @Author: Marte
* @Date:   2018-02-05 16:44:51
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-05 16:55:22
*/

require(['config'],function(){
    require(['jquery'],function(){
        $('footer').load('../html/footer.html',function(){
            $('.foot-col').hide();
            $('.foot-nav').hide();
            $('.foot-links').hide();
            $('.foot-license').css('background','#fff');
            $('.foot-copyright').css('background','#fff');
        })
    })
});
