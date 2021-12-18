export function sortSongsByDefault(songs){
  return songs.sort((a, b) => a.artist.localeCompare(b.artist));
}

export function showErrorMessage(message){
  alert(message);
  console.error(message);
}
