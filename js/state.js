export const state = {
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
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/imagine-dragons-believer-cover.jpg',
      songImgSrc: 'img/main/imagine-dragons-believer-pict.jpg',
      artist: 'Imagine Dragons',
      title: 'Believer',
      time: '3: 23',
      genre: 'Rock, Alternative rock',
      active: false,
      show: true
    },
    {
      id: '2',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/imagine-dragons-natural.mp3',
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/imagine-dragons-natural-cover.jpg',
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
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/imagine-dragons-radioactive-cover.jpg',
      songImgSrc: 'img/main/imagine-dragons-radioactive-pict.jpg',
      artist: 'Imagine Dragons',
      title: 'Radioactive',
      time: '3: 08',
      genre: 'Rock, Alternative rock',
      active: false,
      show: true,
    },
    {
      id: '4',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/tim-curry-I-put-a-spell-on-you.mp3',
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/tim-curry-you-cover.jpg',
      songImgSrc: 'img/main/tim-curry-spell-on-you-pict.jpg',
      artist: 'Tim Curry',
      title: 'I putt a spell on you',
      time: '3: 35',
      genre: 'Rock',
      active: false,
      show: true,
    },
    {
      id: '5',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/syberian-beast-meets-mr-moore-wien.mp3',
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/syberian-beast-wien-cover.jpg',
      songImgSrc: 'img/main/syberian-beast-wien-pict.jpg',
      artist: 'Syberian beast',
      title: 'Wien',
      time: '3: 38',
      genre: 'Dubstep, electronic',
      active: false,
      show: true,
    },
    {
      id: '6',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/the-killers-somebody-told-me.mp3',
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/the-killers-sombody-told-me-cover.jpg',
      songImgSrc: 'img/main/the-killers-sombody-told-me-pict.jpg',
      artist: 'The Killers',
      title: 'Somebody told me',
      time: '3: 21',
      genre: 'Rock, Pop Rock',
      active: false,
      show: true,
    },
    {
      id: '7',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/leroy-good time.mp3',
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/leroy-good-time-cover.jpg',
      songImgSrc: 'img/main/leroy-good-time-pict.jpg',
      artist: 'Leroy',
      title: 'Good time',
      time: '3: 30',
      genre: 'Rock',
      active: false,
      show: true,
    },
    {
      id: '8',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/schiller-life-i-feel-you-feat-heppner.mp3',
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/schiller-life-i-feel-you-cover.jpg',
      songImgSrc: 'img/main/schiller-life-i-feel-you-pict.jpg',
      artist: 'Schiller',
      title: 'Life... I feel you',
      time: '3: 49',
      genre: 'Ambient, electronic',
      active: false,
      show: true,
    },
    {
      id: '9',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/schiller-whats-coming.mp3',
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/schiller-whats-coming-cover.jpg',
      songImgSrc: 'img/main/schiller-whats-coming-pict.jpg',
      artist: 'Schiller',
      title: 'What\'s coming',
      time: '4: 26',
      genre: 'Ambient, electronic',
      active: false,
      show: true,
    },
    {
      id: '10',
      media: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/media/triangle-sun-karelia.mp3',
      previewSrc: 'https://raw.githubusercontent.com/OlhaHolovina/audio-player/main/img/preview/triangle-sun-karelia-cover.jpg',
      songImgSrc: 'img/main/triangle-sun-karelia-pict.jpg',
      artist: 'Triangle Sun',
      title: 'Karelia',
      time: '6: 41',
      genre: 'Ambient, instrumental',
      active: false,
      show: true,
    },
  ],
}