var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= counter %></td>'),

  events: {
    'click': function() {
      this.model.queue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
