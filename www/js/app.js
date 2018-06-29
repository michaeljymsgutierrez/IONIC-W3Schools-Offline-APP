var app = angular
  .module("starter", ["ionic"])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

app.controller("mainCtrl", function(
  $scope,
  $window,
  $ionicPopup,
  $ionicLoading,
  $timeout
) {
  $ionicLoading.show({ template: "Please wait Loading Data..." });
  $timeout(function() {
    $ionicLoading.hide();
  }, 3000);

  $scope.goBack = function() {
    try {
      $window.history.back();
    } catch (err) {}
  };

  $scope.goHome = function() {
    $ionicPopup.alert({
      title: "About",
      template:
        "<p>W3schools Offline has built and implemented using pure IONIC Framework based on the official site of http://www.w3schools.com/</br></br> Build by : Chaelgutierrez <br>Tested by: Mitchylunoza </br></br></br>Enjoy using this free app :)</p>"
    });
  };
});
