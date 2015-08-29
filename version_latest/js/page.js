$(function(){
    $('#fullpage').fullpage({
        'verticalCentered': false,//内容是否垂直居中
        'css3': true,//是否使用 CSS3 transforms 滚动
        'sectionsColor': ['#8fe0ec', '#82d4e0',  '#f3eace','#0e2142','#f8f8f4','#7cc9ed'],
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        afterLoad: function(anchorLink, index){
            if(index == 6){
                $('.page6').addClass('Animation');
            }
        },
    });
    setTimeout(function(){
    	$('#fullpage').addClass('Anim');
    	$('.spinner_mask').css('display','none');
    },3000);
})