(function () {
  'use strict';
  
  // Angular form validation (scotch, ngMessages)

  angular
    .module('contactFormValidation')
    .controller('contactFormController', contactFormController);
  
    contactFormController.$inject = ['contactFormService', '$scope'];

    function contactFormController(contactFormService, $scope) {
      // function to submit the form after all validation has occurred
      $scope.captcha = 'it works';
      $scope.submitForm = submitForm;
      $scope.isCaptchaSelected = false;
      
      $scope.formInputs = {
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        email: '',
        issueArea: '',
        issueType: '',
        description: ''
      };
      
      $scope.captchaOptions = {
        imgPath: '/images/',
        captcha: { numberOfImages: 3 },
        init: function(captcha) {
          $scope.captcha = captcha;
          console.log($scope.captcha);
        }
      };

      function submitForm (isValid) {
        console.log($scope.captcha.getCaptchaData());
        console.log($scope.formInputs);
        // check to make sure the form is completely valid
        if (isValid) {
          contactFormService.postForm($scope.formInputs);
          console.log($scope.formInputs);
        }
      }
      
      function isCaptchaSelected () {
        if ($scope.captcha) {
          return $scope.captcha.getCaptchaData().valid;
        }
        return false;
      }
      
      $scope.$watch('captcha', function(newval, oldval){
        console.log(newval);
        console.log(oldval);
      })
    }
  
}());