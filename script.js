var app=angular.module("myApp",[]);
app.controller('myCtrl', 
  function($scope, $http) {
    
    $scope.onup = function(form) {
      $scope.jokes = [];
      var config = {
          headers: {
              'Accept': 'application/json'
          }
      };
      console.log(form);
      if(form != "") {
      var url = "https://icanhazdadjoke.com/search?term=" + form;
      $http.get(url, config).then(function(response) {
        console.log(response);
       // $scope.returnData = response.data;
        $scope.results = response.data.results;
       for (var key in $scope.results) {
       if ($scope.results.hasOwnProperty(key)) {
          console.log(($scope.results[key].joke));
          $scope.jokes.push(($scope.results[key].joke));
       }
    }
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
    }
    $scope.onclick = function(button) {
      var config = {
          headers: {
              'Accept': 'application/json'
          }
      };

      var url = "https://icanhazdadjoke.com/";
      $http.get(url, config).then(function(response) {
        console.log(response);
        $scope.randomJoke = response.data.joke;
      }); 
    } 
  }) 