const state = {
  search: '',
  filters: [],
  sorting: [],
  songs: [],
}
function initPlayer(){
  // todo request for songs
  repaintPlayer(state)
}

const filters = document.querySelector('.filters');
const sorting = document.querySelector('.sorting');
const songs = document.querySelector('.songs');
function repaintPlayer(state){
  // todo add filters
  // todo add sorting
  // todo add songs
  // todo add search
  // todo repaint everything
}

window.addEventListener('load', initPlayer);