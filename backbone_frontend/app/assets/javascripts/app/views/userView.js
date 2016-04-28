
var UserView = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    console.log(this.model.toJSON());
  },

  template: _.template( $('templates/index'))
  render: function() {
    var userTemplate = this.template(this.model.toJSON());
    this.$el.html(userTemplate);
    return this;
  }
});
