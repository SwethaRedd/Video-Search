// Forked Ricardonjk 
// Code goes here
var app = angular.module('myApp', []);

app.controller('POSController', function ($scope) {
    $scope.date = new Date();
// date.toLocaleFormat = function(formatString) {
//            return this.format(formatString);
//};
    

    $scope.food = {

      idly       : {count: 1, detail: "Idly", price: 8},
      vada       : {count: 1, detail: "Vada", price: 10},
      dosa       : {count: 3, detail: "Dosa",price: 10},
      ponganalu  : {count: 1, detail: "Ponganalu",price: 8},
      bonda      : {count: 1, detail: "Bonda",price: 8},
      upma       : {count: 1, detail: "Upma",price: 8},
      uthappam   : {count: 1, detail: "Uthappam",price: 8},
      combo      : {count: 1, detail: "Combo",price: 15},
      combo1     : {count: 1, detail: "Combo",price: 15},

      tea        : {count: 1, detail: "Tea",price: 2},
      chai       : {count: 1, detail: "Chai",price: 2},
      hotcoffee  : {count: 1, detail: "Hot Coffee",price: 2},
      coke       : {count: 1, detail: "Coke",price: 2},
      dietcoke   : {count: 1, detail: "Diet Coke",price: 2},
      pepsi      : {count: 1, detail: "Pepsi",price: 2},
      coldcoffee : {count: 1, detail: "Cold Coffee",price: 2},
      orange     : {count: 1, detail: "Orange",price: 3},
      strawberry : {count: 1, detail: "Strawberry",price: 3}
    };
    
    
    
    $scope.itemsCnt = 1;
    
    $scope.order = [];
    
    $scope.add = function(item) {
      var foodItem = {
        id : $scope.itemsCnt,
        item : item
      };
      $scope.order.push(foodItem);
      $scope.itemsCnt = $scope.order.length;
    };
    
    $scope.getSum = function() {
      var i = 0,
        sum = 0;
      for(; i < $scope.order.length; i++) {
        sum += parseInt($scope.order[i].item.price, 10);
      }
      return sum;
    };
    
    $scope.deleteItem = function(index) {
      $scope.order.splice(index,1);
    };
    
    $scope.checkout = function(index) {
      alert("Order total: $" + $scope.getSum() + "\n\n Thanks for the order ! Come, Visit Again.");
    };
    
    $scope.clearOrder = function() {
      $scope.order = [];
    };
});