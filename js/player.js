const state = {
  search: '',
  sorting: [
    {name: 'artist', active: false},
    {name: 'genre', active: false},
    {name: 'favorite', active: false},
    {name: 'song', active: false},
    {name: 'time', active: false},
  ],
  filters: [
    {name: 'ambient', active: false},
    {name: 'lounge', active: false},
    {name: 'pop', active: false},
    {name: 'rock', active: false},
    {name: 'instrumental', active: false},
    {name: 'vocal', active: false},
  ],
  songs: [
    {name: 'vocal', active: false},
  ],
}

function initPlayer(){
  // todo request for songs
  // todo input event listener
  repaintPlayer(state);
}

// get all elements once
const filterEl = document.querySelector('.filters');
const sortingEl = document.querySelector('.sorting');
const songsEl = document.querySelector('.songs');
function repaintPlayer(state){
  repaintFilters(state.filters);
  repaintSorting(state.sorting);
  // todo add songs
  // todo add search
}

function repaintFilters(filters){
  filterEl.innerHTML = '';
  filters.forEach(filter => {
    // todo on click
    // todo set active class

    filterEl.innerHTML += `<li>${filter.name}</li>`;
  });
}

function repaintSorting(sorting){
  sortingEl.innerHTML = '';
  sorting.forEach(sortItem => {
    // todo on click
    // todo set active class
    sortingEl.innerHTML += `<li>${sortItem.name}</li>`;
  });
}
window.addEventListener('load', initPlayer);