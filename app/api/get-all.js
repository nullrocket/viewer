import get from './get';
import fetch from 'fetch';

import async from 'npm:async';
import Ember from 'ember';
export function getAll( id ) {

  let deferred = Ember.RSVP.defer();
  fetch( '/endpoints.json', {
    method: 'get',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/javascript, */*;',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }

  }).then(function (response ) {
    response.json().then(function(endPoints) {
      async.map(endPoints.data,
        function ( endpoint, callback ) {

          get(endpoint.url, id)
            .then(( result ) => {
              callback(null, { name: endpoint.name, result: result, url:endpoint.url });
            })
            .catch(( err ) => {

                callback(null, { name: endpoint.name, result: err, url:endpoint.url });
              }
            )
        },
        function ( err, results ) {

          deferred.resolve(results);
        });
    });
  }).catch(function ( response ) {

    deferred.reject(response);
  });



  return deferred.promise;

}