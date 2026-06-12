(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		// noOpenerFade: true,
		// alignment: 'center',
		// detach: false
	});

	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<div class="col-sm-4" id="logo">' +
		'<a href="https://ecomautomates.com/"><img src="./images/logoo.png" width="220px" height="auto" alt=""/></a>' +
		'</div>' +
		'<div class="col-sm-8" id="mynav">' +
		'<a href="#navPanel" class="toggle"></a>' + '<form></form>' +
		'<span class="title">' + $('#logo h1').html() + '</span>' +
		'</div>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

})(jQuery);

$(document).ready(function () {
	$('.carousel').slick({
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		centerMode: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				// centerMode: true,

			}

		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
				infinite: true,

			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}]
	});
});

$(document).ready(function () {
	$('.carousel1').slick({
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		centerMode: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				// centerMode: true,

			}

		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
				infinite: true,

			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}]
	});
});

// Proven

$(document).ready(function () {
	$('.carousel5').slick({
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		arrows: true,
		centerMode: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				// centerMode: true,

			}

		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
				infinite: true,

			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}]
	});
});
$(document).ready(function () {
	$('.mynewcarousel').slick({
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		arrows: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				// centerMode: true,

			}

		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				infinite: true,

			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}]
	});
});
$('.projectslider').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	arrows:false,
	dots:false,
	autoplay: true,
	autoplaySpeed: 2000,
	loop: true,
	infinite: true,
	speed: 300,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
});
$('.servicesiconslider').slick({
	dots: true,
	arrows: false,
	infinite: false,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 3,
	slidesToScroll: 1,
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
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
$('.clientreviewslide').slick({
	dots: false,
	arrows: false,
	infinite: false,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});
// slick slider
$(document).ready(function () {
	$('.slider-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		fade: false,
		adaptiveHeight: true,
		infinite: false,
		useTransform: true,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		speed: 400,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	$('.slider-nav')
		.on('init', function (event, slick) {
			$('.slider-nav .slick-slide.slick-current').addClass('is-active');
		})
		.slick({
			slidesToShow: 7,
			slidesToScroll: 7,
			dots: false,
			focusOnSelect: false,
			infinite: false,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			}, {
				breakpoint: 640,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			}, {
				breakpoint: 420,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			}]
		});

	$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
		$('.slider-nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});

	$('.slider-nav').on('click', '.slick-slide', function (event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');

		$('.slider-single').slick('slickGoTo', goToSingleSlide);
	});
});
// slider end

// Milestone function
$(document).ready(function () {
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
	$('.counter').addClass('animated fadeInDownBig');
	$('h3').addClass('animated fadeIn');
});


// My js popup
$('.open-popup').on('click', function () {
	$('.overlay').addClass('shown');
});

$('.popup-close').on('click', function () {
	$('.overlay').removeClass('shown');
});
$('.btn_yes').on('click', function () {
	$('.overlay').removeClass('shown');
});
$(document).on('keyup', function (event) {
	if (event.which == 27) { // esc
		$('.overlay').removeClass('shown');
	};
});

document.querySelectorAll('.formFooter-leftSide').forEach(function (element) {
	element.style.display = 'none';
});
document.querySelectorAll('.formFooter-rightSide').forEach(function (element) {
	element.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
	var canvas = document.getElementById("snowCanvas");
	var ctx = canvas.getContext("2d");

	// Set canvas size and resize handler
	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();

	// Snowflake settings
	var snowflakeSize = 3; // Fixed snowflake size
	var snowflakeSpeed = 1.5; // Fixed snowflake speed

	// Generate snowflakes
	var snowflakes = [];
	function initSnowflakes() {
		snowflakes = [];
		for (var i = 0; i < 100; i++) {
			snowflakes.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius: Math.random() * snowflakeSize,
				speed: Math.random() * snowflakeSpeed + 1
			});
		}
	}
	initSnowflakes();

	// Draw and move snowflakes
	function drawSnowflakes() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "white";
		snowflakes.forEach(function (snowflake) {
			drawSnowflake(snowflake.x, snowflake.y, snowflake.radius);
			moveSnowflake(snowflake);
		});
	}

	function drawSnowflake(x, y, radius) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2);
		ctx.fillStyle = 'white';
		ctx.fill();
	}

	function moveSnowflake(snowflake) {
		snowflake.y += snowflake.speed;
		if (snowflake.y > canvas.height) {
			snowflake.y = 0;
			snowflake.x = Math.random() * canvas.width;
		}
	}

	// Cloud settings
	var clouds = [];

	// Function to add clouds
	function addClouds() {
		for (let i = 0; i < 2; i++) {
			clouds.push({
				x: -200,
				y: Math.random() * canvas.height / 4,
				speed: Math.random() * 2 + 1
			});
		}
	}

	// Draw and move clouds
	function drawClouds() {
		clouds.forEach(function (cloud) {
			ctx.beginPath();
			ctx.arc(cloud.x, cloud.y, 40, 0, Math.PI * 2);
			ctx.arc(cloud.x + 50, cloud.y - 20, 35, 0, Math.PI * 2);
			ctx.arc(cloud.x + 30, cloud.y - 25, 25, 0, Math.PI * 2);
			ctx.fillStyle = 'white';
			ctx.fill();
			moveCloud(cloud)

				;
		});
	}

	function moveCloud(cloud) {
		cloud.x += cloud.speed;
		if (cloud.x > canvas.width + 200) {
			clouds.splice(clouds.indexOf(cloud)

				, 1);
		}
	}

	// Canvas click event
	canvas.addEventListener('click', addClouds);

	// Animation loop
	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawClouds();
		drawSnowflakes();
		requestAnimationFrame(animate);
	}

	animate();
});

'undefined' === typeof _trfq || (window._trfq = []); 'undefined' === typeof _trfd && (window._trfd = []), _trfd.push({ 'tccl.baseHost': 'secureserver.net' }, { 'ap': 'cpsh-oh' }, { 'server': 'p3plzcpnl508282' }, { 'dcenter': 'p3' }, { 'cp_id': '10150489' }, { 'cp_cl': '8' }) // Monitoring performance to make your website faster. If you want to opt-out, please contact web hosting support.