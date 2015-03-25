'use strict';
goog.provide('app.videojs.ViewStateController');


/**
 * The controller for this module's state, just recieves a model to place on the scope where
 * the videojs directive can use it.
 *
 * @param {angular.Scope} $scope
 * @param {Object} dataModel
 * @param {angular.ui.router.$stateParams} $stateParams
 * @constructor
 */
app.videojs.ViewStateController = function($scope, feedData, $stateParams) {
    $scope.feed = feedData.data.channel;
    $scope.itemIndex = $stateParams.index - 1;
    $scope.currentVideo = $scope.feed.item[$scope.itemIndex];
    $scope.currentVideo.title = $scope.currentVideo.title.split('- Lifehacker')[0];
    if($scope.itemIndex > 0) {
        $scope.prevVideo = $scope.feed.item[$scope.itemIndex - 1];
        $scope.prevVideo.title = $scope.prevVideo.title.split('- Lifehacker')[0];
    } else {
        $scope.prevVideo = null;
    }
    if($scope.itemIndex < $scope.feed.item.length - 1) {
        $scope.nextVideo = $scope.feed.item[$scope.itemIndex + 1];
        $scope.nextVideo.title = $scope.nextVideo.title.split('- Lifehacker')[0];
    } else {
        $scope.nextVideo = null;
    }


};
app.videojs.ViewStateController.$inject = ['$scope', 'feedData', '$stateParams'];