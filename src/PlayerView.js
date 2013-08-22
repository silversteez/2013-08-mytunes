var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  events: {
    'ended' : 'songEnded',
  },

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  },

  songEnded: function() {
    this.model.ended();
  }
});
