angular.module('coala.services', [])

.service('bearsData', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('bears.json')
    .success(function(data) {
      dfd.resolve(data);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
})
