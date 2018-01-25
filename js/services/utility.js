define(['./module'], function(module) {

    module.factory('utilityService', function () {
        function convertDateStringToObject(stringDate, formatDate) {
           /* var dateItems=_date.split('/');
            var formatedDate = new Date(dateItems[2], dateItems[1],dateItems[0]);
            return formatedDate;*/

            var date = new Date(stringDate);
            return date;
        }

        return {
            convertDateStringToObject: convertDateStringToObject
        };
    });
});

