app.controller('mainController', ['$scope', function($scope){
	$scope.level = '';
	$scope.cards = {
		level1 : [{
	        img: '1',
	        name: 'orange',
	        src: 'https://goo.gl/u7sXNm',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '2',
	        name: 'banana',
	        src:  'https://goo.gl/YWmbS8',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '3',
	        name: 'apple',
	        src:  'https://goo.gl/4HcdNb',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '4',
	        name: 'strawberry',
	        src:  'https://goo.gl/VLGSVE',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '5',
	        name: 'orange',
	        src: 'https://goo.gl/u7sXNm',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '6',
	        name: 'banana',
	        src:  'https://goo.gl/YWmbS8',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '7',
	        name: 'apple',
	        src:  'https://goo.gl/4HcdNb',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '8',
	        name: 'strawberry',
	        src:  'https://goo.gl/VLGSVE',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '9',
	        name: 'watermelon',
	        src:  'https://goo.gl/KDH9Yg',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '10',
	        name: 'grape',
	        src:  'https://goo.gl/3of6tv',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '11',
	        name: 'guava',
	        src:  'https://goo.gl/SdXajM',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '12',
	        name: 'lemon',
	        src:  'https://goo.gl/pWgCvu',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '13',
	        name: 'watermelon',
	        src:  'https://goo.gl/KDH9Yg',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '14',
	        name: 'grape',
	        src:  'https://goo.gl/3of6tv',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '15',
	        name: 'guava',
	        src:  'https://goo.gl/SdXajM',
	        or_src: 'https://goo.gl/KLNiWb',
	        pair: false,
	        state: true
	    },{
	        img: '16',
	        name: 'lemon',
	        src:  'https://goo.gl/pWgCvu',//正面
	        or_src: 'https://goo.gl/KLNiWb',//背面
	        pair: false,
	        state: true
	    }],
	    level2:[{}],
	    level3:[{}]
	};
    $scope.openCard = -1;
    $scope.finish = false;
    $scope.firstCard = '';
    $scope.secondCard = '';
    $scope.start = true;
    $scope.timing = 0.0;
    var st;
    //console.log($scope.level);
    //console.log($scope.cards[$scope.level][1]);
    $scope.startClock = function(){
        st = setTimeout(function(){
            $scope.$apply($scope.timing += 0.1);  
            $scope.startClock();
        }, 100);
    };
    $scope.shuffleCards = function(){
        $scope.cards[$scope.level].sort(function(){ return 0.5 - Math.random()});
    };

    $scope.coverAllCards = function(){
        var maplist = [];
        $scope.shuffleCards();
        for(let i = 0 ; i < 16 ; i++){
            var id = '#img'+$scope.cards[$scope.level][i].img;
            var tmp1 = setTimeout(function(){
                $scope.$apply(function(){
                    $scope.cards[$scope.level][i].state = true;
                    $scope.cards[$scope.level][i].pair = false;
                });
            },0);
            
            $(id).css({'position':'fixed'});
            $(id).animate({
                left: '45vw',
                top: '15vw',
            }, 'slow');
        }
        
       //    setTimeout(function(){
            for(let i = 0 ; i < 16 ; i++){
                var id = '#img'+$scope.cards[$scope.level][i].img;
                
                $(id).animate({
                    left: 'auto',
                    top: 'auto',
                }, 'slow');
            }
        //}, 600);
        var t1 = setTimeout(function(){
            for(let i = 0 ; i < 16 ; i++){
                var id = '#img'+$scope.cards[$scope.level][i].img;
                $(id).css({'position':'static',  'left': 'auto', 'top': 'auto'});
            
            }
        }, 1700);
       
        $scope.timing = 0.0;
        $scope.start = true;
        $scope.openCard = -1;
        clearTimeout(st);
        //clearTimeout(t1);
    };
$scope.back = function(){
        window.location.href = 'index.html';
    };
    $scope.check = function(id){
        if($scope.openCard === -1){
            $scope.startClock();
            $scope.openCard = 1;
        }
        
	console.log($scope.level);
        if(id.state){
            if($scope.openCard === 2){
                $scope.secondCard = id.name;
                //console.log(id.img);
                if($scope.secondCard === $scope.firstCard){
                    for(let i = 0 ; i < 16 ; i++){
                    var tis = $scope.cards[$scope.level][i];
                        if(tis.name === $scope.firstCard){
                            //console.log(tis.name);
                            $scope.cards[$scope.level][i].pair = true;
                        }
                    }
                }
                var cnt = 0;
                for(let i = 0; i < 16 ; i++){
                    if($scope.cards[$scope.level][i].pair){
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
                    var tis = $scope.cards[$scope.level][i];
                    if(!tis.state && !tis.pair){
                        setTimeout(function(){
                            $scope.$apply($scope.cards[$scope.level][i].state = true);
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