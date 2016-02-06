angular.module('ratesApp')
  .config(function($stateProvider){
    $stateProvider.state(
      'rates', {
        url: '/',
        templateUrl: 'app/rates/rates.html',
        controller: 'RatesCtrl'
      }
    );
  });
