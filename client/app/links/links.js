angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = [];
  $scope.getLinks = Links.getLinks;
  
  $scope.visitLink = Links.visitLink;
  // $scope.visitLink = function(shortCode) {
  //   Links.visitLinks(shortCode);
  //   alert('It works!');
  // };

  $scope.getLinks(function(data) {
    $scope.data.links = data;
    console.log("data is: ", $scope.data.links);
  });

});
