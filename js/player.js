import {state} from "./state.js";
import {showErrorMessage, sortSongsByDefault} from "./helpers.js";
import {repaintFilters, repaintSongs, repaintSorting} from "./repainters.js";

// listeners
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
      song.active = true;
    } else {
      song.active = false;
    }
    return song;
  });

  repaintPlayer(state);
  setActiveSong(state.songs, true);
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
  state.songs = sortSongsByDefault(state.songs);
  state.songs[0].active = true;
  repaintPlayer(state);
  setActiveSong(state.songs, false);
}

function setActiveSong(songs, autoplay = false){
  const activeSong = songs.find(song => song.active);
  if (!activeSong) {
    showErrorMessage('something wrong with the songs list!');
  }

  audioEl.innerHTML = `
      <audio controls class="audio" id="audio-element"><source src="${activeSong.media}" type="audio/mpeg">
        <p>Your browser doesn't support HTML5 audio. Here is a 
        <a href="${activeSong.media}">link to the audio</a> instead.</p>
      </audio>
      <span class="material-icons" id="next-button">
        skip_next
      </span>
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

  // we need to add a listener in the next tick,
  // because in the current loop tick this component doesn't exist
  // I found it there:
  // https://javascript.info/event-loop
  setTimeout(() => {
    // next button handlers
    const nextButtonEl = document.querySelector('#next-button');
    nextButtonEl.addEventListener('click', songEnd);

    // audio elements handlers
    const audioEl = document.querySelector('#audio-element');
    audioEl.addEventListener('ended', songEnd);

    if (autoplay){
      audioEl.play();
    }
  });
}

function repaintPlayer(state){
  repaintFilters(state.filters, filterEl);
  repaintSorting(state.sorting, sortingEl);
  repaintSongs(state.songs, playlistEl);
}

// when page is loaded init the player
window.addEventListener('load', initPlayer);