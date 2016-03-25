angular.module('RoutingApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/home', {
      templateUrl: 'home.html'
    })

    .when('/projects', {
      templateUrl: 'projects.html'
    })

    .when('/repos', {
      templateUrl: 'repos.html'
    })

    .when('/blog', {
      templateUrl: 'blog.html'
    })

    .when('/formContactMe', {
      templateUrl: 'formContactMe.html'
    })

    .when('/login', {
      templateUrl: 'login.html'
    })

    .when('/clickGame', {
      templateUrl: 'clickGame.html'
    })

    .otherwise({
      redirectTo: '/home'
    });

    $locationProvider.html5Mode(true);
  }]);
