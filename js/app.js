'use strict';

goog.provide('app.module');

goog.require('libs.material');
goog.require('app.videojs.module');
goog.require('app.videojs.state');
goog.require('libs.angular');
goog.require('libs.angular.ui.router.statehelper');


jQuery.material.init();

/**
 * Configuration function for our root module.
 * @param {!ui.router.$locationProvider} $locationProvider
 * @param {!ui.router.$urlRouterProvider} $urlRouterProvider
 * @param {!ui.router.stateHelper} stateHelperProvider https://github.com/marklagendijk/ui-router.stateHelper/
 * @ngInject
 */
var app_config = function($locationProvider, $urlRouterProvider, stateHelperProvider) {

    $locationProvider.html5Mode(false);
    stateHelperProvider.state(app.videojs.state, false);
    $urlRouterProvider.otherwise('/view/1');
};

app_config.$inject = ['$locationProvider', '$urlRouterProvider', 'stateHelperProvider'];
/**
 * The function that runs to kick off our root module. Primarily concerned with
 * handling $stateChangeError when a state's resolve function rejects
 * an injected value.
 *
 * @param {angular.Scope} $rootScope
 * @param {ui.router.$state} $state
 * @ngInject
 */
var app_run = function($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
        event.preventDefault();
        return $state.go(error);
    });
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error) {
        console.dir(toState);
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, error) {
        console.dir(toState);
    });

};
app_run.$inject = ['$rootScope', '$state'];

app.module = angular.module('angularVideojsDemoApp', [app.videojs.module.name, 'ui.router.stateHelper'])
    .config(app_config)
    .run(app_run);


