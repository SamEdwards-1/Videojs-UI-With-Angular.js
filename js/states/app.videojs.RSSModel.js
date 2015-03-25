'use strict';
goog.provide('app.videojs.RSSModel');
/**
 * @constructor
 * @param {angular.$q} $q
 * @param {ui.router.$state} $state
 * @param {!angular.$http} $http Angular's $http service
 */
app.videojs.RSSModel = function($q, $state, $http) {
    this.q_ = $q;
    this.state_ = $state;
    this.http_ = $http;
    this.data = $q.defer();
    this.loadRSS();

};
app.videojs.RSSModel.prototype.loadRSS = function() {
    var self = this;
    this.http_({'method':'GET', url:proxyUrl})
        .then(function(response) {
            console.log(response);
            self.data.resolve(response.data);
        });
};
app.videojs.RSSModel.$inject = ['$q', '$state', '$http'];