


var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
    // return template;
    // return $(template);
 //  };
     var $row = $(template);

     
     var clickHandler = function() {
        	var songNumber = $(this).attr('data-song-number');

	if (currentlyPlayingSongNumber !== null) {
		// Revert to song number for currently playing song because user started playing new song.
		var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
		currentlyPlayingCell.html(currentlyPlayingSong);
	}
	if (currentlyPlayingSongNumber !== songNumber) {
		// Switch from Play -> Pause button to indicate new song is playing.
		$(this).html(pauseButtonTemplate);
		currentlyPlayingSongNumber = songNumber;
	} else if (currentlyPlayingSongNumber === songNumber) {
		// Switch from Pause -> Play button to pause currently playing song.
		$(this).html(playButtonTemplate);
		currentlyPlayingSongNumber = null;
	}
     };
     
    //***************************************************//
     var onHover = function(event) {
                var songNumberCell = $(this).find('.song-item-number');
                var songNumber = songNumberCell.attr('data-song-number');

                if (songNumber !== currentlyPlayingSongNumber) {
                    songNumberCell.html(playButtonTemplate);
                  }
                    
     };
     var offHover = function(event) {
          var songNumberCell = $(this).find('.song-item-number');
          var songNumber = songNumberCell.attr('data-song-number');

          if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(songNumber);
           }
     };
     $row.find('.song-item-number').click(clickHandler);
     // #2
     $row.hover(onHover, offHover);
     // #3
     return $row;
 };
var setCurrentAlbum = function(album) {
  
       
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
 
    
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
     // #3
    // albumSongList.innerHTML = '';
     $albumSongList.empty();
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
         //albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };


var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

// Store state of playing songs
// var currentlyPlayingSong = null;
 var currentAlbum = null;
 var currentlyPlayingSongNumber = null;
 var currentSongFromAlbum =null;

$(document).ready(function() {
 //window.onload = function() {
  var currentAlbum = function(album){
      currentAlbum =album;
      var $albumTitle = $('.album-view-title');
  }   
     
 
   /*   for (var i = 0; i < songRows.length; i++) {
       /*  songRows[i].addEventListener('mouseleave', function(event) {
             
             var songItem = getSongItem(event.target);
             var songItemNumber = songItem.getAttribute('data-song-number');
 
             // #2
             if (songItemNumber !== currentlyPlayingSong) {
                 songItem.innerHTML = songItemNumber;
             }
         });*/
          
   /*      songRows[i].addEventListener('click', function(event) {
             // Event handler call
             clickHandler(event.target);
         });
          
     }*/
           
     
 });