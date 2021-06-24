// slide deal scrpit

$('.owl-carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
})


// $(window).scroll(function(event) {
//     console.log('ok');
//     var pos_body = $('html,body').scrollTop();
//     console.log(pos_body);
//     // console.log(pos_body);
//     if(pos_body>20){
//        $('.menu').addClass('co-dinh-menu');
//     }
//     else {
//        $('.menu').removeClass('co-dinh-menu');
//     }
//     if(pos_body>1200){
//        $('.back-to-top').addClass('hien-ra');
//     }
//     else{
//        $('.back-to-top').removeClass('hien-ra');
//     }
//  });

