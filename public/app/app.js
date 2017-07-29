angular.module('app', ['ngResource', 'ngRoute'])

.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl : '/app/view/main.htm', controller: 'mainCtrl'})
})

.controller('mainCtrl', function($scope){
    $scope.myVar = 'It works!';
});