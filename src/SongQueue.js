var SongQueue = Songs.extend({

  events: {},   

  initialize: function(){
    var that = this;
    this.on('add', function(){
      if (this.length === 1) {
       this.playFirst(); 
      }
    });
    this.on('ended', function(){
      this.remove(this.at(0));
      if (this.length > 0){
        this.playFirst(0);
      }
    });
    this.on('dequeue', function() {
      that.remove(this);
    })
  },

  playFirst: function(){
    this.at(0).play();
  }



});
