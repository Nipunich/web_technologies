
var myModule = angular.module("myModule", ["ngRoute"]);

myModule.controller("addEmployeeController", function ($scope, $http, $log) {

    $scope.insertData = function () {
        console.log("*******");
        console.log($scope.firstName);
        console.log($scope.lastName);
        $scope.students = $http({
            method: "post",
            url: "employee_form.php",
            data: {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                salary: $scope.salary
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
            .then(function (response) {
                $scope.studentsData = response.data;
                $scope.status = response.status;
                $scope.headers = response.headers;
                $scope.config = response.config;
                $scope.config = response.statusText;
                $scope.getData();

                $log.info(response);
            }, function (reason) {
                $scope.error = reason.data;
                alert("Unsuccessful call");
            });
    }

    $scope.getData = function() {
        $http({
            method: "GET",
            url: "get_employee_info.php",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $log.info(response.data);
                $scope.employeeData = response.data;
                $scope.status = response.status;
                $scope.headers = response.headers;
                $scope.config = response.config;
                $scope.statusText = response.statusText;
                $log.info(response);
            }, function (reason) {
                $scope.error = reason.data;
                alert("UnsuccessFull call!");
            });
    }
});

myModule.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
      templateUrl : "home.html"
    })
    .when("/news", {
      templateUrl : "news.html"
    })
    .when("/about", {
      templateUrl : "about_us.html"
    })
    .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
      });
  });