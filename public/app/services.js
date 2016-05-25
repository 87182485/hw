/**
 * Created by gary1 on 5/20/2016.
 */
(function(){
    'use strict';

    function dataService($log, $q, $http){
        var baseUrl = '/api/';

        this.save = function(event){
            var deferred = $q.defer();

            $http({
                url: baseUrl+'post',
                method:'POST',
                data:event
            }).success(function(data){
                deferred.resolve(data);
            }).error(function(err){
                deferred.reject(err);
            });

            return deferred.promise;
        };

        this.get = function(){
            var deferred = $q.defer();

            $http({
                url: baseUrl+'get',
                method:'GET',
                data:event
            }).success(function(data){
                deferred.resolve(data);
            }).error(function(err){
                deferred.reject(err);
            });

            return deferred.promise;
        }
    }

    angular.module('hwApp')
        .service('dataService', dataService);
})();