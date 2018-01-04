app.controller('mainController', ['$scope', function($scope){
    $scope.levels = [{
        level: '1',
        detail: '4 * 4',
    },
    {
        level: '2',
        detail: '5 * 5',
    },
    {
        level: '3',
        detail: '6 * 6',
    }
    ];
    $scope.go = function(levels){
        window.location.href = 'level' + levels.level + '.html';
    };
}]);