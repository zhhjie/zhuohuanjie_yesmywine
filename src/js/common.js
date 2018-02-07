/* 
* @Author: Marte
* @Date:   2018-02-05 15:13:41
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 21:00:35
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
        Countdown(date){
            var now = Date.now();
            var target = date.getTime();
            var times = now - target;

            var s = Math.floor(times%60);
            var m = Math.floor(times/60%60);
            var h = Math.floor(times/60/60%12);
            var d = Math.floor(times/60/60/12);

            s = s > 9 ? s : '0' + s;
            m = m > 9 ? m : '0' + m;
            h = h > 9 ? h : '0' + h;
            d = d > 9 ? d : '0' + d;

            var res = {
                sec:s,
                min:m,
                hour:h,
                day:d
            }
            return res;
        }
    }
});