$(window).scroll(function() {

  var scroll = $(window).scrollTop();

  var headerHeight = $(".header-fixed").height();
  console.log(headerHeight);

  if (scroll >= headerHeight) {
      $(".header-fixed").addClass("is-active");
  } else {
      $(".header-fixed").removeClass("is-active");
  }
});