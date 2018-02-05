/* 
* @Author: Marte
* @Date:   2018-02-05 15:13:41
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-05 22:00:53
*/



define(['common'],function(){
    return {
        exchange(obj,opt){
            $tab = obj;
            var $tabItem = $tab.find('li');
            $tabItem.first().addClass('active');
            // 点击切换
            $tab.on('mouseover','li',function(){
                // 获取当前索引值
                var idx = $(this).index();
                
                // * 高亮显示当前tab，去除其它高亮
                $tabItem.eq(idx).addClass('active').siblings().removeClass('active');
                //
                if(opt.move == true){

                }
            })
        },
        //获取验证码
        getCode(){
            var code = '';
            for(var i = 0;i<4;i++){
                var num = parseInt(Math.random()*26 + 65);
                var str = String.fromCharCode(num);
                code+=str;

            }
            return code;
        }
    }
});