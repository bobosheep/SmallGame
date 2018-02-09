app.directive('cards', function($document){
    return function(scope, element, attr){
        //var rect = angular.element(element);
       // var x = rect.prop('left'), y = rect.prop('top');

        angular.element(element).on( scope.coverAllCards(), function(){
            console.log('yes');
            setInterval(function(){
                angular.element(element).addclass('mycenter');
            }, 500);
            setInterval(function(){
                angular.element(element).removeclass('mycenter');
            }, 500);
        });
    };
});