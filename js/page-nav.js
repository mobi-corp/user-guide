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
headerTag.append('<a>');
$('.sidebar .page-content h2 a:not(:first)').text('Back to top').attr('href', '#top');

