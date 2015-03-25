goog.provide('app.videojs.player.Directive');

app.videojs.player.Directive = function($compile) {
    this.compile_ = $compile;
    this.link = this.link.bind(this);
};
app.videojs.player.Directive.prototype.link = function($scope, $elem, $attrs) {
    this.scope_ = $scope;
    var w = $elem.parent()[0].offsetWidth;
    var h = w * 0.5625;
    $elem.css('height', h + 'px');
    $elem.parent().css('height', h + 'px');
    $scope.viewModel = {
        maxWidth:1280,
        maxHeight:720,
        aspectRatio:'16:9',
        width:w,
        height:h

    };
    var videosrc = [
        { 'src': $scope.currentVideo.enclosure['@attributes'].url,
          'type':  $scope.currentVideo.enclosure['@attributes'].type
        }
    ];
    var setup = {
        'techOrder': ['html5'],
        'autoplay': false,
        'reportTouchActivity': true,
        'controls': true,
        'preload': 'auto',
        'src': videosrc,
        'width':$scope.viewModel.width,
        'height':$scope.viewModel.height,
        'children': {
            'titleScreen': $scope.currentVideo,
            'bigPlayButton':false
        }
    };

    $scope.player = videojs($elem[0], setup, function () {
        this.src(this.options_.src[0]);
    });
    $scope.play = function($event) {
        $event.preventDefault();
        $scope.player.play();
    };

    $scope.player.on('firstplay', function() {

    });
    $scope.player.on("loadedmetadata", function (event) {

    });
    $scope.player.ready(this.compilePlayerControls.bind(this));
};
app.videojs.player.Directive.prototype.compilePlayerControls = function() {
    this.compile_(this.scope_.player.titleScreen.el_)(this.scope_);
};


/**
 * @returns {{restrict: string, priority: number, scope: boolean, templateUrl: string, link: Function}}
 * @constructor
 * @export
 * @param {angular.$compile} $compile
 * @ngInject
 * @return {Object}
 */
app.videojs.player.Directive.factory = function($compile) {
    var dir = new app.videojs.player.Directive($compile);
    return {
        restrict:'E',
        priority:10,
        scope:false,
        replace:true,
        templateUrl:'js/states/app.videojs.player.Directive.Template.html',
        link: dir.link
    };
};
app.videojs.player.Directive.factory.$inject = ['$compile'];