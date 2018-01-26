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
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '2',
        name: 'banana',
        src:  'https://goo.gl/YWmbS8',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false

    },{
        img: '3',
        name: 'apple',
        src:  'https://goo.gl/4HcdNb',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '4',
        name: 'strawberry',
        src:  'https://goo.gl/VLGSVE',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    }],[{
        img: '5',
        name: 'orange',
        src: 'https://goo.gl/u7sXNm',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '6',
        name: 'banana',
        src:  'https://goo.gl/YWmbS8',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '7',
        name: 'apple',
        src:  'https://goo.gl/4HcdNb',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '8',
        name: 'strawberry',
        src:  'https://goo.gl/VLGSVE',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    }],[{
        img: '9',
        name: 'watermelon',
        src:  'https://goo.gl/KDH9Yg',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '10',
        name: 'grape',
        src:  'https://goo.gl/3of6tv',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '11',
        name: 'guava',
        src:  'https://goo.gl/SdXajM',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '12',
        name: 'lemon',
        src:  'https://goo.gl/pWgCvu',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    }],[{
        img: '13',
        name: 'watermelon',
        src:  'https://goo.gl/KDH9Yg',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '14',
        name: 'grape',
        src:  'https://goo.gl/3of6tv',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '15',
        name: 'guava',
        src:  'https://goo.gl/SdXajM',
        or_src: 'https://goo.gl/fxQFZG',
        open: false,
        pair: false
    },{
        img: '16',
        name: 'lemon',
        src:  'https://goo.gl/pWgCvu',//正面
        or_src: 'https://goo.gl/fxQFZG',//背面
        open: false,
        pair: false
    }]];
    $scope.openCard = 0;
    $scope.firstCard = '';
    $scope.go = function(l){
        window.location.href = 'level' + l.level + '.html';
        
    };
    $scope.check = function(id){
        if(id.open === false)
        {
            $scope.openCard++;
            id.open = true;
        }
        id.or_src = id.src;
        if($scope.openCard === 1){
            $scope.firstCard = id.name;
        }
        else if($scope.openCard === 2){
            
            //sleep(1000);
            
            if(id.name === $scope.firstCard){
                for(let i = 0 ; i < 4 ; i++){
                    for(let j = 0; j < 4 ; j++){
                        var tis = $scope.cards[i][j];
                        if(tis.name === $scope.firstCard){
                            console.log(tis.name);
                            $scope.cards[i][j].pair = true;
                            //alert('paired');
                        }
                    }
                }
            }

            $scope.openCard = 0;
            
            //var tis = angular.forEach($scope.cards);
            //console.log()
         
            
            for(let i = 0 ; i < 4 ; i++){
                for(let j = 0; j < 4 ; j++){
                    var tis = $scope.cards[i][j];
                    if(tis.open === true && tis.pair === false){
                        setTimeout(function(){
                            $scope.cards[i][j].or_src = 'https://goo.gl/fxQFZG';
                            $scope.cards[i][j].open = false;
                        }, 1000);
                        
                    }
                }
            }
            
        
        }
        
        
    };
    
}]);