'use strict';

angular.module('angularMasterLightbox',[])
.directive('angularMasterLightbox', function () {
    return {
        restrict: 'E',
        template: '<a href="{{images}}" data-lightbox="image-1" data-title="My caption"> ' +
                      '<img style="width: 100%;max-height: 360px" src="{{images}}" alt="alternative text">'+
                  '</a>',
        scope: {
            images: '='
        },
        controller: function () {

        }
    };
});
