var app = angular.module('myApp', []);

portfolio1Obj =  {"portfolio1":[
						    { "MFName":"Aditya Birla Sun Life Banking & PSU Debt Fund Growth-Regular Plan", 
						    "folioNumber":"1018188417",
						    "InvestedAmount":"10000",
						    "units":"10",
						    "NAV":"50.676",
						    "XIR":"12%"},
						    { "MFName":"SBI Gold Fund - Regular Plan - Growth", 
						    "folioNumber":"16342364",
						    "InvestedAmount":"36,800.00",
						    "units":"3,903.220",
						    "NAV":"9.6970 ",
						    "XIR":"4.23%"},
							{ "MFName":"UTI securities gold fund", 
						    "folioNumber":"10912123",
						    "InvestedAmount":"6,800.00",
						    "units":"903.220",
						    "NAV":"9.6970 ",
						    "XIR":"7.23%"},
							{ "MFName":"Kotak gold fund", 
						    "folioNumber":"012567",
						    "InvestedAmount":"3,800.00",
						    "units":"3.220",
						    "NAV":"22.6970 ",
						    "XIR":"1.23%"},
							{ "MFName":"ICICI pru life fund", 
						    "folioNumber":"113667",
						    "InvestedAmount":"7000.00",
						    "units":"200.220",
						    "NAV":"92.6970 ",
						    "XIR":"10.23%"}	
						    
						]}

app.controller('c1', function($scope, $http) {
  $http.get("data.json")
  .then(function(response) {
      $scope.data = response.data.portfolio1;
    });

});

app.controller('c2', function($scope) {

		
		$scope.data=portfolio1Obj.portfolio1;



  $scope.addItem = function(){

  	console.log("Inside addItem function");	
  
	$scope.data.push({ 'MFName':$scope.MFname, 'folioNumber': $scope.folioNumber, 'InvestedAmount':$scope.Investedamount, 'units':$scope.units, 'NAV':$scope.NAV, 'XIR':$scope.XIR });
	$scope.MFname='';
	$scope.folioNumber='';
	$scope.Investedamount='';
	$scope.units='';
	$scope.NAV='';
	$scope.XIR='';
	//console.log(data);
};
});


