angular.module('starter.services', [])

.factory('Devices', function($http) {
  // Might use a resource here that returns a JSON array

  //var ipServer = 'http://esp8266-relays.herokuapp.com';
  var ipServer = 'https://thawing-sea-73098.herokuapp.com';

  return {
    deviceCommand: function(data) {
      console.log(data.deviceNum);
	  
      return $http.get(ipServer + '/relay/'+ data.deviceNum+'/'+data.command);
    }
  };
});
