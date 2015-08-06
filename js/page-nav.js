// Select all h2s in the sidebar layout content areas
var headerTag = $('.sidebar .page-content h2');
// Grab all jekyll-generated Ids (pulled from the content of the tag and hyphenated) and create an array
var headerIds = headerTag.map(function() {return this.id;}).get();
// Grab all the header text within the h2 tags and create an array
var headerList = headerTag.map(function() {return this.innerHTML;}).get();


//var headerText = function(){
//  return headerTag.text();
//};

// Create a quick 'back to top' link below each H
var pageNavList = $('#page-nav-list');
//pageNavList.attr('name', 'top');


for (i=0; i < headerList.length; i++) {
  var liTag = $('<li>');
  var aTag = $('<a>');

// This loop populates the pageNavList with the stored header text and wraps it with the link to the
// proper ID name.
  pageNavList.append(liTag);
  liTag.append(aTag);
  aTag.text(headerList[i]).attr('href', '#' + headerIds[i]);

// This part adds the name attribute to each h2 so that the link knows where to go
  headerTag.attr('name', headerIds[i]);
}

// This attaches a link back to the top of the page under each header
//headerTag.append('<a>');
//$('.sidebar .page-content h2 a:not(:first)').text('Back to top').attr('href', '#top');


// --- PAGE NAV DROPDOWN MENU FOR MOBILE USE ---
// Wrapper for select to be styled in with arrow icon since none exist if 
// background:transparent (only checked on iOS right now)
var $pageNavSelectWrapper = $('<div class="select-wrapper"><i class="icon-arrow-down"></i></div>');
// HTML to add a select for internal page navigation on mobile
var $pageNavSelectHTML = $('<select id="pageNavSelect"></select>');

// Append select wrapper to page nav wrapper
$(".nav-wrapper").append($pageNavSelectWrapper);
// Append select element to its wrapper
$pageNavSelectWrapper.append($pageNavSelectHTML);


// This converts the list item anchor's href values to the option values for mobile navigation's select box
$(".page-nav li a").each(function(){
  var $liAnchor = $(this);
  var $option = $("<option></option>");
  
  // Make the option's value equal the link's href value i.e. "#using-route"
  $option.val($liAnchor.attr("href"));
  // Make the inner text of the option equal the link's text
  $option.text($liAnchor.text());
  
  // Add this option to the dropdown
  $pageNavSelectHTML.append($option);
});

// On change of select value, activate the link functionality/move the window location's target
$pageNavSelectHTML.change(function(){
  window.location = $pageNavSelectHTML.val();
});


// NEED TO REVISIT
// Trying to get the page to scroll a bit up to offset the height of the 
// header that is covering the actual anchor internal page link :(

//$("#page-nav-list a").click(function(e){
//  var header_height = $('.site-header').outerHeight();
//  $('html,body').animate({scrollTop: (targetOffset().top) - header_height }, 1000);
//});
//
