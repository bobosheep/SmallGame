app.controller('mainController', ['$scope', function($scope){
    $scope.levels = [{
        level: '1',
        detail: '4 * 4',
    },
    {
        level: '2',
        detail: '5 * 6',
    },
    {
        level: '3',
        detail: '6 * 7',
    }];
    $scope.go = function(levels){
        window.location.href = 'level' + levels.level + '.html';
    };
    $scope.cards = [{
        img: '1',
        name: 'orange',
        src: 'https://goo.gl/u7sXNm',
    },{
        img: '2',
        name: 'banana',
        src:  'https://goo.gl/YWmbS8',
    },{
        img: '3',
        name: 'apple',
        src:  'https://goo.gl/4HcdNb',
    },{
        img: '4',
        name: 'strawberry',
        src:  'https://goo.gl/VLGSVE',
    },{
        img: '5',
        name: 'watermelon',
        src:  'https://goo.gl/KDH9Yg',
    },{
        img: '6',
        name: 'grape',
        src:  'https://goo.gl/3of6tv',
    },{
        img: '7',
        name: 'guava',
        src:  'https://goo.gl/SdXajM',
    },{
        img: '8',
        name: 'lemon',
        src:  'https://goo.gl/pWgCvu',
    },{
        img: '9',
        name: '',
        src:  '',
    },{
        img: '10',
        name: '',
        src:  '',
    },{
        img: '11',
        name: '',
        src:  '',
    },{
        img: '12',
        name: '',
        src:  '',
    },{
        img: '13',
        name: '',
        src:  '',
    },{
        img: '14',
        name: '',
        src:  '',
    },{
        img: '15',
        name: '',
        src:  '',
    },{
        img: '16',
        name: '',
        src:  '',
    },{
        img: '17',
        name: '',
        src:  '',
    },{
        img: '18',
        name: '',
        src:  '',
    },{
        img: '19',
        name: '',
        src:  '',
    },{
        img: '20',
        name: '',
        src:  '',
    }];
}]);