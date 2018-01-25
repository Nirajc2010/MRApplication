define(['./module'], function (module) {
    'use strict';
    module.directive('emailVal', [function() {
        return {
            restrict: 'E',
            require: ['^^form'],
            compile: function(elem,attr) {
                return {
                    post: function(scope, element, attrs, ctrls){
                        console.log(name + ': post link');
                        scope.form = ctrls[0];
                    }
                }
            },
            templateUrl: 'partials/email.html'
        };
    }]);
});