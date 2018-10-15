var app=angular.module("myApp",[]);
app.controller('myCtrl', 
  function($scope, $http) {
    $scope.onup = function(form) {
      console.log(form);

      var url = "https://icanhazdadjoke.com/";
      $http.get(url).then(function(response) {
        console.log(response);
        $scope.resopnse = response.data;
      }); 
    }   
  }) 