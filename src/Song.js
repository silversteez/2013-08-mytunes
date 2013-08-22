var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  ended: function(){
  	this.trigger('ended', this);
  },

  queue: function(){
    console.log("model.queue fires");
  	this.trigger('queue', this);
  },

  dequeue: function(){
  	this.trigger('dequeue', this);
  }

});
