//1 assign object
var playlist = {
  greenday: "Time of your life"
};


//2 update playlists
function updatePlaylist(playlistObj, artistName, songTitle) {
  
  playlistObj[artistName] = songTitle;
  return playlistObj;
  
}
