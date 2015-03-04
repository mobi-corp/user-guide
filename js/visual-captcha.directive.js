(function() {
  'use strict';
  
  angular
    .module('contactFormValidation')
    .directive('visualCaptcha', visualCaptchaDirective);
  
  function visualCaptchaDirective() {
    var directive = {
      restrict: 'EA',
      template: '<div id="visual-captcha"></div>',
      scope: {
        visualCaptchaObj: '='
      },
      controller: VisualCaptchaController
    };
    
    return directive;
    
  }

  VisualCaptchaController.$inject = ['$scope'];
  
  function VisualCaptchaController($scope) {
    $scope.visualCaptchaObj = visualCaptcha( 'visual-captcha', {
      imgPath: '/images/',
      captcha: { numberOfImages: 5 }
    } );
  }
})();



//( function( visualCaptcha ) {
//  var captcha = visualCaptcha( 'visual-captcha', {
//    imgPath: '/images/',
//    captcha: { numberOfImages: 5 }
//  } );
//})(visualCaptcha);