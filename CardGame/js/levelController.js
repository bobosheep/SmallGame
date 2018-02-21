var app = angular.module('myApp', []);
app.controller('levelController', ['$scope', function($scope){
	$scope.level = '';
	$scope.cards = {
		///level1 cards src///
		level1 : [{
	        img: '1',
	        name: 'orange',
	        src: 'image/level1/orange.jpg',
	        or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '2',
	        name: 'banana',
	        src: 'image/level1/banana.jpg',
			or_src: 'image/ccu.png',
			pair: false,
	        state: true
	    },{
	        img: '3',
	        name: 'apple',
	        src: 'image/level1/apple.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '4',
	        name: 'strawberry',
	        src: 'image/level1/strawberry.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '5',
	        name: 'orange',
	        src: 'image/level1/orange.jpg',
	        or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '6',
	        name: 'banana',
	        src: 'image/level1/banana.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '7',
	        name: 'apple',
			src: 'image/level1/apple.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '8',
	        name: 'strawberry',
	        src: 'imagelevel1//strawberry.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '9',
	        name: 'watermelon',
	        src: 'image/level1/watermelon.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '10',
	        name: 'grape',
	        src: 'image/level1/grape.png',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '11',
	        name: 'guava',
	        src: 'image/level1/guava.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '12',
	        name: 'lemon',
	        src: 'image/level1/lemon.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '13',
	        name: 'watermelon',
	        src: 'image/level1/watermelon.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '14',
	        name: 'grape',
	        src: 'image/level1/grape.png',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '15',
	        name: 'guava',
	        src: 'image/level1/guava.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
	    },{
	        img: '16',
	        name: 'lemon',
	        src: 'image/level1/lemon.jpg',
			or_src: 'image/ccu.png',
	        pair: false,
	        state: true
		}],
		

		///level2 cards src///
	    level2:[{
	        img: '1',
	        name: 'C',
	        src: 'image/level2/C.png',
	        or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '2',
	        name: 'C',
	        src: 'image/level2/C.png',
			or_src: 'image/code.png',
			pair: false,
	        state: true
	    },{
	        img: '3',
	        name: 'C#',
	        src: 'image/level2/Csharp.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '4',
	        name: 'C#',
	        src: 'image/level2/Csharp.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '5',
	        name: 'C++',
	        src: 'image/level2/C++.png',
	        or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '6',
			name: 'C++',
	        src: 'image/level2/C++.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '7',
	        name: 'css',
			src: 'image/level2/css.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '8',
	        name: 'css',
			src: 'image/level2/css.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '9',
	        name: 'html',
	        src: 'image/level2/html.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '10',
			name: 'html',
	        src: 'image/level2/html.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '11',
	        name: 'java',
	        src: 'image/level2/java.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '12',
	        name: 'java',
	        src: 'image/level2/java.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '13',
	        name: 'js',
	        src: 'image/level2/js.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '14',
	        name: 'js',
	        src: 'image/level2/js.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '15',
	        name: 'matlab',
	        src: 'image/level2/matlab.jpg',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '16',
	        name: 'matlab',
	        src: 'image/level2/matlab.jpg',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '17',
	        name: 'Nodejs',
	        src: 'image/level2/Nodejs.png',
			or_src: 'image/code.png',
			pair: false,
	        state: true
	    },{
	        img: '18',
	        name: 'Nodejs',
	        src: 'image/level2/Nodejs.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '19',
	        name: 'perl',
	        src: 'image/level2/perl.jpg',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '20',
	        name: 'perl',
	        src: 'image/level2/perl.jpg',
	        or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '21',
	        name: 'php',
	        src: 'image/level2/php.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '22',
	        name: 'php',
	        src: 'image/level2/php.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '23',
	        name: 'python',
	        src: 'image/level2/python.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '24',
	        name: 'python',
	        src: 'image/level2/python.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '25',
	        name: 'R',
	        src: 'image/level2/R.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '26',
	        name: 'R',
	        src: 'image/level2/R.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '27',
	        name: 'ruby',
	        src: 'image/level2/ruby.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '28',
	        name: 'ruby',
	        src: 'image/level2/ruby.png',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '29',
	        name: 'swift',
	        src: 'image/level2/swift.jpg',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    },{
	        img: '30',
	        name: 'swift',
	        src: 'image/level2/swift.jpg',
			or_src: 'image/code.png',
	        pair: false,
	        state: true
	    }],
	    level3:[{}]
	};

	///variables
    $scope.openCard = -1;
    $scope.finish = false;
    $scope.firstCard = '';
    $scope.secondCard = '';
    $scope.start = true;
    $scope.timing = 0.0;
    var st;
	
	
    $scope.startClock = function(){
		//for time count
        st = setTimeout(function(){
            $scope.$apply($scope.timing += 0.1);  
            $scope.startClock();
        }, 100);
	};
	
    $scope.shuffleCards = function(){
		//for randomly shuffle the cards
		$scope.cards[$scope.level].sort(function(){ return 0.5 - Math.random()});
    };

    $scope.coverAllCards = function(){
		//cover the cards and reset all variables
        var maplist = [];
        $scope.shuffleCards();
        $scope.cards[$scope.level].forEach(function(p, i){
                p.state = true;
                p.pair = false;
        });
		
		$('.cardArea').css({'transform':'scale(0)'});
		
        setTimeout(function(){
        	$('.cardArea').css({'transform':'scale(1)'});
        }, 500);

        $('.alertBox').css({'transform':'scale(0)'});
       	
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
        
        if(id.state){
            if($scope.openCard === 2){
                $scope.secondCard = id.name;
                if($scope.secondCard === $scope.firstCard){
                	$scope.cards[$scope.level].forEach(function(p, i){
                		if(p.name === $scope.firstCard){
                			p.pair = true;
                       		console.log(p.pair);
                       	}
                	});
                	
                }
                var cnt = 0;
                $scope.cards[$scope.level].forEach(function(p, i){
            		if(p.pair){
            			cnt++;
                   	}
            	});
                
                
                if(cnt === $scope.cards[$scope.level].length){
                    $('.alertBox').css({'transform':'scale(1)'});
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
                
                $scope.cards[$scope.level].forEach(function(p, i){
            		if(!p.state && !p.pair){
            			p.state = true;
                   	}
            	});

                
                $scope.firstCard = id.name;
                $scope.openCard++;
                
                setTimeout(function(){
                    $scope.$apply(id.state = false);
                }, 0);
            }
        }
        
    };
}]);