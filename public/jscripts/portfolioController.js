angular.module('portfolioApp')
.controller('portfolioController', function($scope, $http) {
  //submits the information from the contact me form
  $scope.submitContactMe = function() {
    console.log($scope.contactFirstName);
    $http.post('/contactMe', {
      firstName: $scope.contactFirstName,
      lastName: $scope.contactLastName,
      organization: $scope.contactOrganization,
      email: $scope.contactEmail})
    .then(function(contactMeResponse) {
      //$scope.contactMeRequests = contactMeResponse.data;
      console.log(contactMeResponse.data);
    });
  }

});
