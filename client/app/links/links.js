angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = [];
  $scope.getLinks = Links.getLinks;
  
  //  Links.getLinks = function() {
  //    //return [{},{},{}];
  // }

  $scope.getLinks(function(data) {
    $scope.data.links = data;
    console.log("data is: ", $scope.data.links);
  });
});
