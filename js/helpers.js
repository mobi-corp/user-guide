// Make external links open in a new tab

var externalLinks = $('a[href*="www."]');

externalLinks.attr('target', '_blank');