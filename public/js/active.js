(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        // Hero Slider Active Code
        $(".features-slides").owlCarousel({
            items: 5,
            loop: true,
            autoplay: false,
            smartSpeed: 2000,
            margin: 50,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        })
    }

    // Search Active Code
    $('#search-btn, #closeBtn').on('click', function () {
        $('body').toggleClass('search-form-on');
    });

    // matchHeight Active Code
    if ($.fn.matchHeight) {
        $('.equal-height').matchHeight();
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="pe-7s-angle-up" aria-hidden="true"></i>'
        });
    }

    // onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#listingNav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    var $window = $(window);

    // Sticky Active JS
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }
    });

    // Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    var form = $('#register-form');
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        var formData = decodeURIComponent($(form).serialize().replace(/%2F/g, " ").replace('+', ' ')).split('&').map(input  => { const [key, value] = input.split('='); return {[key]: value} });

        var response = postData('/api/users', formData).then(body => {
            console.log(body)
            window.localStorage.setItem('userId', body.userId);
            window.location.replace('./personal.html')
        })

    });

})(jQuery);


// postData(`http://example.com/answer`, {answer: 42})
//     .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
//     .catch(error => console.error(error));

function postData(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.json()); // parses response to JSON
}

function getData(url = ``) {
    // Default options are marked with *
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
        .then(response => response.json()); // parses response to JSON
}

function fetchUser(userId) {
    return getData(`/api/users/${userId}`).then(response => response)
}
