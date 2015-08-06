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

// Toggle navigation menu

var navMenuToggleIcon = $('.menu-icon');
var trigger = $('.trigger');

navMenuToggleIcon.click(function(){
  trigger.toggle();
});

// Vendor

//Tipuesearch, Sticky JS
$(document).ready(function() {
  $('#tipue_search_input').tipuesearch();
  $('.site-header').sticky({});
  $('.site-header').on("sticky-start", function() {
    $('.tabs').append('<a href="#" class="top" style="display: inline-block;">Back to top</a>');
  }).on("sticky-end", function() {
    $('.tabs .top').remove();
  });
});
