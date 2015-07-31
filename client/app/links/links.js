angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = [];
  $scope.getLinks = Links.getLinks;
  
  console.log('---------> HI DAVE AND LAUREN!!!!');

  //  Links.getLinks = function() {
  //    //return [{},{},{}];
  // }

  $scope.getLinks(function(data) {
    $scope.data.links = data;
    console.log("data is: ", data);
  });
});
