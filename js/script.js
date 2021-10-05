$('.dlack').hide();
$('.actives').hide(1000);
$('.header_btn-link').click(function () {
    $('.dlack').show(1000);
    $('body').addClass('actives');
})
$('.kurs__block-first_remove-btn').click(function () {
    $('.dlack').hide(1000);
    $('body').removeClass('actives');
})

$('.kurs__block-second-btn').click(function () {
    $('.dlack_1').show();
    $('.dlack').hide();
    
})

// 
$('.dlack_1').hide();
$('.kurs__block-second-btn_1').click(function () {
    $('.dlack_1').hide();
    $('body').removeClass('actives');
})
// 
$('.section_slide_img-btn').click(function () {
    $('.dlack').show(1000);
    $('body').addClass('actives');
})
// $('#aloqa').click(function () {
//     $('.dlack').show(1000);
//     $('body').addClass('actives');
// })
// 
$('.header__menu-btn').click(function () {
  
    $('.header__menu-ul').toggleClass('acttive');

})

