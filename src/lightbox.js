'use strict';

angular.module('angularMasterLightbox',[])
.directive('angularMasterLightbox', function () {
    return {
        restrict: 'E',
        templateUrl: '<a href="{{images}}" data-lightbox="image-1" data-title="My caption">Image #1</a>',
        scope: {
            images: '='
        },
        controller: function () {

        }
    };
});
