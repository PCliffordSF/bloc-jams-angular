 (function() {
     function SongPlayer() { // constuctor fucntion
          var SongPlayer = {};
          
         SongPlayer.play = function(song) {
         var currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
         });
 
         currentBuzzObject.play();    
     };
          
          return SongPlayer; // returned objecct to be injected. 
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer); //registers SongPlayer with 'blocJams'
 })();