(function() {
  "use strict";

  this.Spanacom = function(apikey) {

    let axiosSpanacom = require('axios'),
        httpsSpanacom = require('https'),
        OPTS = {
          host: 'api.spanads.com',
          port: 443,
          prefix: '/api/1.0/',
          method: 'POST',
          rejectUnauthorized: false,
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'SpanacomNODEJS/1.0.41'
          }
        };
    this.apikey=apikey;
    this.debug=false;
    this.onerror = function(error){
      console.log('DEFAULT ONERROR:',error);
    };

    this.api= function(method,params,onresult,onerror) {


      params.apikey = this.apikey;
      if (this.debug) {
        console.log("Spanacom: Opening request to https://" + OPTS.host + OPTS.prefix +method + ".json/");
      }
      let agent = new httpsSpanacom.Agent({ family: 4 });

      axiosSpanacom.get("https://" + OPTS.host + OPTS.prefix +method + ".json/", { data: params, httpsAgent: agent })
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
