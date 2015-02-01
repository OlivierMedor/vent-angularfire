var app = angular.module('vent');

app.controller('homeController', function($scope){
  var ref = new Firebase("https://vent.firebaseio.com");
  
  $scope.createNewUser = function(){
    ref.createUser({
      email    : "bobtony@firebase.com",
      password : "correcthorsebatterystaple"
      }, function(error) {
      if (error === null) {
        console.log("User created successfully");
      } else {
        console.log("Error creating user:", error);
      }
    });
  }
  $scope.loginUser = function(){
    ref.authWithPassword({
      email    : "bobtony@firebase.com",
      password : "correcthorsebatterystaple"
      }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $scope.authPayload = authData;
      }
    });
  }

  $scope.loginUser();

})