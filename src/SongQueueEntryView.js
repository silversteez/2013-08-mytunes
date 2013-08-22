var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td class = "dequeue">X</td>'),

  events: {
    // 'click': function() {
    //   this.model.play();
    // }

    'click .dequeue': function(){
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
