// Code goes here
(function(){
  var app = angular.module('todoApp',[]);
  
  app.controller('TodoCtrl',['$scope',function($scope){
    $scope.todos = [
    {
      title: '잠자기',
      completed:false,
      createdAt:Date.now()
    },
    {
      title: '숨쉬기',
      completed:false,
      createdAt:Date.now()
    },
    {
      title: '밥먹기',
      completed:false,
      createdAt:Date.now()
    }
    
    
    
    ];
  }]);
})();
