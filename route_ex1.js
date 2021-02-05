var myModule = angular.module("myModule", ["ngRoute"]);

myModule.config(function($routeProvider) {
    $routeProvider
                .when("/",{
                    templateUrl:"labelex_2.html"
                })
                .when("/red", {
                    templateUrl:"view_model.html"
                })
                .when("/green", {
                    templateUrl:"view_model.html"
                })
                .otherwise({
                    template : "<h1> Nothing matched </h1>"
                });
});

myModule.controller("myController", function ($scope) {
   
});