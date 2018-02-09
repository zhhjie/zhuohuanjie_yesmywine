require.config({
    paths:{
        'jquery':'../lib/jquery-3.3.1',
        'carousel':'../lib/jQuery.carousel/jQuery.zhjcarousel',
        'common':'../js/common',
        'rightSide.js':'../js/rightSide',
        'addToCar.js':'../js/addToCar',
        'gdsZoom':'../lib/jquery.gdsZoom/jquery.gdsZoom',
        'header':'../js/header'

    },
    shim:{
        'carousel':['jquery'],
        'common':['jquery'],

        'rightSide':['jquery'],
        'addToCar':['jquery'],
        'gdsZoom':['jquery'],
        'header':['jquery']

    }
});