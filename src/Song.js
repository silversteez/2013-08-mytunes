var Song = Backbone.Model.extend({

  initialize: function(){
    this.set('counter',0);
  },

  play: function(){
    var counter = this.get('counter');
    counter++;
    this.set('counter', counter);
    this.trigger('play', this);
  },

  ended: function(){
  	this.trigger('ended', this);
  },

  queue: function(){
  	this.trigger('queue', this);
  },

  dequeue: function(){
  	this.trigger('dequeue', this);
  }

});