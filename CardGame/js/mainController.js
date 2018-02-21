var app = angular.module('myApp', []);
app.controller('mainController', ['$scope', function($scope){
    $scope.levels = [{
        level: '1',
        detail: '4 * 4',
        col: '4',
        row: '4'
    },
    {
        level: '2',
        detail: '5 * 6',
        col: '5',
        row: '6'
    },
    {
        level: '3',
        detail: '6 * 7',
        col: '6',
        row: '7'
    }];
    
    $scope.go = function(l){
        window.location = 'level' + l+'.html';
    };
    
    
}]);
