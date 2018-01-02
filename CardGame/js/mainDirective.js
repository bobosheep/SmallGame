app.directive('levelInfo', function(){
    return {
        restrict: 'E',
        scope:{
            info: '=',
        },
        templateUrl: 'js/mylevel.html',
    };
});