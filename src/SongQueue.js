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
    });

    this.on('queue', function() {
      that.add(this);
      console.log("songQueue event handler");
    });
  },

  playFirst: function(){
    this.at(0).play();
  }



});

//Library view  'click' fires a event 
//We want that to take the song from the songs collection
//and place it into the 
