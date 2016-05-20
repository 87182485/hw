/**
 * Created by gary on 5/14/16.
 */

(function(angular){
    'use strict';

    angular.module('hwApp', ['ngMessages', 'ngAnimate', 'ngMaterial', 'ngComponentRouter'])
        .config(function($locationProvider){
            $locationProvider.html5Mode(true);
        });

    angular.module('hwApp')
        .value('$routerRootComponent', 'hwApp');

    angular.module('hwApp')
        .component('hwApp', {
            templateUrl:'./templates/components/parent.html',
            //template:'<ng-outlet></ng-outlet>',
            $routeConfig:[
                {path:'/home', name:'Home', component:'home', useAsDefault:true},
                {path:'/events', name: 'Events', component:'events'},
                {path:'/events/form', name: 'EventForm', component:'eventForm'}
            ]
        })
})(window.angular);