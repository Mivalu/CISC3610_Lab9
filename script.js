// sound effects
var sounds = [];
sounds[0] = new Audio('https://dl.dropboxusercontent.com/s/daryck7lxz5j4me/56kmodem.mp3');
sounds[1] = new Audio('https://dl.dropboxusercontent.com/s/e0jnqj8trk539ke/windows.mp3?dl=0');
sounds[2] = new Audio('https://dl.dropboxusercontent.com/s/zxkc7czo8wzp63h/zeldachest.mp3?dl=0');
sounds[3] = new Audio('https://dl.dropboxusercontent.com/s/aqtx2xqtba01evq/makeitso.mp3?dl=0');
sounds[4] = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Nature/Water/drip-Public_D-361/drip-Public_D-361_hifi.mp3');
var currentSound = 10;

// songs
var songs = [];
songs[0] = new Audio('https://dl.dropboxusercontent.com/s/k4s5959zucgljj4/bubblebobble.mp3');
songs[1] = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Nature/Rain/Seamless-wildpeak-7685/Seamless-wildpeak-7685_hifi.mp3');
songs[2] = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Nature/Wind/windchim-mRk-8425/windchim-mRk-8425_hifi.mp3');
var currentSong = 10;

function board(sound){
	console.log(sound);
	if (currentSound != 10){
		sounds[currentSound].pause();
		sounds[currentSound].currentTime = 0;
	}
	sounds[sound].play();
	currentSound = sound;
}

function radioClick(song){
	if (currentSong != 10 && song == "none"){
		songs[currentSong].loop = false;
		songs[currentSong].pause();
		songs[currentSong].currentTime = 0;
	}
	else {
		songs[song.value].loop = true;
		songs[song.value].play();
		currentSong = song.value;
	}
}