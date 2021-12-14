const state = {
  search: '',
  sorting: [
    {id: 'sorting-1', name: 'artist', active: false},
    {id: 'sorting-2', name: 'genre', active: false},
    {id: 'sorting-4', name: 'title', active: false},
  ],
  filters: [
    {id: 'filter-1', name: 'ambient', active: false},
    {id: 'filter-2', name: 'lounge', active: false},
    {id: 'filter-3', name: 'pop', active: false},
    {id: 'filter-4', name: 'rock', active: false},
    {id: 'filter-5', name: 'instrumental', active: false},
    {id: 'filter-6', name: 'vocal', active: false},
  ],
  songs: [
    {
      id: '1',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/imagine-dragons-believer.mp3',
      previewSrc: 'img/preview/imagine-dragons-believer-cover.jpg',
      songImgSrc: 'img/main/imagine-dragons-believer-pict.jpg',
      artist: 'Imagine Dragons',
      title: 'Believer',
      time: '3: 23',
      genre: 'Rock, Alternative rock',
      favorite: false,
      active: false,
      show: true
    },
    {
      id: '2',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/imagine-dragons-natural.mp3',
      previewSrc: 'img/preview/imagine-dragons-natural-cover.jpg',
      songImgSrc: 'img/main/imagine-dragons-natural-pict.jpg',
      artist: 'Imagine Dragons',
      title: 'Natural',
      time: '3: 08',
      genre: 'Rock, Alternative rock',
      favorite: false,
      active: false,
      show: true,
    },
    {
      id: '3',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/imagine-dragons-radioactive.mp3',
      previewSrc: 'img/preview/imagine-dragons-radioactive-cover.jpg',
      songImgSrc: 'img/main/imagine-dragons-radioactive-pict.jpg',
      artist: 'Imagine Dragons',
      title: 'Radioactive',
      time: '3: 08',
      genre: 'Rock, Alternative rock',
      favorite: false,
      active: false,
      show: true,
    },
    {
      id: '4',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/tim-curry-I-put-a-spell-on-you.mp3',
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/tim-curry-you-cover.jpg',
      songImgSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/main/tim-curry-spell-on-you-pict.jpg',
      artist: 'Tim Curry',
      title: 'I putt a spell on you',
      time: '3: 35',
      genre: 'Rock',
      favorite: false,
      active: false,
      show: true,
    },
    {
      id: '5',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/syberian-beast-meets-mr-moore-wien.mp3',
      previewSrc: 'img/preview/syberian-beast-wien-cover.jpg',
      songImgSrc: 'img/main/syberian-beast-wien-pict.jpg',
      artist: 'Syberian beast',
      title: 'Wien',
      time: '3: 38',
      genre: 'Dubstep, electronic',
      favorite: false,
      active: false,
      show: true,
    },
    {
      id: '6',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/the-killers-somebody-told-me.mp3',
      previewSrc: 'img/preview/the-killers-sombody-told-me-cover.jpg',
      songImgSrc: 'img/main/the-killers-sombody-told-me-pict.jpg',
      artist: 'The Killers',
      title: 'Somebody told me',
      time: '3: 21',
      genre: 'Rock, Pop Rock',
      favorite: false,
      active: false,
      show: true,
    },
    {
      id: '7',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/leroy-good time.mp3',
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/leroy-good-time-cover.jpg',
      songImgSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/main/leroy-good-time-pict.jpg',
      artist: 'Leroy',
      title: 'Good time',
      time: '3: 30',
      genre: 'Rock',
      favorite: false,
      active: false,
      show: true,
    },
    {
      id: '8',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/schiller-life-i-feel-you-feat-heppner.mp3',
      previewSrc: 'img/preview/schiller-life-i-feel-you-cover.jpg',
      songImgSrc: 'img/main/schiller-life-i-feel-you-pict.jpg',
      artist: 'Schiller',
      title: 'Life... I feel you',
      time: '3: 49',
      genre: 'Ambient, electronic',
      favorite: false,
      active: false,
      show: true,
    },
    {
      id: '9',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/schiller-whats-coming.mp3',
      previewSrc: 'img/preview/schiller-whats-coming-cover.jpg',
      songImgSrc: 'img/main/schiller-whats-coming-pict.jpg',
      artist: 'Schiller',
      title: 'What\'s coming',
      time: '4: 26',
      genre: 'Ambient, electronic',
      favorite: false,
      active: false,
      show: true,
    },
    {
      id: '10',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/triangle-sun-karelia.mp3',
      previewSrc: 'img/preview/triangle-sun-karelia-cover.jpg',
      songImgSrc: 'img/main/triangle-sun-karelia-pict.jpg',
      artist: 'Triangle Sun',
      title: 'Karelia',
      time: '6: 41',
      genre: 'Ambient, instrumental',
      favorite: false,
      active: false,
      show: true,
    },
  ],
}

// listeners
function sortSongsByDefault(songs){
  return songs.sort((a, b) => a.artist.localeCompare(b.artist));
}

function filterOnClick(e){
  // it's a miss-click
  if (!e.target.id) {
    return;
  }

  state.filters = state.filters.map(filter => {
    if (e.target.id === filter.id) {
      filter.active = true;
    } else {
      filter.active = false;
    }

    return filter;
  });

  const filter = state.filters.find(filter => filter.id === e.target.id);
  if (!filter) {
    return showErrorMessage('something wrong with the filter!');
  }
  state.songs = state.songs.map(song => {
    if (song.genre.toLowerCase().includes(filter.name.toLowerCase())) {
      song.show = true;
    } else {
      song.show = false;
    }
    return song;
  });
  repaintPlayer(state);
}

function sortOnClick(e){
  // it's a miss-click
  if (!e.target.id) {
    return;
  }
  state.sorting = state.sorting.map(sortItem => {
    if (e.target.id === sortItem.id) {
      sortItem.active = true;
    } else {
      sortItem.active = false;
    }
    return sortItem;
  });

  const sortItem = state.sorting.find(sortItem => sortItem.id === e.target.id);
  if (!sortItem) {
    return showErrorMessage('something wrong with the sorting!');
  }

  state.songs.sort((a, b) => a[sortItem.name].localeCompare(b[sortItem.name]));
  repaintPlayer(state);
}

function searchChange(e){
  state.songs = state.songs.map(song => {
    if (song.artist.toLowerCase().includes(e.target.value.toLowerCase())) {
      song.show = true;
    } else {
      song.show = false;
    }
    return song;
  });
  repaintPlayer(state);
}

function playOnClick(e){
  // it's click on something, not on the button
  if (e.target.className !== 'material-icons') {
    return;
  }

  state.songs = state.songs.map(song => {
    if (song.id === e.target.id) {
      song.active = true;
    } else {
      song.active = false;
    }
    return song;
  });
  repaintPlayer(state);
  setActiveSong(state.songs, true);
}

function filtersReset(){
  state.filters = state.filters.map(filter => {
    filter.active = false;
    return filter;
  });
  state.songs = state.songs.map(song => {
    song.show = true;
    return song;
  });
  repaintPlayer(state);
}

function sortingReset(){
  state.sorting = state.sorting.map(sortItem => {
    sortItem.active = false;
    return sortItem;
  });
  state.songs = sortSongsByDefault(state.songs);
  repaintPlayer(state);
}

function songEnd(){
  const currentSongIndex = state.songs.findIndex(song => {
    return song.active;
  });

  if (currentSongIndex === -1) {
    return showErrorMessage('something wrong with the currentSong!');
  }

  let nextIndex;
  // it's because index starts from 0
  const maxIndex = state.songs.length - 1;

  if(currentSongIndex === maxIndex) {
    nextIndex = 0;
  } else {
    nextIndex = currentSongIndex + 1;
  }

  state.songs = state.songs.map((song, index) => {
    if (index === nextIndex) {
      console.log(song)
      song.active = true;
    } else {
      song.active = false;
    }
    return song;
  });
// todo start player
  repaintPlayer(state);
}

// get all elements once
const filterEl = document.querySelector('.filters');
const sortingEl = document.querySelector('.sorting');
const playlistEl = document.querySelector('.playlist');
const audioEl = document.querySelector('.audio');
const songHeaderEl = document.querySelector('.song-header');
const filterResetButtonEl = document.querySelector('#filters-reset');
const sortingResetButtonEl = document.querySelector('#sorting-reset');
const searchFormEl = document.querySelector('.search');
const searchInputEl = document.querySelector('#search');

// adding listeners
filterEl.addEventListener('click', filterOnClick);
sortingEl.addEventListener('click', sortOnClick);
document.querySelector('.playlist').addEventListener('click', playOnClick);
filterResetButtonEl.addEventListener('click', filtersReset);
sortingResetButtonEl.addEventListener('click', sortingReset);
searchFormEl.addEventListener('submit', (e) => e.preventDefault());
searchInputEl.addEventListener('input', searchChange);

function initPlayer(){
  // todo request for songs
  state.songs = sortSongsByDefault(state.songs);
  state.songs[0].active = true;
  repaintPlayer(state);
  setActiveSong(state.songs, false);
}

function showErrorMessage(message){
  alert(message);
  console.error(message);
}

function setActiveSong(songs, autoplay = false){
  const activeSong = songs.find(song => song.active);
  if (!activeSong) {
    showErrorMessage('something wrong with the songs list!');
  }

  audioEl.innerHTML = `
      <audio controls class="audio" id="audio-element" autoplay><source src="${activeSong.media}" type="audio/mpeg">
        <p>Your browser doesn't support HTML5 audio. Here is a 
        <a href="${activeSong.media}">link to the audio</a> instead.</p>
      </audio>
  `;

  songHeaderEl.innerHTML = `
      <img src="${activeSong.songImgSrc}" alt="${activeSong.artist} ${activeSong.title}">
      <section class="song-info">
        <h2>
          <span class="artist">${activeSong.artist}</span>
          <span class="name">${activeSong.title}</span>
        </h2>
        <h4 class="genre">${activeSong.genre}</h4>
      </section>
  `;

  // we need to add a listener in the next tick, because in the current tick
  // this component doesn't exist
  // I found it there:
  // https://javascript.info/event-loop
  setTimeout(() => {
    const audioEl = document.querySelector('#audio-element');
    audioEl.addEventListener('ended', songEnd);
  });
}

function repaintPlayer(state){
  repaintFilters(state.filters);
  repaintSorting(state.sorting);
  repaintSongs(state.songs);
  // todo add search
}

function repaintFilters(filters){
  filterEl.innerHTML = '';
  filters.forEach(filter => {
    filterEl.innerHTML += `<li class="${filter.active ? 'active' : ''}" id="${filter.id}">${filter.name}</li>`;
  });
}

function repaintSorting(sorting){
  sortingEl.innerHTML = '';
  sorting.forEach(sortItem => {
    sortingEl.innerHTML += `<li class="${sortItem.active ? 'active' : ''}" id="${sortItem.id}">${sortItem.name}</li>`;
  });
}

function repaintSongs(songs){
  playlistEl.innerHTML = `
              <tr>
              <th></th>
              <th>artist</th>
              <th>title</th>
              <th>time</th>
              <th>genre</th>
              <th></th>
            </tr>`;
  const atLeast1Song = songs.find(song => song.show);
  if (!atLeast1Song) {
  playlistEl.innerHTML = `
            <tr>
              <td>No songs with this filter</td>
            </tr>`
    return;
  }


  songs.forEach(song => {
    // todo on click
    // todo set active class
    // todo set is favorite

    if (song.show){
      playlistEl.innerHTML += `
            <tr class="${song.active ? 'active' : ''}">
              <td class="song-img">
                <img src="${song.previewSrc}" alt="${song.artist} ${song.title}">
              </td>
              <td class="song-artist">${song.artist}</td>
              <td>${song.title}</td>
              <td>${song.time}</td>
              <td>${song.genre}</td>
              <td><span class="material-icons" id="${song.id}">play_circle</span></td>
            </tr>`;
    }
  });
}

// when page is loaded init the player
window.addEventListener('load', initPlayer);