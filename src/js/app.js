import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import slick from 'slick-carousel';

jQuery(function($) {
  $('.slick').slick();
  $('a.toSlide').on('click', function(){
    var id = $(this).data('id');
    $(this).parents('section').find('.slick').slick('slickGoTo', id);
    $(this).parents('section').find('a.toSlide').removeClass('active');
    $(this).addClass('active');
    return false;
  });
});
