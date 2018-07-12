var app = angular.module("myApp", []); 
app.controller("myCtrl", function($scope) {
    $scope.user = {};
    $scope.click = function ()
    {
      console.log($scope.user);
    }

});