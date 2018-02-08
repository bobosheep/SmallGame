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
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '2',
        name: 'banana',
        src:  'https://goo.gl/YWmbS8',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '3',
        name: 'apple',
        src:  'https://goo.gl/4HcdNb',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '4',
        name: 'strawberry',
        src:  'https://goo.gl/VLGSVE',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '5',
        name: 'orange',
        src: 'https://goo.gl/u7sXNm',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '6',
        name: 'banana',
        src:  'https://goo.gl/YWmbS8',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '7',
        name: 'apple',
        src:  'https://goo.gl/4HcdNb',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '8',
        name: 'strawberry',
        src:  'https://goo.gl/VLGSVE',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '9',
        name: 'watermelon',
        src:  'https://goo.gl/KDH9Yg',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '10',
        name: 'grape',
        src:  'https://goo.gl/3of6tv',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '11',
        name: 'guava',
        src:  'https://goo.gl/SdXajM',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '12',
        name: 'lemon',
        src:  'https://goo.gl/pWgCvu',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '13',
        name: 'watermelon',
        src:  'https://goo.gl/KDH9Yg',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '14',
        name: 'grape',
        src:  'https://goo.gl/3of6tv',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '15',
        name: 'guava',
        src:  'https://goo.gl/SdXajM',
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',
        pair: false,
        state: true
    },{
        img: '16',
        name: 'lemon',
        src:  'https://goo.gl/pWgCvu',//正面
        or_src: 'https://upload.wikimedia.org/wikipedia/zh/thumb/5/5d/National_Chung_Cheng_University_logo.svg/1074px-National_Chung_Cheng_University_logo.svg.png',//背面
        pair: false,
        state: true
    }];
    $scope.openCard = -1;
    $scope.finish = false;
    $scope.firstCard = '';
    $scope.secondCard = '';
    $scope.start = true;
    $scope.timing = 0.0;
    var st;
    $scope.startClock = function(){
        st = setTimeout(function(){
            $scope.$apply($scope.timing += 0.1);  
            $scope.startClock();
        }, 100);
    };
    $scope.shuffleCards = function(){
        $scope.cards.sort(function(){ return 0.5 - Math.random()});
    };
    $scope.coverAllCards = function(){
        for(let i = 0 ; i < 16 ; i++){
            var tis = $scope.cards[i];
            setTimeout(function(){
                $scope.$apply(function(){
                    $scope.cards[i].state = true;
                    $scope.cards[i].pair = false;
                });
            }, 0);
        }

        $scope.timing = 0.0;
        $scope.start = true;
        $scope.openCard = -1;
        clearTimeout(st);
        $scope.shuffleCards();
    };
    $scope.go = function(l){
        $scope.coverAllCards();
        window.location.href = 'level' + l.level + '.html';
        
    };
    $scope.back = function(){
        window.location.href = 'index.html';
    };
    $scope.check = function(id){
        if($scope.openCard === -1){
            $scope.startClock();
            $scope.openCard = 1;
        }

        if(id.state){
            if($scope.openCard === 2){
                $scope.secondCard = id.name;
                console.log(id.img);
                if($scope.secondCard === $scope.firstCard){
                    for(let i = 0 ; i < 16 ; i++){
                    var tis = $scope.cards[i];
                        if(tis.name === $scope.firstCard){
                            console.log(tis.name);
                            $scope.cards[i].pair = true;
                        }
                    }
                }
                var cnt = 0;
                for(let i = 0; i < 16 ; i++){
                    if($scope.cards[i].pair){
                        cnt++;
                    }
                }
                
                if(cnt === 16){
                    //$scope.$apply();
                    window.alert('Finish'+ $scope.timing.toFixed(2));
                    clearTimeout(st);
                    cnt = 0;
                }

            
                $scope.openCard--;
                setTimeout(function(){
                    $scope.$apply(function(){
                       id.state = false;
                    });
                }, 0);

            }
            else if($scope.openCard === 1){
                
                for(let i = 0 ; i < 16 ; i++){
                    var tis = $scope.cards[i];
                    if(!tis.state && !tis.pair){
                        setTimeout(function(){
                            $scope.$apply($scope.cards[i].state = true);
                        }, 0);
                        
                    }
                }

                $scope.firstCard = id.name;
                $scope.openCard++;
                setTimeout(function(){
                    $scope.$apply(id.state = false);
                }, 0);
            }
        }
        
    };
    
}]);