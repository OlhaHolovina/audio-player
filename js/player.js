const state = {
  search: '',
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
      active: false,
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
      active: false,
      show: true,
    },
    {
      id: '3',
      media: '/media/imagine-dragons-radioactive.mp3',
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
      media: '/media/tim-curry-I-put-a-spell-on-you.mp3',
      previewSrc: 'img/preview/tim-curry-I-put-a-spell-on-you-cover.jpg',
      songImgSrc: 'img/main/tim-curry-I-put-a-spell-on-you-pict.jpg',
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
      media: '/media/syberian-beast-meets-mr-moore-wien.mp3',
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
      media: '/media/the-killers-somebody-told-me.mp3',
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
      media: '/media/leroy-good time.mp3',
      previewSrc: 'img/preview/leroy-good-time-cover.jpg',
      songImgSrc: 'img/main/leroy-good-time-pict.jpg',
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
      media: '/media/schiller-life-i-feel-you-feat-heppner.mp3',
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
      media: '/media/schiller-whats-coming.mp3',
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
      media: '/media/triangle-sun-karelia.mp3',
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

// get all elements once
const filterEl = document.querySelector('.filters');
const sortingEl = document.querySelector('.sorting');
const playlistEl = document.querySelector('.playlist');
const audioEl = document.querySelector('.audio');
const songHeader = document.querySelector('.song-header');

function initPlayer(){
  // todo request for songs
  // todo input event listener
  state.songs[0].active = true;
  repaintPlayer(state);
}

function showErrorMessage(message){
  alert(message);
  console.error(message);
}

function setActiveSong(songs){
  const activeSong = songs.find(song => song.active);
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
  repaintSongs(state.songs);
  setActiveSong(state.songs);
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

function repaintSongs(songs){
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
      playlistEl.innerHTML += `
              <tr class="${song.active ? 'active' : ''}">
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