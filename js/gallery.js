$(document).ready(function(){
    $(".btn").click(function(){
    $(".btn").removeClass('selected');
    $(this).addClass('selected');
    var value = $(this).attr('data-filter');

    if(value == "all")
    {
            $('.filter').fadeIn('3000');
    }
    else
    {
        $(".filter").not('.'+value).fadeOut('3000');
        $('.filter').filter('.'+value).fadeIn('3000');
        
    }
});
});