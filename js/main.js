$(function () {

    // slicknnav플러그인 이용하여 메뉴초기화
    $('#nav-menu').slicknav();
    // 대메뉴에 마우스 올렸을때 서브메뉴 보여줌
    $('#nav-menu >li > a').mouseenter(function () {
        $('#nav-menu >li>ul').stop().slideDown('fast');
        $('.menu-bg').stop().slideDown();
    });
    // 대메뉴에서 마우스 벗어났을때 서브메뉴 닫아줌
    $('.menu').mouseleave(function () {
        $('#nav-menu >li>ul').fadeOut('fast');
        $('.menu-bg').fadeOut();
    });
    // .slicknav() - 네비게이션 메뉴 생성시 사용  
    // news slide - .slick()- 슬라이더 기능을 추가 
    $(".news_slide").slick({
        // 슬라이드 자동재생
        autoplay: true,
        // autoplay:false,
        // 수직방향 전환
        vertical: true,
        // 무한반복 허용
        infinite: true,
        // 한번에 한개의 슬라이드
        slidesToShow: 1,
        // 점표시
        dots: false,
        // 화살표 클릭시 슬라이드 전환 허용
        arrows: true,
        // 속도
        speed: 500, //0.5초
        // 슬라이드이동
        focusOnSelect: true,
        // 화살표 버튼 설정
        prevArrow: $("#banner_prev"),
        nextArrow: $("#banner_next")
    });
    // banner slide 
    $(".banner_slide").slick({
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        speed: 500,
        focusOnSelect: true
    });

    // OUR BUSINESS 아코디언 
    var options = $(".businessList .option");
    // 초기설정 : active클래스 없는 화살표 숨김(투명도0으로)
    $(".businessList .option:not(.active) .wArrow").css({
        bottom: "-70px",
        opacity: 0
    });
    // 초기설정 : active 클래스가 있는 첫번째 옵션의 span.details 보이게 설정
    $(".businessList .option.active .details").css({
        display: 'block',
        opacity: 1,
        transform: 'translateY(0)' // 원래위치 
    });
    // 초기설정 : active 클래스가 있는 첫번째 옵션의 화살표 보이게 설정
    $(".businessList .option.active .wArrow").css({
        bottom: "30px",
        opacity: 1
    });

    // option 요소에 클릭 이벤트 추가 
    options.on("click", function () {
        var option = $(this); // 클릭한 옵션을 option 변수에 저장 
        // .hasClass - 현재 요소에 active class가 있는지 확인
        if (option.hasClass("active")) {
            // 이미 열려있으면 닫기
            option.removeClass("active"); // active class 제거
            // .details 클래스를 애니메이션 사용하여 닫기 (전체다0으로 설정)
            option.find(".details").stop().animate({
                height: 0,
                opacity: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                transform: 'translateY(10px)' // 글자를 살짝 아래로 이동시킴
            }, 300, function () { // 0.3초간 천천히 닫아줌
                $(this).css('display', 'none'); // 애니메이션 마친후 가려줌
            });
            //  $(this) = .details 
        } else {
            // 열려있지 않은 경우 열기 
            // 모든 옵션 요소의 클래스 제거
            options.removeClass("active");
            // 모든 .option에서 "active" 클래스 제거 
            $(".details").stop().animate({
                // 애니메이션 사용하여 닫아줌
                height: 0,
                opacity: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                transform: 'translateY(10px)'
            }, 300, function () {
                $(this).css('display', 'none');
            });

            // 클릭한 요소에 클래스 추가 - addClass
            option.addClass("active"); // 옵션 요소에 액티브클래스 추가
            option.find(".details").css({
                display: 'block', // 안보였던 요소 보여줌
                height: 0, // 초기 높이 0
                opacity: 0,
                paddingTop: '10px',
                marginTop: '10px',
                marginBottom: '10px',
                transform: 'translateY(10px)' // 초기상태에서 아래로 이동
            }).stop().animate({
                // 애니메이션 사용하여 .details 열기
                height: 'auto', // 높이를 자종으로 설정하여 내용에 맞게 조절
                opacity: 1, // 100% 로 설정하여 보이게 함
                paddingTop: '10px',
                paddingBottom: '10px',
                marginTop: '10px',
                transform: 'translateY(0)' // 부드럽게 원래위치로 
            }, 300); // 0.3초간 천천히 열어줌 
        }
        // 함수호출
        updateBackground();
        // 클릭이 일어난 옵션에만 화살표 보이도록 설정
        $(".wArrow").removeClass("active"); // 모든 화살표에서 active클래스 제거
        option.find(".wArrow").addClass("active"); // 클릭한 옵션에 화살표 추가

        var arrow = option.find(".wArrow"); // 클릭한 요소의 화살표 찾아 변수저장
        // 애니메이션을 사용하여 아래에서 위로 30픽셀 이동 후 보이게 함
        arrow.stop().animate({
            bottom: "30px",
            opacity: 1
        }, 100);

    });

    // 화살표 숨기기 업데이트 함수 
    function updateBackground() {
        $(".businessList .option:not(.active) .wArrow").css({
            bottom: "-70px",
            opacity: 0
        });
    }

    // tab - news
    // // li 클릭시 실행되는 함수
    // $(".inner_bbs li").click(function(){
    //     var $this = $(this); // li임 
    //     var index = $this.index();
    // });

    // slider 

    $(".slider").slick({
        dots: true, // 4개의 페이지들 인디케이터
        arrows: false, // 화살표 가려줌
        slidesToShow: 3, // 한 페이지에 보여질 슬라이드수
        // 반응형 설정 
        responsive: [{
            breakpoint: 760, // 760px 이하일때 적용설정
            settings: {
                slidesToShow: 1, // 한페이지에 1개로 설정
                centerMode: true, // 슬라이드 중앙정렬 활성
                centerPadding: '60px'

            }
        }]

    })

});