angular.module('ratesApp', ['ui.router'])
  .config(['$httpProvider', '$urlRouterProvider', function ($httpProvider, $urlRouterProvider) {
    $httpProvider.defaults.useXDomain =  true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];


    $urlRouterProvider
      .otherwise('/');
  }]);
