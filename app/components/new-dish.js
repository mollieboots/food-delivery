import Ember from 'ember';

export default Ember.Component.extend({
  addNewDish: false,
  actions: {
    dishFormShow(){
      this.set('addNewDish', true);
    },
    saveDish1(){
      var params = {
        name: this.get('name') ? this.get('name') : "",
        price: this.get('price') ? this.get('price') : "",
        description: this.get('description') ? this.get('description') : "",
        rating: [4],
        restaurant: this.get('restaurant')
      }
      console.log(params.restaurant);
      this.set('addNewDish', false);
      this.sendAction('saveDish2', params);
    }
  }
});
