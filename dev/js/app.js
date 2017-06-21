jQuery(document).ready(function($) {
$(window).load(function(){
  $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});



$(function() {
    var navbar = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            navbar.removeClass('navbar').addClass("navbar-alt");
        } else {
            navbar.removeClass("navbar-alt").addClass('navbar');
        }
    });
});


// function interpolation() {
//     const data = [
//         'http://res.cloudinary.com/drmhxontt/image/upload/v1498005699/Alpa Stone/decor_kamin3.jpg',
//         '../img/decor_lestnica.jpg',
//          '../img/decor_kuhnya.jpg',
//          '../img/decor_oblicovka_sten.jpg'
//     ];
//     const item = 0;
//     for (item < 3) {
//     elem = document.getElementById("decor");
//     elem.style.backgroundImage = "url("+data[item]+")";
//     item++;
//     }
// };


// interpolation();
