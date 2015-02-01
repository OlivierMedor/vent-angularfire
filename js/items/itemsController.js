var app = angular.module('vent');

app.controller('itemsController', function($scope, $firebase, itemsService){
  
  var ref = new Firebase("https://vent.firebaseio.com/items");
  var sync = $firebase(ref);
  var itemsArray = sync.$asArray();
  $scope.items = itemsArray;
  
  console.log(itemsArray);

  $scope.addNewItem = function() {
    console.log('in the add new item function');
    // var items = sync.$asArray();
    itemsArray.$add({ 
      'itemName': $scope.newItemText , 
      'qtyOnHand': 0, 
      'createdAt': Firebase.ServerValue.TIMESTAMP,
      'modifiedAt': Firebase.ServerValue.TIMESTAMP
    });
    $scope.newItemText = '';
  }

  $scope.removeItem = function(itemId) {
    sync.$remove(itemId);
  }

  $scope.addOneToQty = function(itemId){
    var itemLocalCopy = itemsArray.$getRecord(itemId);
    itemLocalCopy.qtyOnHand++;
    itemLocalCopy.modifiedAt = Firebase.ServerValue.TIMESTAMP
    itemsArray.$save(itemLocalCopy);
  }
});



