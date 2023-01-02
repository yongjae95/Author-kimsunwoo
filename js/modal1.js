setInterval(function(){
    
    $('.slide').css('background-position','-=1');

},100);




/////////클릭 시 팝업
    
    var w = ($(window).width()/2)-($('.modal').width()/2);
    var h = ($(window).height()/2)-($('.modal').height()/2);
    
    $('.modal').css({
        left:w, top:h
    });
    
    $('.pop1').click(function(){
       $('.modal01').fadeIn(500);
        $('.modal_bg').fadeIn(500);
    });
    
    $('.pop2').click(function(){
       $('.modal02').fadeIn(500);
        $('.modal_bg').fadeIn(500);
    });
    
    $('.pop3').click(function(){
       $('.modal03').fadeIn(500);
        $('.modal_bg').fadeIn(500);
    });
    
    $('.modal_x').click(function(){
       $('.modal').fadeOut(0);
        $('.modal_bg').fadeOut(0);
    });
    
    $('.modal_bg').click(function(){
       $('.modal').fadeOut(0);
        $('.modal_bg').fadeOut(0);
    });


/* 탭 메뉴에 마우스 오버시 말풍선 나타나기 */

$('.ballon_tab').mouseover(function(){
   $('.ballon').removeClass('none'); 
});

$('.ballon_tab').mouseleave(function(){
   $('.ballon').addClass('none'); 
});
