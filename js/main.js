// slider
$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        
    });
});
$(document).ready(function () {
    $(".brand__slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});
$(document).ready(function () {
    $(".product__slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            }
            ,
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
// slider

// tab
const tab = document.getElementById('tab');
const nav = document.getElementById('nav');
const hidden = document.getElementById('hidden');
const close = document.getElementById(`close`);

tab.onclick = () => {
    nav.classList.add('nav-sm--show');
    hidden.style = `display:block`;
}
hidden.onclick = () => {
    nav.classList.remove('nav-sm--show');
    hidden.style = `display:none`;
}
close.onclick = () => {
    nav.classList.remove('nav-sm--show');
    hidden.style = `display:none`;
}
// tab