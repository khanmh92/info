$(document).ready(function () {

    // animition header
    $('.header').animatedHeadline({
        animationType: 'clip'
    });

    // AVTIVE LINK //
    $("nav ul li a").click(function () {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });

    $("nav a img.logo").click(function () {
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });


    // SMOOTH SCROLL //

    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000);
        }
    });

});

function openNav() {
    document.getElementById("myNav").style.width = "100%"
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%"
}


//Note:  //800 ar por ai code add corle address bar a hash update asbe {}
// , function () {
//     window.location.hash = hash;
// }
