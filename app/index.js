var app = angular.module('app', []);

app.controller('NotificationsController', [
  '$scope',
  function($scope) {
    function cleanMessage() {
      $scope.message = '';
    }

    $scope.success = function() {
      toastr.success($scope.message);
      cleanMessage();
    };

    $scope.error = function() {
      toastr.error($scope.message);
      cleanMessage();
    };

    $scope.info = function() {
      toastr.info($scope.message);
      cleanMessage();
    };

    $scope.warning = function() {
      toastr.warning($scope.message);
      cleanMessage();
    };
  }
])
