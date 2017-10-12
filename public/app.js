console.log('Piqued is up and running');

const app = angular.module('piqued', []);


//main controller
app.controller('pqdController', ['$http', '$scope', function($http, $scope) {
  $scope.modalShown1 = false;

const constroller = this;
  this.message = "this controller works";
  this.url = 'http://localhost:3000';






//////////////////////////////////////////////////////////////////////////

  //modal section

//////////////////////////////////////////////////////////////////////////

  $scope.toggleAboutModal = function() {
      $scope.modalShown1 = !$scope.modalShown1;
    };

//////////////////////////////////////////////////////////////////////////

  //BGG api section to get list of hot games list

//////////////////////////////////////////////////////////////////////////

    this.getHotGames = function() {
      $http({
        method: 'GET',
        url: 'https://bgg-json.azurewebsites.net/hot'
      }).then(function(response) {
        // controller.hotgames = response.data;
        console.log(response);
      })
    };
    this.getHotGames();




































//end of pqdController
}]);


app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
      template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});
