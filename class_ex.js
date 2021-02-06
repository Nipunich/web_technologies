
var myModule = angular.module("myModule", []);

myModule.controller("addEmployeeController", function ($scope, $log, $http) {

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
                salary:$scope.salary
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
            .then(function (response) {
                $scope.studentsData = response.data;
                $scope.status = response.status;
                $scope.headers = response.headers;
                $scope.config = response.config;
                $scope.config = response.statusText;

                $log.info(response);
            }, function (reason) {
                $scope.error = reason.data;
                alert("Unsuccessful call");
            });
    }
});
