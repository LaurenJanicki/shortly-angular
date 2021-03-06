angular.module('shortly.services', [])

.factory('Links', function ($http) {

  var getLinks = function(callback) {
    return $http.get('/api/links')
      .success(function(response) {
        callback(response);
      });
    };

  var postLink = function(url, callback) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: url
    })
    .then(function(response) {
        console.log('Link added! ', url);
      })
  }
  var visitLink = function(shortCode){
    return $http.get('/api/links/' + shortCode)
      .success(function(data) {
        console.log('HOORAY!');
        console.log(data);
        window.location.href = data;
    })
      .error(function(data, status, headers, config) {
        console.log('Sad Panda...');
        console.log(data);
        console.log(status);
        console.log(headers);

      });
  };

  return {
      getLinks: getLinks,
      postLink: postLink,
      visitLink: visitLink
    };


})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
