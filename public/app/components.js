/**
 * Created by gary on 5/14/16.
 */
(function(angular){
    'use strict';

    angular.module('hwApp')
        .component('home', {
           templateUrl:'./templates/components/home.html'
        });

    angular.module('hwApp')
        .component('events', {
            templateUrl:'./templates/components/event-list.html'
        });

    angular.module('hwApp')
        .component('eventForm', {
           templateUrl:'./templates/components/event-form.html'
        });
})(window.angular);