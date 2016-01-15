var hamburgerIcon = $(".menu-icon");
var searchIcon = $(".search-icon");
var siteNav = $(".site-nav");
var pageId = $('body').prop("id").toLowerCase();
var menuItems = $('.menu-item');
var products = ['appointment', 'plan', 'resource', 'territory', 'dispatch', 'route', 'locate', 'connect',
                'result', 'insight'];


// --- MAIN PAGE NAVIGATION (HAMBURGER ICON) ---

// Toggle animation for menu when clicking hamburger icon (desktop)

function toggleMenuIcon($icon){
  $icon.toggleClass("icon-toggled", 'linear');
}

searchIcon.click(function() {
  toggleMenuIcon($(this));
});

hamburgerIcon.click(function() {
  siteNav.animate({width: 'toggle'});
  toggleMenuIcon($(this));
  $(this).toggleClass("icon-list-plain icon-x", 'linear');
});


// Get page id of current page to either add or remove the selected class for styling purposes
menuItems.each(function(i){
  // If menu item has same innerHtml value as the page id value, set class name to "selected"
  if ( pageId.toLowerCase() === menuItems[i].innerText.toLowerCase() ) {
    $(this).addClass("selected");
  } else {
    // Remove selected from siblings
    $(this).removeClass("selected");
  }
});

// --- HEADER TABS ---
// Currently only for .main (User manual) and .faq (FAQ) per each product
// Markup is in header.html include
// Sass is in _header.scss

// If page id is a product name then show the tabs
for ( var i = 0; i < products.length; i++ ) {
  if ( products[i].toLowerCase() === pageId ) {
    // Then show tab items
    console.log(products[i].toLowerCase());
    console.log(pageId);
    $(".tabs a").hide();
  }
}

// Due to the way jekyll grabs the page title, a space before the faq in ("route faq") leaves
// faq as a random undefined attribute so I identify the FAQ page using this.
// Also, $("body") on its own was failing without an index
if ( $("body")[0].hasAttribute("faq") ) {
  $(".tabs .main").attr("href", "../");
  $(".tabs .faq").addClass("selected");
} else {
  $(".tabs .faq").attr("href", "../" + pageId + "/faq");
  $(".tabs .main").addClass("selected");
}

