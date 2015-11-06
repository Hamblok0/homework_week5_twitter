

var logView = Backbone.View.extend({
  className: 'home',
  tagName: 'section',
  initialize: function(options){
    this.className = options.className;
    this.template = options.template;
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var twitRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'login': 'login',
    'register': 'register'
  },

  'login': function(){
    var view = new logView({
      className: 'pageLogin',
      template: _.template($('#loginTemplate').html())
    });
    $('main').html(view.render().el);
  },

  'register': function(){
    var view = new logView({
      className: 'pageRegister',
      template: _.template($('#regTemplate').html())
    });
    $('main').html(view.render().el);
  }

});
var router = new twitRouter;
Backbone.history.start();
