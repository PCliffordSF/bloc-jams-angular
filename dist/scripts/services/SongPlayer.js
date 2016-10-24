 (function() {
     function SongPlayer() { // constuctor fucntion
        var SongPlayer = {};
          
        var currentSong = null;
        
             /**
             * @desc Buzz object audio file
             * @type {Object}
             */
             
        var currentBuzzObject = null;
        
             /**
             * @function setSong
             * @desc Stops currently playing song and loads new audio file as currentBuzzObject
             * @param {Object} song
             */
          
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
         
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
         
            currentSong = song;
         };
         
            /**
            * @function playSong
            * @desc Pays currently song and sets playing boolean to true;
            */
         
         var playSong = function(){
             currentBuzzObject.play();
             song.playing = true;
         };
          
         SongPlayer.play = function(song) {
            if (currentSong !== song) {
                console.log(song.playing);
                setSong(song);
                playSong();
                console.log(song.playing);
            };
        };
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };
        return SongPlayer; // returned objecct to be injected.
    };
    

    
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer); //registers SongPlayer with 'blocJams'
 })();