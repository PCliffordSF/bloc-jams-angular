 (function() {
     function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum();
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]); // injects both Fixtures object and AlbumCtrl callback
 })();
 