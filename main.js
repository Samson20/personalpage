$(document).ready(() => {
 
    $('.drawer-button').on('click', () => {
      $('.drawer').show();
      $('.drawer-button').hide();
      $('body').addClass('drawer-open');
      $('aside').addClass('drawer-open');
      $('.drawer-overlay').show();
    });

    $('.drawer-overlay, aside').on('click', () => {
      $('.drawer-overlay').hide();
      $('.drawer').hide();
      $('.drawer-button').show();
      $('body').removeClass('drawer-open');
      $('aside').removeClass('drawer-open');
    });

});