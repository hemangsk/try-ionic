angular.module('coala.controllers', [])

.controller('AppCtrl', function ($scope) {

})

.controller('HomeCtrl', function ($scope) {

})

.controller('BearCtrl', function ($http, $scope, bearsData) {
  $scope.bears = {};
  bearsData.get()
  .then(function(b){
    $scope.bears = b;
  
  },function(err){

  });
})
