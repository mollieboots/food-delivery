import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('restaurant');
  },
  actions: {
    saveRestaurant3(params){
      var newRestaurant = this.store.createRecord('restaurant', params);
      newRestaurant.save();
    },
    editRestaurant4(restaurant, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          restaurant.set(key,params[key]);
        }
      });
      restaurant.save();
    }
  }
});
