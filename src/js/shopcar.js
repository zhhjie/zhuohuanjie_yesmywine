require(['config'],function(){
    require(['jquery'],function(){
        $('header').load('../html/header.html',function(){
            $('header').children('div').not(':first').hide();
        })
    })
})