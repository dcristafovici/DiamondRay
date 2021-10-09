$(document).ready(function(){

  const exSlides = $('.examples-item.active .examples-item__slides')
  exSlides.slick({
    slidesToShow: 1,
    fade: true,
    arrows: false
  })


  $('.examples-tabs li').on('click', function(){

    let index = $(this).index()

    $('.examples-tabs li').removeClass('active')
    $(this).addClass('active')

    $('.examples-item').removeClass('active')
    $('.examples-item').eq(index).addClass('active')
    $(exSlides).slick('unslick');

    const exSlides = $('.examples-item').eq(index).find('.examples-item__slides')
    console.log(exSlides);
    exSlides.slick({
      slidesToShow: 1,
      fade: true,
      arrows: false
    })
  })
})