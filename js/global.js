$(function(){


  var headerController = new ScrollMagic.Controller();

  var headerScene = new ScrollMagic.Scene({
      offset: $('header').offset().top,
      triggerHook: 'onLeave'
  }).addTo(headerController).setPin('header');

  var $p = $('#panimation');
  console.log($p);

  var pScene = new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    offset: 300
  }).addTo(headerController).setClassToggle($p, 'show').addIndicators();

});
