import fetch from 'fetch';
import Ember from 'ember';
import _ from "npm:lodash";


function makeGetParams(params){
  var esc = encodeURIComponent;

    return esc(params);

}

export default function get(url,params){

  let defered = Ember.RSVP.defer();
  fetch( url+"/"+makeGetParams(params), {
    method: 'get',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/javascript, */*;',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }

  }).then(function (response ) {

    if ( response.status !== 200 ) {
      response.json().then(function(data){
        defered.reject(data);
      });
    }
    else{
      response.json().then(function(data){

          defered.resolve(data);

      });
    }
  }).catch(function ( response ) {

    defered.reject(response.status);
  });
  return defered.promise;
}
