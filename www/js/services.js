angular.module('coala.services', [])

.service('bearsData', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('http://webservices.coala.io/list/bears')
    .success(function(data) {
      dfd.resolve(data);
    })
    .error(function(data) {
      $http.get('bear.json')
      .success(function (data_err) {
        dfd.resolve(data_err)
      })
      .error(function (data_err) {
        dfd.reject(data_err);
      })
    });
    return dfd.promise;
  };
})
