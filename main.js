$(document).ready(function(){

  $('#toggle').on('click', function(){
    $('.bar').toggleClass('toggle-open');
    $('.overlay').toggleClass('overlay-active');
    $('.close').addClass('close-active');
  });

  $('.overlay-menu-exit').on('click', function(){
    $('.overlay').toggleClass('overlay-active');
    $('.bar').toggleClass('toggle-open');
    $('.close').removeClass('close-active');
  });

});
