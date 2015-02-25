var headerTag = $('.products .page-content h2');
var headerIds = headerTag.map(function() {return this.id;}).get();
var headerList = headerTag.map(function() {return this.innerHTML;}).get();
var headerText = function(){
  return headerTag.text();
};
var pageNavList = $('#page-nav-list');
pageNavList.attr('name', 'top');

for (i=0; i < headerList.length; i++) {
  var liTag = $('<li>');
  var aTag = $('<a>');
  
  pageNavList.append(liTag);
  liTag.append(aTag);
  aTag.text(headerList[i]).attr('href', '#' + headerIds[i]);

  headerTag.attr('name', headerIds[i]);
}

headerTag.append('<a>');
$('.products .page-content h2 a:not(:first)').text('Back to top').attr('href', '#top');

