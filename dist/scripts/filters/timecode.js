 (function() {
     function timecode(SongPlayer) {
       var currentBuzzObject = SongPlayer.currentBuzzObject;
        if (currentBuzzObject) {
         return buzz.toTimer(currentBuzzObject.getTime());
        } else {
         return '-:--'
        }
        
     }
 
     angular
         .module('blocJams')
         .filter('timecode', ['SongPlayer', timecode]);
 })();