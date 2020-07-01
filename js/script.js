var rellax = new Rellax('.rellax', {
    // center: true
    callback: function(position) {
      // callback every position change
      console.log(position);
    }
  });

  //scrollTo
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    var plus = $(window).innerHeight() / 100 * 25;
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - (plus/2)
        }, 1000);
    }
    // var widthWindow = $(window).width();
    // if (widthWindow <= 1024){
    //   $('header').fadeToggle(400);
    // } 
});