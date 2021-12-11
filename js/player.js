const state = {
  search: '',
  sorting: [],
  filters: [
    {name: 'ambient', active: false},
    {name: 'lounge', active: false},
    {name: 'pop', active: false},
    {name: 'rock', active: false},
    {name: 'instrumental', active: false},
    {name: 'vocal', active: false},
  ],
  songs: [],
}
function initPlayer(){
  // todo request for songs
  repaintPlayer(state);
}

// get all elements once
const filterEl = document.querySelector('.filters');
const sortingEl = document.querySelector('.sorting');
const songsEl = document.querySelector('.songs');
function repaintPlayer(state){
  repaintFilters(state.filters);
  // todo add sorting
  // todo add songs
  // todo add search
  // todo repaint everything
}

function repaintFilters(filters){
  filters.forEach(filter => {
    // todo set active class
    // todo on click
    filterEl.innerHTML += `<li>${filter.name}</li>`;
  });
}
window.addEventListener('load', initPlayer);