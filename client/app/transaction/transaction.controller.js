'use strict'

angular.module("ratesApp")
.controller('TransactionCtrl', ['$scope', '$http', function($scope, $http){
  // $scope.data;

  $http.get("http://localhost:3000/transaction").then(function(data){
    // var dataSJON = JSON.parse(data);
    console.log("data from transaction", data);
    $scope.transactions = data.data;
  });

}]);
