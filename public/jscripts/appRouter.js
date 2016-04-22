angular.module('portfolioApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
        templateUrl: '/views/home-partial.html'
    })

    .state('projects', {
      url: '/projects',
        templateUrl: '/views/projects-partial.html'
    })

    .state('repos', {
      url: '/repos',
        templateUrl: '/views/repos-partial.html'
    })

    .state('clickGame', {
      url: '/clickGame',
      templateUrl: '/views/clickGame.html'
    })


    $locationProvider.html5Mode(true);
  }]);
