// 풀페이지 스크롤
$(function(){
    // 풀페이지 호출
    $('#fullpage').fullpage({
        // 손으로 드래그 되게
        fingersonly:true,
        anchors:['firstPage','secondPage','thirdPage','fourthPage','fitthPage','sixthPage','seventhPage'],
        menu:'.rightNav',
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.count').counterUp({delay: 10,time: 550});
                }
            // if(index == 3){
            //     $('.count2').counterUp({delay: 5, time: 550});
            // }
        },
    });
});



// header
$(function(){
    setGnb();
    function setGnb(){
        // 마우스가 들어갔을때, 탭키가 실행됐을 때 함수가 실행됨.
        $('.innerHeader .gnb > li > a').on('mouseenter focus', function(){
            $('.innerHeader').addClass('on');
            $('.innerHeader .gnb > li > .inner').addClass('on');
            $('header').css({'border':'none'});
        });
        // 마우스가 떠나갈 때 실행됨.
        $('header').on('mouseleave', function(){
            $('.innerHeader').removeClass('on');
            $('.innerHeader .gnb > li > .inner').removeClass('on');
            $('header').css({'border':'1px solid rgba(255,255,255,0.1)'});
        });
    }
});


//이미지 슬라이드
$(function(){
    $('.visual').slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        autoplaySpeed:2800,
        customPaging:function(slider, i){
        // html문서에 있는 .dot 클래스를 찾아서 타이틀에 대입합니다. 
        var tit = $(slider.$slides[i]).find(".dot").html();
        // 이 때, 반환하는데 바깥'' 안""
        return '<div class="pager-tit" class= "+ i +">' + tit + '</div>';
        },
    });
});


// 이미지 슬라이드 - 넓이, 높이 스크립트
$(function(){
    var winW = $(window).width();
    var winH = $(window).height();
    // visual .list클래스에 width, height 값 넣어주자.
    list = $(".visual .list");
    // px로 바꿔서
    list.css({ width: winW + "px", height: winH + "px" });
});

