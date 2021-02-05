
var myModule = angular.module("myModule", []);

myModule.controller("myController", function ($scope, $http, $log) {

    $scope.insertData = function () {

        console.log("*******");
        console.log($scope.firstName);
        console.log($scope.lastName);
        $scope.students = $http({
            method: "post",
            url: "db_con.php",
            data: {
                firstName: $scope.firstName,
                lastName: $scope.lastName
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
