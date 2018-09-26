$('.portfolio_item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

$('.portfolio_menu ul li').click(function() {
    $('.portfolio_menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio_item').isotope({
        filter: selector
    });
    return false;
});