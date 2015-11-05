'use strict';

angular.module('angularMasterLightbox',[])
.directive('angularMasterLightbox', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<a href="{{images}}" data-lightbox="image-1" data-title="" class="link-img-lightbox"> ' +
                      '<img height="360" style="width: 100%;max-height: 360px" src="{{images}}" alt="">' +
                  '</a>',
        scope: {
            images: '='
        },
        link: function(scope,element,attrs,ctrl,transclude){
            angular.element('.multi-video').prepend(transclude());
        }

    };
});
