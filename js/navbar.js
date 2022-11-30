$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('na').addClass('black');
    }
    else{
        $('na').removeClass('black');
    }
})