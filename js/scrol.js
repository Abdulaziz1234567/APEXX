$(function() {
    let link = $('nav ul a');
    link.on('click', function(e) {
        e.preventDefault();
        link.removeClass('active');
        
        
        $('html, body').animate({scrollTop: target.offset().top - 70}, 200)
    })
    

    
    $(window).scroll(function() {
        
        
        if($(this).scrollTop() > 500){
            $('.top').addClass('activ-top');
            $('.box2').addClass('activ-top2');
        }
    
        else{
            $('.top').removeClass('activ-top');
            $('.box2').removeClass('activ-top2');
        }
        
      
        
        let scroll = $(window).scrollTop();
        link.each(function() {
            let selector = $(this).attr('href');
            let target = $(selector);
            
            if(scroll >= target.offset().top - 200){
                link.removeClass('active');
                $(this).addClass('active');
            }
        })
        
    })
    
    $('.top').click(function() {
        $('html, body').animate({scrollTop:0}, 500);
    })
    
    
})