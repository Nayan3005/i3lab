//scrolling transition effect//

$("#htr").click(function() {
    $('html, body').animate({
        scrollTop: $("#location").offset().top
    }, 1000);
});

$("#con").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$("#men").click(function() {
    $('html, body').animate({
        scrollTop: $("#team").offset().top
    }, 1000);
});

$("#ai3").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 1000);
});

$("#start").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});


//navbar color change effect//
$(function () {
  $(document).scroll(function () {
    var $nav = $(".header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

//navbar highlight//

// Cache selectors
var lastId,
 topMenu = $("#nav-menu"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

