setInterval(function(){
    
    $('.slide_bg').css('background-position','-=1');

},100);


/* 리스트의 이미지를 누르면 메인 이미지에 표시 */

$('.gall_list li').click(function(){
    
    var gall = $(this).children().attr('src');
    
    $('.gall_box').children().attr('src',gall);
    $(this).addClass('border');
    $(this).siblings().removeClass('border');
    
});




/* 이미지에 해당하는 텍스트 넣기 */

$('.gall_list li').click(function(){
    var index=$(this).index();
    var title = $('.gall_img_title li').eq(index).text()
    $('.gall_title span').text(title);
    
        
});

    var current = 0;
    var count = $('.gall_list li').size()-1;


/* 화살표 누르면 슬라이드 */

$('.arrow_left').click(function(){
    
    current-=1;
    if(current<0){
        current=count;
    }
    
    $('.gall_list li').eq(current).click();
});

$('.arrow_right').click(function(){
    
    current+=1;
    if(current>count){
        current=0;
    }
    
    $('.gall_list li').eq(current).click();
});


/* 탭 메뉴에 마우스 오버시 말풍선 나타나기 */

$('.ballon_tab').mouseover(function(){
   $('.ballon').removeClass('none'); 
});

$('.ballon_tab').mouseleave(function(){
   $('.ballon').addClass('none'); 
});



/* 스크롤 하면 도도새 등장! */

$(document).ready(function(){
    $(window).scroll(function(){
        $('.intro img').each(function(){
            var slideup = $(window).scrollTop()+$(window).height();
            if(slideup>200){
                $(this).animate({'opacity':'1'}, 1000);
            }                  
        });
    });
});


