 (function() {
     function SongPlayer(Fixtures) { // constuctor fucntion
        var SongPlayer = {};
        
             /**
             * @desc Buzz object audio file
             * @type {Object}
             */
             
        var currentBuzzObject = null;
        
        
            /**
             * @desc currentAlbum object
             * @type {Object}
             */
        
        var currentAlbum = Fixtures.getAlbum(); //not we have currentAlbum in Fixtures
        
             /**
             * @function setSong
             * @desc Stops currently playing song and loads new audio file as currentBuzzObject
             * @param {Object} song
             */
          
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
         
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
         
            SongPlayer.currentSong = song;
         };
         
            /**
            * @function playSong
            * @desc Plays currently song and sets playing boolean to true;
            * @param {Object} song
            */
         
         var playSong = function(song){
             currentBuzzObject.play();
             song.playing = true;
         };
         
         // this is where the public variables begin as we attach them to the object to be injected.
         
            /**
            * @function getSongIndex
            * @desc Gets the index of the song wich is playing;
            * @param {Object} song
            */
         
          var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
            };
            
            /**
            * @desc Active song object from list of songs
            * @type {Object}
            */
         
         SongPlayer.currentSong = null;
          
         SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
            };
            // console.log(SongPlayer.currentSong.playing);
        };
        
        SongPlayer.pause = function(song) {
            
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        }; 
        
            /**
            * @function previous
            * @desc Gets the index of the song before the current song which is playing. stops at 0.
            */
        
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        
        
        return SongPlayer; // returned objecct to be injected.
    };
    

    
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer); //registers SongPlayer with 'blocJams'
 })();