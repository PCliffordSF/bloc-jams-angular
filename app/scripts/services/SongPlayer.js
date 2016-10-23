 (function() {
     function SongPlayer() { // constuctor fucntion
          var SongPlayer = {};
          
            var currentSong = null;
            var currentBuzzObject = null;
          
         SongPlayer.play = function(song) {
             console.log(song);
             console.log(currentSong);
            if (currentSong !== song) {
                if (currentBuzzObject) {
                    currentBuzzObject.stop(); // stop current song if new song is played
                    currentSong.playing = null; // this is used in ng-show in albub.html
                } else if (currentSong === song) {
                    if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play(); // play current song if current song is paused.
                }
             } 
             
             currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
         
                currentSong = song;
                currentBuzzObject.play();
                song.playing = true; // this is used in ng-show in albub.html
            };
        }
        return SongPlayer; // returned objecct to be injected.
    }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer); //registers SongPlayer with 'blocJams'
 })();