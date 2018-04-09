/**
 * Created by schamart on 28-Mar-18.
 */

var app=angular.module("Demo",["ngRoute"])
                .config(function($routeProvider,$locationProvider){
                    $routeProvider
                        .when("/",{
                            templateUrl:"components/portfolio/portfolio.html"

                            //controller: showmfController
                        })
                        .when("/portfolio",{
                            templateUrl:"components/portfolio/portfolio.html"

                            //controller: showmfController
                        })

                        .when("/aboutus",{
                            templateUrl:"components/about/about.html"
                            //controller: aboutController
                        })
                        .when("/addmf",{
                            templateUrl:"components/addmf/addmf.html"
                            //controller: aboutController
                        })

                    $locationProvider.html5Mode(true);
                })
                .controller("showmfController",function ($scope,$http) {
                    $http({
                        method : "GET",
                        url : "scripts/data.json"
                    }).then(function mySuccess(response) {
                        mfobject= response.data;
                        $scope.data=mfobject.portfolio1;
                    }, function myError(response) {
                        $scope.data = response.statusText;
                    });
                })
                .controller("aboutController",function ($scope) {
                    $scope.about = "HELLLOOOOOOOOOOOOO";
                })


 //Adding code of controller for add MF

app.controller('addMFController', function($scope) {

    //$scope.data = response.data.portfolio1;
    $scope.data=portfolio1Obj.portfolio1;
    //$scope.name=portfolio1Obj.portfolio1;


    $scope.addItem = function(){

        console.log("Inside addItem function");
        $scope.data=portfolio1Obj.portfolio1;
        //  var toAddjson ={ 'MFName':$scope.mname.MFName, 'folioNumber': $scope.folioNumber, 'InvestedAmount':$scope.Investedamount, 'units':$scope.units, 'NAV':$scope.NAV, 'XIR':$scope.XIR };
        $scope.data.push({ 'MFName':$scope.mname.MFName, 'folioNumber': $scope.folioNumber, 'InvestedAmount':$scope.Investedamount, 'units':$scope.units, 'NAV':$scope.NAV, 'XIR':$scope.XIR });

        //console.log(data);

        /*
         //writing code to push data to json

         $http.post('scripts/data.json',JSON.stringify(toAddjson));
         console.log("after http.post");
         //end of code to write data to json
         */

        $scope.MFname='';
        $scope.folioNumber='';
        $scope.Investedamount='';
        $scope.units='';
        $scope.NAV='';
        $scope.XIR='';
    };
});