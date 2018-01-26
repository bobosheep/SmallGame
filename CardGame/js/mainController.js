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
    $scope.cards = [{
        img: '1',
        name: 'orange',
        src: 'https://goo.gl/u7sXNm',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '2',
        name: 'banana',
        src:  'https://goo.gl/YWmbS8',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '3',
        name: 'apple',
        src:  'https://goo.gl/4HcdNb',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '4',
        name: 'strawberry',
        src:  'https://goo.gl/VLGSVE',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '5',
        name: 'orange',
        src: 'https://goo.gl/u7sXNm',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '6',
        name: 'banana',
        src:  'https://goo.gl/YWmbS8',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '7',
        name: 'apple',
        src:  'https://goo.gl/4HcdNb',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '8',
        name: 'strawberry',
        src:  'https://goo.gl/VLGSVE',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '9',
        name: 'watermelon',
        src:  'https://goo.gl/KDH9Yg',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '10',
        name: 'grape',
        src:  'https://goo.gl/3of6tv',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '11',
        name: 'guava',
        src:  'https://goo.gl/SdXajM',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '12',
        name: 'lemon',
        src:  'https://goo.gl/pWgCvu',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '13',
        name: 'watermelon',
        src:  'https://goo.gl/KDH9Yg',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '14',
        name: 'grape',
        src:  'https://goo.gl/3of6tv',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '15',
        name: 'guava',
        src:  'https://goo.gl/SdXajM',
        or_src: 'https://goo.gl/fxQFZG',
        pair: false,
        state: true
    },{
        img: '16',
        name: 'lemon',
        src:  'https://goo.gl/pWgCvu',//正面
        or_src: 'https://goo.gl/fxQFZG',//背面
        pair: false,
        state: true
    }];
    $scope.openCard = 0;
    $scope.finish = false;
    $scope.firstCard = '';
    $scope.go = function(l){
        window.location.href = 'level' + l.level + '.html';
        
    };
    $scope.shuffleCards = function(){
        $scope.cards.sort(function(){ return 0.5 - Math.random()});
    };
    $scope.coverAllCards = function(){
        for(let i = 0 ; i < 16 ; i++){
           // for(let j = 0; j < 4 ; j++){
                var tis = $scope.cards[i];
                setTimeout(function(){
                    $scope.cards[i].state = true;
                }, 0);
           // }
        }
        $scope.shuffleCards();
    };
    $scope.check = function(id){
        if(id.state)   {
            $scope.openCard++;
            id.state = false;
        }
        if($scope.openCard === 1){
            $scope.firstCard = id.name;
            console.log(id.img);
        }
        else if($scope.openCard === 2){
            
            //sleep(1000);
            
            if(id.name === $scope.firstCard){
                for(let i = 0 ; i < 16 ; i++){
                    //for(let j = 0; j < 4 ; j++){
                        var tis = $scope.cards[i];
                        if(tis.name === $scope.firstCard){
                            console.log(tis.name);
                            $scope.cards[i].pair = true;
                            //alert('paired');
                        }
                   // }
                }
            }

            $scope.openCard = 0;
            
            
            for(let i = 0 ; i < 16 ; i++){
                //for(let j = 0; j < 4 ; j++){
                    var tis = $scope.cards[i];
                    if(!tis.state && !tis.pair){
                        setTimeout(function(){
                            $scope.cards[i].state = true;
                        }, 0);
                        
                    }
                //}
            }
            
        
        }
        
        
    };
    
}]);