var SingleUser = Backbone.Model.extend({
  defaults: {
    ID: "",
    name: ""
  },
  idAttribute: "ID",
  urlRoot: 'http://localhost:3000/users'
});
