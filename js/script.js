$(function () {
	
// bar name fade in 
$('.bar-name').hide().fadeIn(2500);

// text-shadow on menu-items
$('.menu-item').on('mouseenter', event => {
	$(event.currentTarget).addClass('silverShadow');
}).on('mouseleave', event => {
	$(event.currentTarget).removeClass('silverShadow');
});

});

