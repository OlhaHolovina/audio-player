export function repaintFilters(filters, filterEl){
  filterEl.innerHTML = '';
  filters.forEach(filter => {
    filterEl.innerHTML += `<li class="${filter.active ? 'active' : ''}" id="${filter.id}">${filter.name}</li>`;
  });
}

export function repaintSorting(sorting, sortingEl){
  sortingEl.innerHTML = '';
  sorting.forEach(sortItem => {
    sortingEl.innerHTML += `<li class="${sortItem.active ? 'active' : ''}" id="${sortItem.id}">${sortItem.name}</li>`;
  });
}

export function repaintSongs(songs, playlistEl){
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
            <tr class="no-hover">
              <td>No songs with this filter</td>
            </tr>`
    return;
  }


  songs.forEach(song => {
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
              <td><span class="material-icons next-song-button" id="${song.id}">play_circle</span></td>
            </tr>`;
    }
  });
}

