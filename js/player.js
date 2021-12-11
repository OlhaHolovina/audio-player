const state = {
  search: '',
  activeSong: '2',
  activeFilter: '',
  activeSorting: '',
  sorting: [
    {id: '1',name: 'artist', active: false},
    {id: '2',name: 'genre', active: false},
    {id: '3',name: 'favorite', active: false},
    {id: '4',name: 'song', active: false},
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
      show: true
    },
    {
      id: '2',
      media: '/media/imagine-dragons-natural.mp3',
      previewSrc: 'img/preview/imagine-dragons-natural-cover.jpg',
      songImgSrc: 'img/main/imagine-dragons-natural-pict.jpg',
      artist: 'Imagine Dragons',
      title: 'Natural',
      time: '3: 08',
      genre: 'Rock, Alternative rock',
      favorite: false,
      show: true,
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
const playlistEl = document.querySelector('.playlist');
const audioEl = document.querySelector('.audio');
const songHeader = document.querySelector('.song-header');

function initPlayer(){
  // todo request for songs
  // todo input event listener
  repaintPlayer(state);
}

function showErrorMessage(message){
  alert(message);
  console.error(message);
}

function setActiveSong(id, songs){
  const activeSong = songs.find(song => song.id === id);
  if (!activeSong) {
    showErrorMessage('something wrong with the songs list!');
  }

  audioEl.innerHTML = `
      <source src="${activeSong.media}" type="audio/mpeg">
      <p>Your browser doesn't support HTML5 audio. Here is a 
      <a href="${activeSong.media}">link to the audio</a> instead.</p>
  `;

  songHeader.innerHTML = `
      <img src="${activeSong.songImgSrc}" alt="${activeSong.artist} ${activeSong.title}">
      <section class="song-info">
        <h2>
          <span class="artist">${activeSong.artist}</span>
          <span class="name">${activeSong.title}</span>
        </h2>
        <h4 class="genre">${activeSong.genre}</h4>
      </section>
  `;
}

function repaintPlayer(state){
  repaintFilters(state.filters);
  repaintSorting(state.sorting);
  repaintSongs(state.songs, state.activeSong);
  setActiveSong(state.activeSong, state.songs);
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
  playlistEl.innerHTML = `
              <tr>
              <th></th>
              <th>artist</th>
              <th>title</th>
              <th>time</th>
              <th>genre</th>
              <th>favorite</th>
            </tr>`;
  songs.forEach(song => {
    // todo on click
    // todo set active class
    // todo set is favorite

    if (song.show){
      const isActive = activeSong === song.id;
      playlistEl.innerHTML += `
              <tr class="${isActive ? 'active' : ''}">
                <td class="song-img">
                  <img src="${song.previewSrc}" alt="${song.artist} ${song.title}">
                </td>
                <td class="song-artist">${song.artist}</td>
                <td>${song.title}</td>
                <td>${song.time}</td>
                <td>${song.genre}</td>
                <td>
                  <!--<button type="button"><span class="material-icons">favorite_border</span></button>-->
                  <button type="button"><span class="material-icons">favorite</span></button>
                </td>
              </tr>`;
    }
  });
}
window.addEventListener('load', initPlayer);