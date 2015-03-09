(function(){
  'use strict';
  
  angular
    .module('contactFormValidation')
    .service('contactFormService', contactFormService);
  
    contactFormService.$inject = ['$http'];
  
    function contactFormService($http) {
      var service = {
        postForm: postForm
      };
      console.log('something');
      return service;
      
      function postForm(formData) {
          $http.post('/contact/try', formData);
      }
    }
  
})();