# spanacomnpm
To install this module type in the ssh console to the directory where you installed NodeJS:

npm install spanacomnpm

----------------------

More information in www.spanacom.com

Example for use:

var spanacomapi = require("spanacomnpm");
var spanacom = new spanacomapi.Spanacom("YOUR_API_KEY_HERE");

        spanacom.api('smsmt/send', {
        "to": "34666222333",
        "from": "Spanacom",//OJOAKI contar coste de smspush y poner en leads_calls
        "text": "hi world",
    }, function (result) {
            console.log('Success', result);'
        }, function (err) {
            console.log('Error', err);
        });
