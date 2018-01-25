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
    $scope.cards = [[{
        img: '1',
        name: 'orange',
        src: 'https://goo.gl/u7sXNm',
        open: false,
        pair: false
    },{
        img: '2',
        name: 'banana',
        src:  'https://goo.gl/YWmbS8',
        open: false,
        pair: false

    },{
        img: '3',
        name: 'apple',
        src:  'https://goo.gl/4HcdNb',
        open: false,
        pair: false
    },{
        img: '4',
        name: 'strawberry',
        src:  'https://goo.gl/VLGSVE',
        open: false,
        pair: false
    }],[{
        img: '5',
        name: 'orange',
        src: 'https://goo.gl/u7sXNm',
        open: false,
        pair: false
    },{
        img: '6',
        name: 'banana',
        src:  'https://goo.gl/YWmbS8',
        open: false,
        pair: false
    },{
        img: '7',
        name: 'apple',
        src:  'https://goo.gl/4HcdNb',
        open: false,
        pair: false
    },{
        img: '8',
        name: 'strawberry',
        src:  'https://goo.gl/VLGSVE',
        open: false,
        pair: false
    }],[{
        img: '9',
        name: 'watermelon',
        src:  'https://goo.gl/KDH9Yg',
        open: false,
        pair: false
    },{
        img: '10',
        name: 'grape',
        src:  'https://goo.gl/3of6tv',
        open: false,
        pair: false
    },{
        img: '11',
        name: 'guava',
        src:  'https://goo.gl/SdXajM',
        open: false,
        pair: false
    },{
        img: '12',
        name: 'lemon',
        src:  'https://goo.gl/pWgCvu',
        open: false,
        pair: false
    }],[{
        img: '13',
        name: 'watermelon',
        src:  'https://goo.gl/KDH9Yg',
        open: false,
        pair: false
    },{
        img: '14',
        name: 'grape',
        src:  'https://goo.gl/3of6tv',
        open: false,
        pair: false
    },{
        img: '15',
        name: 'guava',
        src:  'https://goo.gl/SdXajM',
        open: false,
        pair: false
    },{
        img: '16',
        name: 'lemon',
        src:  'https://goo.gl/pWgCvu',
        open: false,
        pair: false
    }]];
    $scope.openCard = 0;
    $scope.go = function(l){
        window.location.href = 'level' + l.level + '.html';
        
    };
    $scope.check = function(id){
        $scope.openCard++;
        id.open = true;
        var img = '#img' + id.img;
        $(img).attr("src", id.src);
        if($scope.openCard === 3){
            function sleep(milliseconds) {
                var start = new Date().getTime();
                for (var i = 0; i < 1e7; i++) {
                    if ((new Date().getTime() - start) > milliseconds){
                        break;
                    }
                }
            }
            sleep(1000);
            $scope.openCard = 0;
            for(let i = 0 ; i < 4 ; i++){
                for(let j = 0; j < 4 ; j++){
                    var tis = $scope.cards[i][j];
                    if(tis.open === true && tis.pair === false){
                        var ig = '#img' + tis.img;
                        $(ig).attr("src", "https://goo.gl/fxQFZG");
                        $scope.cards[i][j].open = false;
                    }
                }
            }

        
        }
        
    };
    
}]);