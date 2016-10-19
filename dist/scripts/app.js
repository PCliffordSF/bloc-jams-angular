 (function() {
              /*$stateProvider.state(stateName, stateConfig)*/
     function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
         $stateProvider
            .state('landing' /* state name part*/, {
                url: '/',
                templateUrl: '/templates/landing.html' /*state config part*/
            })
            .state('album', {
            url: '/album',
            templateUrl: '/templates/album.html'
         })
         .state('collection', {
             url: '/collection',
             templateUrl: '/templates/collection.html'
         });
     }
 
     angular
        .module('blocJams', ['ui.router'])
        .config(config);
 })();