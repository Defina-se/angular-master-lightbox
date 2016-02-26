'use strict';

angular.module('angularMasterLightbox',[])
.directive('angularMasterLightbox', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<a href="{{images}}" data-lightbox="image-1" data-title="" class="link-img-lightbox">' +
                      '<img src="{{images}}" alt="">' +
                  '</a>',
        scope: {
            images: '='
        },
        link: function(scope,element,attrs,ctrl,transclude){
            angular.element('.multi-video').prepend(transclude());
        }

    };
});
