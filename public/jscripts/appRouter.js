angular.module('portfolioApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
        templateUrl: '/views/home.html'
    })

    .state('projects', {
      url: '/projects',
      templateUrl: '/views/projects.html'
    })

    .state('/repos', {
      templateUrl: '/views/repos.html'
    })

    .state('/clickGame', {
      templateUrl: '/views/clickGame.html'
    })


    $locationProvider.html5Mode(true);
  }]);
