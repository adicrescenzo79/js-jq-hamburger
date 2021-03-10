var hamburger = $('.fa-bars');
var menuOn = $('.hamburger-menu');

hamburger.click(function (){
  menuOn.addClass('active');
});

var croce = $('.close');

croce.click(function (){
  menuOn.removeClass('active');
});
