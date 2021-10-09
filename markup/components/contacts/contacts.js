$(document).ready(function(){

  $('.contacts-tabs li').on('click', function(){

    const index = $(this).index()
    $('.contacts-tabs li').removeClass('active')
    $(this).addClass('active')

    $('.contacts-item').removeClass('active')
    $('.contacts-item').eq(index).addClass('active')

  })

})