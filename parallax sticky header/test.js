

var initialPos =  $('#logo').offset().top;

$(window).scroll(function() {
  
    var scrolled = $(window).scrollTop();
  
    if (scrolled > initialPos) {
      
      $('#logo').css({
          position:"fixed",
          top:'0px',
          transform: "scale(0.8)" 
       });
      
    } else {

      var scale = 1 - (scrolled/initialPos);      
      scale = (scale * 1.2) + 0.8;
      
      $('#logo').css({
            position:"absolute",
            top:initialPos+"px",
            transform: "scale("+scale+") translate(0%, -"+scrolled/(scale*scrolled)+"%)"
       });
    }
    
});
