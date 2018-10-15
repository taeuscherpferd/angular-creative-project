var app=angular.module("myApp",[]);
app.controller('myCtrl', 
  function($scope, $http) {

    $scope.onup = function(form) {
      var config = {
          headers: {
              'Accept': 'application/json'
          }
      };
      console.log(form);

      var url = "https://icanhazdadjoke.com/";
      $http.get(url, config).then(function(response) {
        console.log(response);
        $scope.returnData = response.data;
      }); 
      // $http({
      //   METHOD:"GET",
      //   url:url,
      //   headers:{
      //     'Accept':'application/json'
      //   }
      // }).then(function(res){
      //   console.log(res);
      // })
    }   
  }) 