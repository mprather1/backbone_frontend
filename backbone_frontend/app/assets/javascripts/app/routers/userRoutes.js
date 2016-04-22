class Routers.Users extends Router

  routes:
    'users' : 'index'

  function index() {
    var collection = new Collection.Users
    var view = new Views.Users.Index(collection: collection)
    $(document.body).html(view.el)
    collection.fetch()
    view.render()
  }
