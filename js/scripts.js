$(document).ready(function(){
    // Start  rating
        $(".dev-rating .rating-form input[type='radio']").on('click', function() {
            // console.log($(this).val());
            var value = $(this).val();
            $('.dev-rating .rating').html('');
            $('.product').find('.dev-rating .rating').append( '(' + value + ')')
        });
    // End  rating

    // Start  rating
    $(".choose-size li").on('click', function() {
        // console.log($(this).data('size'));
        $(this).addClass('active').siblings().removeClass('active');
        var dataSize = $(this).data('size');
        $('.product-size .product-size-num').html('');
        $('.product').find('.product-size .product-size-num').append(dataSize)
    });
    // End  rating

    // Start slider


    // Start product Color
    $('.product .product-color .color-box').on('click', function() {
        $('.product-color .color-box').removeClass('selected');
        $(this).addClass('selected');
        $('.product .slider').removeClass('active');
        $('.product').find('.' + $(this).data('color')).addClass('active');
        // console.log('.' +  $(this).data('color'));
        var activeSlide  = $('.product').find('.display-product .thumbnails.active img').attr('src');
        $('.product').find('.easyzoom--with-thumbnails img').attr('src', activeSlide)
        $('.product').find('.easyzoom--with-thumbnails a').attr('href', activeSlide)
        $('.product').find('.display-product .thumbnails.active li:first-child  a').click();
        // console.log(activeSlide);
        $('.product-color-select').html('');
        $('.product-color-select').append($(this).data('color'));

        // Scroll To Product Color
        $('html , body').animate({
            scrollTop: $('.display-product').offset().top
        },1000);

    });

    $('.display-product .thumbnails li a').on('click', function() {
        $('.display-product .thumbnails li a').removeClass('selected');
        $(this).addClass('selected');
    });


    $('.display-product .thumbnails img').on('click', function() {
        console.log($(this).attr('src'))
        var sourceImg = $(this).attr('src')
        $(this).parents('.slider').find('.easyzoom--with-thumbnails img').attr('src', sourceImg)
        $(this).parents('.slider').find('.easyzoom--with-thumbnails a').attr('href', sourceImg)
        // console.log($('html').find('.easyzoom-flyou img').attr('src'));
    });


    // Zoom
    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();

    // Setup thumbnails example
    var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

    $('.thumbnails').on('click', 'a', function(e) {
        var $this = $(this);

        e.preventDefault();

        // Use EasyZoom's `swap` method
        api1.swap($this.data('standard'), $this.attr('href'));
    });

    // Setup toggles example
    var api2 = $easyzoom.filter('.easyzoom--with-toggle').data('easyZoom');

    $('.toggle').on('click', function() {
        var $this = $(this);

        if ($this.data("active") === true) {
            $this.text("Switch on").data("active", false);
            api2.teardown();
        } else {
            $this.text("Switch off").data("active", true);
            api2._init();
        }
    });

    // Collapse

    $('.btn-collapse').on('click', function(){
        $(this).find('.plus_icon').toggleClass('active');
    });

    // Slick
    $('.related-product').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        ]
    });
});
