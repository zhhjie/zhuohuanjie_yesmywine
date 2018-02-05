/* 
* @Author: Marte
* @Date:   2018-02-05 15:13:41
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-05 15:35:52
*/



define(['common'],function(){
    return {
        exchange(obj){
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

            })
        },
    }
});