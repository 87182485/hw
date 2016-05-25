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
            templateUrl:'./templates/components/event-list.html',
            controller:function($log, dataService){
                var vm = this;

                angular.extend(vm, {
                    list:[]
                });

                vm.$onInit = function(){
                    dataService.get()
                        .then(function(data){
                            vm.list = data;
                            $log.info(data);
                        }).catch(function(err){
                        $log.error(err);
                    });
                };
            },
            controllerAs:'vm'
        });

    angular.module('hwApp')
        .component('eventForm', {
           templateUrl:'./templates/components/event-form.html',
            controller:function($log, $scope, dataService){
                var vm = this;

                vm.$routerOnActivate = function(next){

                    var category = angular.isDefined(next.params.category)
                        ? next.params.category!=='new'
                        ? next.params.category
                        : ''
                        : '';

                    angular.extend(vm, {
                        event:{
                            category:category,
                        },
                        save:save
                    });
                };

                vm.$onInit = function(){
                    vm.placeInput = document.getElementById('search-input');
                    vm.placeAutoComplete = new google.maps.places.Autocomplete(vm.placeInput);
                    vm.placeAutoComplete.addListener('place_changed', function() {
                        var place = vm.placeAutoComplete.getPlace();

                        $log.info('my place',place);

                        vm.placeInput.value=place.name;
                        vm.event.locationName=place.name;
                        vm.event.locationLat = place.geometry.location.lat();
                        vm.event.locationLng = place.geometry.location.lng();
                    });
                };

                function save(){
                    if($scope.eventForm.$valid){
                        dataService.save(vm.event)
                            .then(function(data){
                                $log.info(data);
                            });
                    }
                }
            }
        });

    angular.module('hwApp')
        .component('detail', {
            templateUrl:'./templates/components/detail.html',
            controller:function($log, content){
                var vm = this;

                vm.$routerOnActivate = function(next){
                    vm.detail = content[next.params.name];
                    $log.info(vm.detail);
                }
            }
        })
})(window.angular);