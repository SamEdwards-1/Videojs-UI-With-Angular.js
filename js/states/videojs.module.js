'use strict';
goog.provide('app.videojs.module');
goog.provide('app.videojs.state');

goog.require('app.videojs.ViewStateController');
goog.require('app.videojs.RSSModel');
goog.require('app.videojs.player.Directive');
goog.require('libs.angular');

/**
 * The ui.router state will use this function to make sure the fully loaded
 * data is injected directly into our controller's constructor.
 *
 * @param {angular.$q} $q
 * @param {angular.$http} $http
 * @returns {Promise}
 */
app.videojs.feedResolver = function($q, $http) {
    return $q.when(
        $http({'method':'GET', url:proxyUrl})
    );
};
app.videojs.feedResolver.$inject = ['$q', '$http'];
/**
 * A state object for our router that will load this module. See
 * https://github.com/marklagendijk/ui-router.stateHelper/
 */
app.videojs.state = {
    name:'videojsview',
    url:'/view/:index',
    templateUrl:'/videojs-angular/js/states/videojs.view.uiview.html',
    controller:'ViewStateController as ctrl',
    resolve: {
        feedData:app.videojs.feedResolver
    }
};

app.videojs.module = angular.module('videojsStateModule', [])
    .controller('ViewStateController', app.videojs.ViewStateController)
    .service('dataModel', app.videojs.RSSModel)
    .directive('videojs', app.videojs.player.Directive.factory);
