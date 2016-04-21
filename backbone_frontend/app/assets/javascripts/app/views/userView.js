
var UserView = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    console.log(this.model.toJSON());
  },

  render: function() {

  }
});
var userView = new UserView({ model: user });
