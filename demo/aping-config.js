"use strict";
apingApp.config(['$provide', function ($provide) {

    $provide.constant("apingApiKeys", {
        youtube : "AIzaSyAoZx2uwqnQ7WALp6lOuvWkBM6CfxCEJeA"
    });

    $provide.constant("apingDefaultSettings", {
        templateUrl : "aping_design_sample.html",
        items : 20, //items per request
        maxItems: 100, //max items per aping
        orderBy : "timestamp",
        orderReverse : "true",
        type: "social",
    });

}]);