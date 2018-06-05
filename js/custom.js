var expandMenu;
(function($) {
    "use strict";
    if ($('.scroll-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.scroll-top').addClass('show');

                } else {
                    $('.scroll-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
            
        });
        $('.scroll-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    
    $(".nav-toggle").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".header .menu-content").removeClass("open");    
            $(".overlay-common").removeClass("show"); 
        }else{
            $(this).addClass("active");
            $(".header .menu-content").addClass("open");    
            $(".overlay-common").addClass("show"); 
        }
        

    });
    $(".overlay-common").click(function(){
        $(".header .menu-content").removeClass("open");
        $(".nav-toggle").removeClass("active");
        $(this).removeClass("show");
    });
    $(".header .menus a").click(function(){
        var dropdown=$(this).parent().find(".dropdown");
        if(dropdown.length){
            $(this).removeAttr("href");
            $(this).parent().siblings().removeClass("active");
            $(this).parent().toggleClass("active");
        }
       
    });
    

})(jQuery);
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});

function makeResizable(element){
    if (element && jQuery(element).length){
        var $el = jQuery(element);
        var elHeight = $el.outerHeight();
        var elWidth = $el.outerWidth();

        var $wrapper = $el.parent();

        var starterData = {
            size: {
                width: $wrapper.width(),
                height: $wrapper.height()
            }
        }
        var scale = Math.min(
            starterData.size.width / $el.outerWidth(),
            starterData.size.height / $el.outerHeight()
        );
        if (scale > 1){
            scale = 1;
        }
        var elMarginBottom = (scale * elHeight) - starterData.size.height;
        $el.css({
            transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
            'margin-bottom': elMarginBottom
        });
    }
}

jQuery(document).ready(function() {
    makeResizable('.very-specific-design');
   $(".very-specific-design").parent().css({"overflow":"hidden"});
   
});
// jQuery(window).load(function() {
// //  makeResizable('#banner');
//      setInterval(makeResizable('.very-specific-design'),1000);
// });
jQuery(window).resize(function() {
    $('.very-specific-design').attr("style","");
    makeResizable('.very-specific-design');
    
    $(".very-specific-design").parent().css({"overflow":"hidden"});
    

    
});

$(document).ready(function() {
    $('.list-menus a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior
        var header_h=$(".header").height() + 20;
        var target = $(this).attr("href"); // Set the target as variable
        var targetOffset=$(target).offset().top - header_h;
        if(target!="" && target!="#"){
            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html,body').animate({
            scrollTop:targetOffset},
            'slow');
        }

        return false;   
    });
});


        
