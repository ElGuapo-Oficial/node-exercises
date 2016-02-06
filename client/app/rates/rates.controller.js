'use strict';

angular.module("ratesApp")
.controller('RatesCtrl', ['$scope', '$http', function($scope, $http){
  var transaction;

  $http.get("http://localhost:3000").success(function(data){
    var dataSJON = JSON.parse(data);
    console.log("data from rates", dataSJON.rates);

    $scope.rates = dataSJON.rates;
  });

  function prepareData() {
    var d = new Date();

    transaction = {
      date: d,
      fromName: $scope.rate.from,
      fromValue: $scope.rates[$scope.rate.from],
      toName: $scope.rate.to,
      toValue: $scope.rates[$scope.rate.to],
      inputAmount: $scope.rate.inputValue,
      outputAmount: $scope.rate.result
    }
  }

  $scope.rateConversion = function(){
    $scope.rate.result = ($scope.rates[$scope.rate.to] * $scope.rate.inputValue) / $scope.rates[$scope.rate.from];
    prepareData();
    console.log("va post");
    console.log(transaction);
    $http.post("http://localhost:3000/transaction", transaction).then(function(){
      alert("success");
    });
  }
}]);
