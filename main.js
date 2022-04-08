(function() {
    "use strict";

    this.Spanacom = function(apikey) {

        let axiosSpanacom = require('axios'),
            httpsSpanacom = require('https');

        this.apikey=apikey;
        this.debug=false;
        this.onerror = function(error){
            console.log('DEFAULT ONERROR:',error);
        };

        this.api= function(method,params,onresult,onerror) {


            params.apikey = this.apikey;
            if (this.debug) {
                console.log("Spanacom: Opening request to https://api.spanads.com/api/1.0/" +method + ".json/");
            }
            let agent = new httpsSpanacom.Agent({ family: 4 });

            axiosSpanacom.get("https://api.spanads.com/api/1.0/" +method + ".json/", { data: params, httpsAgent: agent })
                .then(response => {
                    return onresult(response.data);
                }).catch(error => {
                return onerror({
                    status: 'error',
                    message:error.message});
            });
            //console.log('apikey',apikey,' method',method,' vars',vars);
        }
    };
}).call(this);
