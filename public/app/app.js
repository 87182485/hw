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
        .value('content',{
            sports:{
                title:"Sports",
                description:"Two of my favorite sports.",
                items:[
                    {title:'Basketball', description:""},
                    {title:'Tennis', description:""}
                ]
            },

            gaming:{
                title:"Gaming",
                description:"Video games are electronic games played on a video screen (normally a television, a built-in screen when played on a handheld machine, or a computer)."
                +" There are many types, or genres, of these games: role-playing games; shooters, first-person shooters, side-scrollers, and platformers are just a few."
            },

            movie:{
                title:"Movie",
                description:"Movies, also known as films, are a type of visual communication which use moving pictures and sound to tell stories or inform (help people to learn). People in every part of the world watch movies as a type of entertainment, a way to have fun. For some people, fun movies can mean movies that make them laugh, while for others it can mean movies that make them cry, or feel afraid. Most movies are made so that they can be shown on big screens at cinemas or movie theatres. After movies are shown on movie screens for a period of time (ranging from a few weeks to several months), movies are shown on pay television or cable television, and sold or rented on DVD disks or videocassette tapes, so that people can watch the movies at home. You can also download or stream movies. Later movies are shown on television stations."
            }
        });

    angular.module('hwApp')
        .value('$routerRootComponent', 'hwApp');

    angular.module('hwApp')
        .component('hwApp', {
            templateUrl:'./templates/components/parent.html',
            //template:'<ng-outlet></ng-outlet>',
            $routeConfig:[
                {path:'/home', name:'Home', component:'home', useAsDefault:true},
                {path:'/detail/:name', name:'Detail', component:'detail'},
                {path:'/events', name: 'Events', component:'events'},
                {path:'/events/form/:category', name: 'EventForm', component:'eventForm'}
            ]
        })
})(window.angular);