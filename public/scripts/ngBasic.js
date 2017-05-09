var myApp = angular.module( 'myApp', []);
// set up a controller
myApp.controller( 'InventoryController', function($http){
    console.log( 'NG' );
    // variable gloval to this controller
    var vm = this;
    // array attached to controller (makes it available to DOM)
    vm.items = [];
    // "vm" stands for "view model"
    vm.addItem = function(){
      console.log( 'in addItem ng-click' );
      // create object from user input
      var newItem ={
        place: vm.placeIn,
        memory: vm.memoryIn
      };
      console.log('adding item ->', newItem);
      // push item into array
      vm.items.push(newItem);
      console.log('items ->', vm.items);
      // empty inputs
      vm.placeIn='';
      vm.memoryIn='';
    }; // end add item
}); // end inventory controller


  $http({
    method:'GET',
    url: '/journal'
  }).then(function success(response){
    console.log('inside journal:', response.data);
    vm.journalData = response.data;
  });
});











//ffds
