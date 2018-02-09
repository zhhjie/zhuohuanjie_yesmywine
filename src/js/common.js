/* 
* @Author: Marte
* @Date:   2018-02-05 15:13:41
* @Last Modified by:   Marte
<<<<<<< HEAD
* @Last Modified time: 2018-02-09 17:07:48
=======
* @Last Modified time: 2018-02-06 21:00:35
>>>>>>> a7ba35224e56c6920a38dbeefb3af62cbe0d6ad5
*/



define(['common'],function(){
    return {
        exchange(obj,opt){
            var defaults = {
                move:false,
            }
            opt = $.extend({}, defaults, opt);
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
        },
        //倒计时

        countDown(date){
            var now = Date.now();
            var end = Date.parse(date);
            var offset = Math.floor((end - now)/1000);

            var sec = offset%60;
            var min = Math.floor(offset/60)%60;
            var hour = Math.floor(offset/60/60)%24;
            var day = Math.floor(offset/60/60/24);

            sec = sec<10? '0'+ sec : sec;
            min = min<10? '0'+ min : min;
            hour = hour<10? '0'+ hour : hour;
            day = day<10? '0'+ day : day;

            var res = {
                s : sec,
                m : min,
                h : hour,
                d : day

            }
            return res;
        }
        
    }
});