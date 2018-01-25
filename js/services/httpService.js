define(['./module'], function(module) {

    module.factory('httpService', function($http) {
        function get(url) {
            return $http(
                {
                    method: 'GET',
                    url: url
                }
            );
        }

        return {
            get: get
        };
    }) ;

});