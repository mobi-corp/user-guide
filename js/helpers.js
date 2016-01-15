// Make external links open in a new tab

var externalLinks = $('a[href*="www."]');

externalLinks.attr('target', '_blank');

// Toggle search icon on

var tipueSearchToggleIcon = $('.search-icon');
var tipueSearchInput = $('.tipue-search-form input');
var tipueSearchForm = $('.tipue-search-form');

tipueSearchToggleIcon.click(function() {
  tipueSearchForm.slideToggle(600, "swing");
});

// Vendor

//Tipuesearch, Sticky JS, scrollTos
$(document).ready(function() {
  $('.site-header').sticky({});
  $('.products .site-header').on("sticky-start", function() {

    $('.tabs').append('<a class="top" style="display: inline-block;">Back to top</a>');

    // Hide the header (on mobile only)
    $('.top-header').addClass('hidden');

    // Back to top link scroll
    $('.top').click(function (event) {
      console.log('it works!');
      event.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700, 'swing');
    });

  }).on("sticky-end", function() {
    $('.tabs .top').remove();

    // Show the header again (on mobile only)
    $('.top-header').removeClass('hidden');
  });

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  $('#tipue_search_input').tipuesearch();

});
