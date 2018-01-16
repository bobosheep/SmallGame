app.controller('mainController', ['$scope', function($scope){
    $scope.levels = [{
        level: '1',
        detail: '4 * 4',
    },
    {
        level: '2',
        detail: '6 * 6',
    },
    {
        level: '3',
        detail: '8 * 8',
    }
    ];
    $scope.go = function(levels){
        window.location.href = 'level' + levels.level + '.html';
    };
}]);