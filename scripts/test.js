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
						    
						]};


angular.module('testModule',[]).controller('testctrl', function($scope) {

		
		$scope.hello="World";
		$scope.p1=portfolio1Obj.portfolio1;

//Test sample select
		$scope.data = {
    availableOptions: [
      {id: '1', name: 'Option A'},
      {id: '2', name: 'Option B'},
      {id: '3', name: 'Option C'}
    ],
    selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
    };
});