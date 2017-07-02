jQuery(document).ready(function($) {
$(window).load(function(){
  $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});



$(function() {
    const navbar = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            navbar.removeClass("navbar").addClass("navbar-alt");
        } else {
            navbar.removeClass("navbar-alt").addClass("navbar");
        }
    });
});

// const data = [
//         '../img/decor_kamin.jpg.jpg',
//         '../img/decor_kamin2.jpg.jpg',
//          '../img/decor_kamin3.jpg.jpg',
//          '../img/decor_kamin4.jpg.jpg'
//     ];

// $(function() {
// let imageUrl;
// for (var i = data.length - 1; i >= 0; i--) {
//     Things[i]
// }
// $('myOjbect').css('background-image', `url(${imageUrl}[i])`);
// });



//     var elem = document.getElementsByClassName('decor__block--item');
//     elem.forEach(function(item, i, elem) {
//         elem.item(i).style.backgroundImage = "url(" + data + ")";

//     });

// function interpolation() {
//     data.map(interpolation) {

//     }

//     elem = document.getElementById("decor");
//
//     item++;
//     }
// };


// interpolation();
