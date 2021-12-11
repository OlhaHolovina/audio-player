const state = {
  search: '',
  activeSong: '1',
  activeFilter: '',
  activeSorting: '',
  sorting: [
    {id: '1',name: 'artist', active: false},
    {id: '2',name: 'genre', active: false},
    {id: '3',name: 'favorite', active: false},
    {id: '4',name: 'song', active: false},
    {id: '5',name: 'time', active: false},
  ],
  filters: [
    {id: '1', name: 'ambient', active: false},
    {id: '2', name: 'lounge', active: false},
    {id: '3', name: 'pop', active: false},
    {id: '4', name: 'rock', active: false},
    {id: '5', name: 'instrumental', active: false},
    {id: '6', name: 'vocal', active: false},
  ],
  songs: [
    {
      id: '1',
      media: '/media/imagine-dragons-believer.mp3',
      previewSrc: 'img/preview/imagine-dragons-believer-cover.jpg',
      songImgSrc: 'img/main/imagine-dragons-believer-pict.jpg',
      artist: 'Imagine Dragons',
      title: 'Believer',
      time: '3: 23',
      genre: 'Rock, Alternative rock',
      favorite: false,
      active: false
    },
  ],
}

// Imagine Dragons - Radioactive - Rock, Alternative rock
// Imagine Dragons - Natural - Rock, Alternative rock
// Tim Curry - I put a spell on you - Rock
// Syberian beast meets Mr. Moore - Wien - Dubstep, electronic
// The Killers - Somebody told me - Rock, Pop Rock
// Leroy - Good time - Rock
// Schiller - Life... I feel you - Ambient, electronic
// Schiller - What's coming - Ambient, electronic
// Triangle Sun - Karelia - Ambient, instrumental

// get all elements once
const filterEl = document.querySelector('.filters');
const sortingEl = document.querySelector('.sorting');
const songsEl = document.querySelector('.songs');

function initPlayer(){
  // todo request for songs
  // todo input event listener
  repaintPlayer(state);
}

function setActiveSong(id){

}

function repaintPlayer(state){
  repaintFilters(state.filters);
  repaintSorting(state.sorting);
  repaintSongs(state.songs, state.activeSong);
  setActiveSong(state);
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

function repaintSongs(songs, activeSong){
  songsEl.innerHTML = '';
  songs.forEach(song => {
    // todo on click
    // todo set active class
    // todo set is favorite
    songsEl.innerHTML += `
              <td class="song-img">
                <img src="${song.previewSrc}" alt="${song.artist} ${song.title}">
              </td>
              <td class="song-artist">${song.artist}</td>
              <td>${song.title}</td>
              <td>${song.time}</td>
              <td>${song.genre}</td>
              <td>
<!--                <button type="button"><span class="material-icons">favorite_border</span></button>-->
                <button type="button"><span class="material-icons">favorite</span></button>
              </td>`;
  });
}
window.addEventListener('load', initPlayer);