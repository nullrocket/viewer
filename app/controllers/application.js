import Ember from 'ember';
import {task} from "ember-concurrency";
import {getAll} from 'viewer/api/api';
export default Ember.Controller.extend({
  results:null,
  id:"",
  lookup: task(function * () {
    this.set('results',[]);
  let results = yield getAll(this.get('id'));
  this.set('results',results);
  }).drop(),
});
