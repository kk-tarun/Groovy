const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volume_slider = document.querySelector(".volume_slider");

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const songs = [
  'st/Different World/All Falls Down (feat. Juliander)',
  'st/Different World/Alone',
  'st/Different World/Darkside',
  'st/Different World/Diamond Heart',
  'st/Different World/Different World (feat. CORSAK)',
  'st/Different World/Do It All for You',
  'st/Different World/Faded (Interlude)',
  'st/Different World/Faded',
  'st/Different World/I Don\'t Wanna Go',
  'st/Different World/Interlude',
  'st/Different World/Intro',
  'st/Different World/Lily',
  'st/Different World/Lonely (feat. ISÁK & Omar Noir)',
  'st/Different World/Lost Control',
  'st/Different World/Sing Me to Sleep',

  'st/Evolve/Yesterday',
  'st/Evolve/Believer',
  'st/Evolve/Dancing In The Dark',
  'st/Evolve/Mouth Of The River',
  'st/Evolve/Next To Me',
  'st/Evolve/Rise Up',
  'st/Evolve/Start Over',
  'st/Evolve/Thunder',
  'st/Evolve/Walking The Wire',
  'st/Evolve/Whatever It Takes',

  'st/FOUR (Deluxe)/Night Changes',
  'st/FOUR (Deluxe)/No Control',
  'st/FOUR (Deluxe)/Once in a Lifetime',
  'st/FOUR (Deluxe)/Ready to Run',
  'st/FOUR (Deluxe)/Spaces',
  'st/FOUR (Deluxe)/Steal My Girl',
  'st/FOUR (Deluxe)/Stockholm Syndrome',
  'st/FOUR (Deluxe)/Where Do Broken Hearts Go',
  'st/FOUR (Deluxe)/18',
  'st/FOUR (Deluxe)/Act My Age',
  'st/FOUR (Deluxe)/Change Your Ticket',
  'st/FOUR (Deluxe)/Clouds',
  'st/FOUR (Deluxe)/Fireproof',
  'st/FOUR (Deluxe)/Girl Almighty',
  'st/FOUR (Deluxe)/Illusion',

  'st/Midnights/Maroon',
  'st/Midnights/Midnight Rain',
  'st/Midnights/Snow On The Beach (feat. Lana Del Rey)',
  'st/Midnights/Anti-Hero',
  'st/Midnights/Lavender Haze',
  'st/Midnights/Lover',
  'st/Midnights/Miss Americana & The Heartbreak Prince',
  'st/Midnights/Paper Rings',
  'st/Midnights/The Archer',
  'st/Midnights/The Man',
  'st/Midnights/Cornelia Street',
  'st/Midnights/Cruel Summer',
  'st/Midnights/Death By A Thousand Cuts',
  'st/Midnights/I Forgot That You Existed',
  'st/Midnights/I Think He Knows',
  'st/Midnights/London Boy',

  'st/Mind Of Mine (Deluxe Edition)/BeFoUr',
  'st/Mind Of Mine (Deluxe Edition)/BLUE',
  'st/Mind Of Mine (Deluxe Edition)/BoRdErSz',
  'st/Mind Of Mine (Deluxe Edition)/BRIGHT',
  'st/Mind Of Mine (Deluxe Edition)/dRuNk',
  'st/Mind Of Mine (Deluxe Edition)/fOoL fOr YoU',
  'st/Mind Of Mine (Deluxe Edition)/LIKE I WOULD',
  'st/Mind Of Mine (Deluxe Edition)/lUcOzAdE',
  'st/Mind Of Mine (Deluxe Edition)/MiNd Of MiNdd (Intro)',
  'st/Mind Of Mine (Deluxe Edition)/PILLOWTALK',
  'st/Mind Of Mine (Deluxe Edition)/rEaR vIeW',
  'st/Mind Of Mine (Deluxe Edition)/sHe',
  'st/Mind Of Mine (Deluxe Edition)/TiO',
  'st/Mind Of Mine (Deluxe Edition)/tRuTh',
  'st/Mind Of Mine (Deluxe Edition)/wRoNg (feat. Kehlani)',

  'st/Proof/Blood Sweat & Tears',
  'st/Proof/Born Singer',
  'st/Proof/Boy With Luv (Feat. Halsey)',
  'st/Proof/Butter',
  'st/Proof/DNA',
  'st/Proof/Dynamite',
  'st/Proof/Euphoria',
  'st/Proof/FAKE LOVE',
  'st/Proof/Filter',
  'st/Proof/IDOL',
  'st/Proof/Life Goes On',
  'st/Proof/ON',
  'st/Proof/RUN',
  'st/Proof/Singularity',
  'st/Proof/Yet To Come',

  'st/SOUR/1 step forward, 3 steps back',
  'st/SOUR/brutal',
  'st/SOUR/deja vu',
  'st/SOUR/drivers license',
  'st/SOUR/enough for you',
  'st/SOUR/favorite crime',
  'st/SOUR/good 4 u',
  'st/SOUR/happier',
  'st/SOUR/hope ur ok',
  'st/SOUR/jealousy, jealousy',
  'st/SOUR/traitor',
  'st/SOUR/I Think I Kinda, You Know - Duet',
  'st/SOUR/Just for a Moment',
  'st/SOUR/Start of Something New',
  'st/SOUR/The Rose Song',
  'st/SOUR/Wondering',
  'st/SOUR/All I Want',
  'st/SOUR/Even When The Best Part',

];

const favoriteArtists = {
  "bts": [
    'st/Proof/Blood Sweat & Tears',
    'st/Proof/Born Singer',
    'st/Proof/Boy With Luv (Feat. Halsey)',
    'st/Proof/Butter',
    'st/Proof/DNA',
    'st/Proof/Dynamite',
    'st/Proof/Euphoria',
    'st/Proof/FAKE LOVE',
    'st/Proof/Filter',
    'st/Proof/IDOL',
    'st/Proof/Life Goes On',
    'st/Proof/ON',
    'st/Proof/RUN',
    'st/Proof/Singularity',
    'st/Proof/Yet To Come',
  ],

  "oneDirection": [
    'st/FOUR (Deluxe)/Night Changes',
    'st/FOUR (Deluxe)/No Control',
    'st/FOUR (Deluxe)/Once in a Lifetime',
    'st/FOUR (Deluxe)/Ready to Run',
    'st/FOUR (Deluxe)/Spaces',
    'st/FOUR (Deluxe)/Steal My Girl',
    'st/FOUR (Deluxe)/Stockholm Syndrome',
    'st/FOUR (Deluxe)/Where Do Broken Hearts Go',
    'st/FOUR (Deluxe)/18',
    'st/FOUR (Deluxe)/Act My Age',
    'st/FOUR (Deluxe)/Change Your Ticket',
    'st/FOUR (Deluxe)/Clouds',
    'st/FOUR (Deluxe)/Fireproof',
    'st/FOUR (Deluxe)/Girl Almighty',
    'st/FOUR (Deluxe)/Illusion',
  ],

  "taylorSwift": [
    'st/Midnights/Maroon',
    'st/Midnights/Midnight Rain',
    'st/Midnights/Snow On The Beach (feat. Lana Del Rey)',
    'st/Midnights/Anti-Hero',
    'st/Midnights/Lavender Haze',
    'st/Midnights/Lover',
    'st/Midnights/Miss Americana & The Heartbreak Prince',
    'st/Midnights/Paper Rings',
    'st/Midnights/The Archer',
    'st/Midnights/The Man',
    'st/Midnights/Cornelia Street',
    'st/Midnights/Cruel Summer',
    'st/Midnights/Death By A Thousand Cuts',
    'st/Midnights/I Forgot That You Existed',
    'st/Midnights/I Think He Knows',
    'st/Midnights/London Boy',
  ],

  "oliviaRodrigo": [
    'st/SOUR/1 step forward, 3 steps back',
    'st/SOUR/brutal',
    'st/SOUR/deja vu',
    'st/SOUR/drivers license',
    'st/SOUR/enough for you',
    'st/SOUR/favorite crime',
    'st/SOUR/good 4 u',
    'st/SOUR/happier',
    'st/SOUR/hope ur ok',
    'st/SOUR/jealousy, jealousy',
    'st/SOUR/traitor',
    'st/SOUR/I Think I Kinda, You Know - Duet',
    'st/SOUR/Just for a Moment',
    'st/SOUR/Start of Something New',
    'st/SOUR/The Rose Song',
    'st/SOUR/Wondering',
    'st/SOUR/All I Want',
    'st/SOUR/Even When The Best Part',
  ],

  "zaynMalik": [
    'st/Mind Of Mine (Deluxe Edition)/BeFoUr',
    'st/Mind Of Mine (Deluxe Edition)/BLUE',
    'st/Mind Of Mine (Deluxe Edition)/BoRdErSz',
    'st/Mind Of Mine (Deluxe Edition)/BRIGHT',
    'st/Mind Of Mine (Deluxe Edition)/dRuNk',
    'st/Mind Of Mine (Deluxe Edition)/fOoL fOr YoU',
    'st/Mind Of Mine (Deluxe Edition)/LIKE I WOULD',
    'st/Mind Of Mine (Deluxe Edition)/lUcOzAdE',
    'st/Mind Of Mine (Deluxe Edition)/MiNd Of MiNdd (Intro)',
    'st/Mind Of Mine (Deluxe Edition)/PILLOWTALK',
    'st/Mind Of Mine (Deluxe Edition)/rEaR vIeW',
    'st/Mind Of Mine (Deluxe Edition)/sHe',
    'st/Mind Of Mine (Deluxe Edition)/TiO',
    'st/Mind Of Mine (Deluxe Edition)/tRuTh',
    'st/Mind Of Mine (Deluxe Edition)/wRoNg (feat. Kehlani)',
  ],

  "alanWalker": [
    'st/Different World/All Falls Down (feat. Juliander)',
    'st/Different World/Alone',
    'st/Different World/Darkside',
    'st/Different World/Diamond Heart',
    'st/Different World/Different World (feat. CORSAK)',
    'st/Different World/Do It All for You',
    'st/Different World/Faded (Interlude)',
    'st/Different World/Faded',
    'st/Different World/I Don\'t Wanna Go',
    'st/Different World/Interlude',
    'st/Different World/Intro',
    'st/Different World/Lily',
    'st/Different World/Lonely (feat. ISÁK & Omar Noir)',
    'st/Different World/Lost Control',
    'st/Different World/Sing Me to Sleep',
  ]
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(songs);
let songIndex = Math.floor(Math.random() * songs.length)
loadSong(songs[songIndex])

function loadSong(song) {
  pauseSong()
  var ans = song.split('/')
  var songTitle = ans[ans.length - 1]
  title.innerText = songTitle
  audio.src = `${song}.mp3`

  var songAlbum = ans[ans.length - 2];
  if (songAlbum === "SOUR") {
    cover.src = `artists/oliviaRodrigo.jpg`;
    document.getElementById("albumCover").style.backgroundImage = "url(artists/oliviaRodrigo.jpg)";
  }
  else if (songAlbum === "Proof") {
    cover.src = `artists/bts.jpg`;
    document.getElementById("albumCover").style.backgroundImage = "url(artists/bts.jpg)";
  }
  else if (songAlbum === "Mind Of Mine (Deluxe Edition)") {
    cover.src = `artists/zayn2.jpg`;
    document.getElementById("albumCover").style.backgroundImage = "url(artists/zayn2.jpg)";
  }
  else if (songAlbum === "Midnights") {
    cover.src = `artists/taylorSwift.jpg`;
    document.getElementById("albumCover").style.backgroundImage = "url(artists/taylorSwift.jpg)";
  }
  else if (songAlbum === "Evolve") {
    cover.src = `artists/imagineDragon.jpg`;
    document.getElementById("albumCover").style.backgroundImage = "url(artists/imagineDragon.jpg)";
  }
  else if (songAlbum === "FOUR (Deluxe)") {
    cover.src = `artists/oneDirection.jpg`;
    document.getElementById("albumCover").style.backgroundImage = "url(artists/oneDirection.jpg)";
  }
  else if (songAlbum === "Different World") {
    cover.src = `artists/alanWalker.jpg`;
    document.getElementById("albumCover").style.backgroundImage = "url(artists/alanWalker.jpg)";
  }
}

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

audio.addEventListener('ended', nextSong);

// Loads Songs to playlist
Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
  var ans = songs[i].split('/')
  var songTitle = ans[ans.length - 1]
  title.innerText = songTitle
  element.getElementsByTagName('h5')[0].innerText = songTitle;

  var songAlbum = ans[ans.length - 2];
  if (songAlbum === "SOUR") {
    element.getElementsByTagName('img')[0].src = `artists/oliviaRodrigo.jpg`;
  }
  else if (songAlbum === "Proof") {
    element.getElementsByTagName('img')[0].src = `artists/bts.jpg`;
  }
  else if (songAlbum === "Mind Of Mine (Deluxe Edition)") {
    element.getElementsByTagName('img')[0].src = `artists/zayn2.jpg`;
  }
  else if (songAlbum === "Midnights") {
    element.getElementsByTagName('img')[0].src = `artists/taylorSwift.jpg`;
  }
  else if (songAlbum === "Evolve") {
    element.getElementsByTagName('img')[0].src = `artists/imagineDragon.jpg`;
  }
  else if (songAlbum === "FOUR (Deluxe)") {
    element.getElementsByTagName('img')[0].src = `artists/oneDirection.jpg`;
  }
  else if (songAlbum === "Different World") {
    element.getElementsByTagName('img')[0].src = `artists/alanWalker.jpg`;
  }

  element.addEventListener('click', () => {
    songIndex = i
    loadSong(songs[i])
    playSong();
  })
  songIndex = 0
  loadSong(songs[songIndex])
})

//favourite artist songs
//BTS
document.getElementsByClassName('bts')[0].addEventListener('click', () => {
  shuffle(favoriteArtists.bts);

  Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {

    songs[i] = favoriteArtists.bts[i]
    var ans = favoriteArtists.bts[i].split('/')
    var songTitle = ans[ans.length - 1]
    title.innerText = songTitle
    element.getElementsByTagName('h5')[0].innerText = songTitle;

    var songAlbum = ans[ans.length - 2];
    if (songAlbum === "Proof") {
      element.getElementsByTagName('img')[0].src = `artists/bts.jpg`;
    }

    element.addEventListener('click', () => {
      songIndex = i
      loadSong(favoriteArtists.bts[i])
      playSong();
    })
  })
  songIndex = 0
  loadSong(songs[songIndex])
})

//One Direction
document.getElementsByClassName('oneDirection')[0].addEventListener('click', () => {
  shuffle(favoriteArtists.oneDirection);

  Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {

    songs[i] = favoriteArtists.oneDirection[i]
    var ans = favoriteArtists.oneDirection[i].split('/')
    var songTitle = ans[ans.length - 1]
    title.innerText = songTitle
    element.getElementsByTagName('h5')[0].innerText = songTitle;

    var songAlbum = ans[ans.length - 2];
    if (songAlbum === "FOUR (Deluxe)") {
      element.getElementsByTagName('img')[0].src = `artists/oneDirection.jpg`;
    }

    element.addEventListener('click', () => {
      songIndex = i
      loadSong(favoriteArtists.oneDirection[i])
      playSong();
    })
  })
  songIndex = 0
  loadSong(songs[songIndex])
})

//Taylor Swift
document.getElementsByClassName('taylorSwift')[0].addEventListener('click', () => {
  shuffle(favoriteArtists.taylorSwift);

  Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {

    songs[i] = favoriteArtists.taylorSwift[i]
    var ans = favoriteArtists.taylorSwift[i].split('/')
    var songTitle = ans[ans.length - 1]
    title.innerText = songTitle
    element.getElementsByTagName('h5')[0].innerText = songTitle;

    var songAlbum = ans[ans.length - 2];
    if (songAlbum === "Midnights") {
      element.getElementsByTagName('img')[0].src = `artists/taylorSwift.jpg`;
    }

    element.addEventListener('click', () => {
      songIndex = i
      loadSong(favoriteArtists.taylorSwift[i])
      playSong();
    })
  })
  songIndex = 0
  loadSong(songs[songIndex])
})

//Olivia Rodrigo
document.getElementsByClassName('oliviaRodrigo')[0].addEventListener('click', () => {
  shuffle(favoriteArtists.oliviaRodrigo);

  Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    songs[i] = favoriteArtists.oliviaRodrigo[i]
    var ans = favoriteArtists.oliviaRodrigo[i].split('/')
    var songTitle = ans[ans.length - 1]
    title.innerText = songTitle
    element.getElementsByTagName('h5')[0].innerText = songTitle;

    var songAlbum = ans[ans.length - 2];
    if (songAlbum === "SOUR") {
      element.getElementsByTagName('img')[0].src = `artists/oliviaRodrigo.jpg`;
    }

    element.addEventListener('click', () => {
      songIndex = i
      loadSong(favoriteArtists.oliviaRodrigo[i])
      playSong();
    })
  })
  songIndex = 0
  loadSong(songs[songIndex])
})

//Zayn Malik
document.getElementsByClassName('zaynMalik')[0].addEventListener('click', () => {
  shuffle(favoriteArtists.zaynMalik);

  Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {

    songs[i] = favoriteArtists.zaynMalik[i]
    var ans = favoriteArtists.zaynMalik[i].split('/')
    var songTitle = ans[ans.length - 1]
    title.innerText = songTitle
    element.getElementsByTagName('h5')[0].innerText = songTitle;

    var songAlbum = ans[ans.length - 2];
    if (songAlbum === "Mind Of Mine (Deluxe Edition)") {
      element.getElementsByTagName('img')[0].src = `artists/zayn2.jpg`;
    }

    element.addEventListener('click', () => {
      songIndex = i
      loadSong(favoriteArtists.zaynMalik[i])
      playSong();
    })
  })
  songIndex = 0
  loadSong(songs[songIndex])
})

//Alan Walker
document.getElementsByClassName('alanWalker')[0].addEventListener('click', () => {
  shuffle(favoriteArtists.alanWalker);
  var length = favoriteArtists.alanWalker.length;

  Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {

    songs[i] = favoriteArtists.alanWalker[i]
    var ans = favoriteArtists.alanWalker[i].split('/')
    var songTitle = ans[ans.length - 1]
    title.innerText = songTitle
    element.getElementsByTagName('h5')[0].innerText = songTitle;

    var songAlbum = ans[ans.length - 2];
    if (songAlbum === "Different World") {
      element.getElementsByTagName('img')[0].src = `artists/alanWalker.jpg`;
    }

    element.addEventListener('click', () => {
      songIndex = i
      loadSong(favoriteArtists.alanWalker[i])
      playSong();
    })
  })
  songIndex = 0
  loadSong(songs[songIndex])
})


//Last Listening
document.getElementById("lastListening").addEventListener('click', () => {
  prevSong();
})

//Search Function
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, a, i;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

//Volume Control Function
function setVolume() {
  audio.volume = volume_slider.value / 100;
}