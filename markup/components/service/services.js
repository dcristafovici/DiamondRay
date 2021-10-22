$(document).ready(function() {

  $(".down-arrow").on('click', function(){
    const next = $(this).closest('section').next()
    $('html, body').animate({
      scrollTop: $(next).offset().top
  }, 2000);
  });
})