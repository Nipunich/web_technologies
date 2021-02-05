var myApp = angular.module("myModule", ["myApp"]);

var employeeController = myApp.controller("employeeController", function ($scope) {

       $scope.firstName = "Heather",
       $scope.lastName = "Jones",
       $scope.age = 30,
       $scope.address = "Michigan"
});