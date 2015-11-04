'use strict';

angular.module('angular-master-lightbox',[])
.directive('angular-master-lightbox', function () {
    return {
        restrict: 'E',
        templateUrl: "templates/lightbox.html",
        scope: {
            images: '='
        },

        replace: true,

        controller: function ($rootScope, $scope) {
            $scope.path = "src";
            $scope.tileWidth = 150;
            $scope.tileHeight = 150;

            $scope.displayImage = function (img) {
                $scope.selected = $scope.images.indexOf(img);
                $scope.selectedImg = img;
                $scope.showModal = true;
            };

            $scope.source = function (img) {
                return img[$scope.path];
            };

            $scope.hasPrev = function () {
                return ($scope.selected !== 0);
            };
            $scope.hasNext = function () {
                return ($scope.selected < $scope.images.length - 1);
            };

            $scope.next = function () {
                $scope.selected = $scope.selected + 1;
                $scope.selectedImg = $scope.images[$scope.selected];
            };

            $scope.prev = function () {
                $scope.selected = $scope.selected - 1;
                $scope.selectedImg = $scope.images[$scope.selected];
            };
        }
    };
});
