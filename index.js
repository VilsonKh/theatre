$(function () {
	// SLIDERS
	$(".slider").slick({
		slidesToShow: 4,
		arrows: false,
	});

	$(".columns__slider").slick({
		sliderToShow: 1,
		nextArrow: ".controls-next",
		prevArrow: ".controls-prev",
	});

	// OPEN BURGER

	$(".burger__btn").on("click", function () {
		$(".burger__menu").addClass("active");
	});

	$(".burger__close").on("click", function () {
		$(".burger__menu").removeClass("active");
	});

	$(".burger__item").on("click", function () {
		$(".burger__menu").removeClass("active");
	});

	// aside positioning
	$(window).ready(asidePositioning);
	$(window).resize(asidePositioning);

	function asidePositioning() {
		if ($(window).width() > "1920") {
			let offset = ($(window).width() - 1920) / 2;
			$(".aside").css("left", `${offset}px`);
		}
	}
});
