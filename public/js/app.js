var app = angular.module('MoveOutfits', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}])



app.controller('MainController', ['$http', '$scope', '$routeParams', '$route', function($http, $scope, $routeParams, $route) {

    var self = this;
    $scope.dataLoaded = true;

    //GET ALL CLOTHING VALUES IN DB
    $http({
        url: '/items',
        method: 'GET',
    }).then(function(itemData) {
        console.log(itemData);
        self.itemData = itemData.data;
    });

}]);
// end MainController
