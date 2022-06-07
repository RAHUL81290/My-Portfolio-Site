$(window).scroll(function(){
    if(scrollY>20)
    {
        $(".navbar").addClass("active");
    
    }
    else
    {
        $(".navbar").removeClass("active");
        
    }
});

$(".btn i").click(function(){
    $(".nav-items").toggleClass("active1");
    $(".btn i").toggleClass("active1");
});