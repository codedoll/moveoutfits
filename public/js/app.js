var app = angular.module('MoveOutfits', ['ngRoute', angularDragula(angular)])


app.controller('MainController', ['$http', '$scope', '$routeParams', '$route', 'dragulaService', function($http, $scope, $routeParams, $route, dragulaService) {

    var self = this;

    //Get all the items in DB
    $http({
        url: '/items',
        method: 'GET',
    }).then(function(itemData) {
        // console.log(itemData);
        $scope.itemData = itemData.data;
    });

    // Gets the updated order of items via Classname ".itemName"
    this.reorderItem = function() {
        var newOrder = []
    
        $('.itemName').each(function(index) {
            newOrder.push(this.id);
        });

        this.sendNewOrder(newOrder);
    };

    // Sends the updated order to database
    this.sendNewOrder = function(newOrder) {
        $http({
            method: 'PUT',
            url: '/saveNewOrder',
            data: newOrder
        }).then(function(result) {
            console.log(result);
        });
    };
}]);
// end MainController
