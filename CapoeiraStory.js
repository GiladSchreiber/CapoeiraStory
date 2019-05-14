
var aBtn = document.querySelector("#aBtn");
var bBtn = document.querySelector("#bBtn");
var aPic = document.querySelector("#aPic");
var bPic = document.querySelector("#bPic");
var soundBtn = document.querySelector("#soundBtn");
var soundPic = document.querySelector("#soundPic");
var curImage = document.querySelector("#curIm");
var numImage = 0;
var endSong = new Audio('endSongShort.mp3');
var backSong = new Audio('backgroundMusic.mp3');
var isSound = false;
var isFirst = true;


init();

function init(){
	aBtn.addEventListener("click", goA);
	bBtn.addEventListener("click", goB);
	soundBtn.addEventListener("click", goSound);
	
}


function goA(){
	if (numImage == 4)
	{
		numImage = 5;
	}
	
		else if (numImage == 10)
	{
		numImage = 11;
	}

	else if (numImage == 13)
	{
		numImage = 0;
		backSong.volume = 0.2;
		endSong.volume = 0;
		bBtn.classList.remove("disabled");
		aBtn.classList.add("disabled");
		aPic.src = "Transparent_X.png";
		bPic.src = "forward.png";
	}
	
	if (numImage == 13 || numImage == 0){
		curImage.src = "page" + numImage + ".png";
	} else {
		curImage.src = "page" + numImage + ".jpg";
	}
	if (numImage == 13){
		aBtn.classList.remove("disabled");
		bBtn.classList.add("disabled");
		bPic.src = "Transparent_X.png";
		aPic.src = "arrows.png";
		backSong.volume = 0;
		endSong.play();
		endSong.volume = 0.2;

	} else {
			aBtn.classList.add("disabled");
		bPic.src = "forward.png";
		aPic.src = "Transparent_X.png";
	}
}


function goB(){
	if (isFirst){
		isFirst = false;
		backSong.play();
		isSound = true;
		backSong.volume = 0.2;
		soundPic.src = "sound.png"; //todo chack sound!!!!
	}
	if (numImage == 4)
	{
		numImage = 7;
	}
	else if (numImage == 6)
	{
		numImage = 9;
	}
	else if (numImage == 10)
	{
		numImage = 12;
	}
	else if (numImage == 11)
	{
		numImage = 13;
	}

	else if (numImage<13){
		numImage++;
	}
	if (numImage == 13 || numImage == 0){
		curImage.src = "page" + numImage + ".png";
	} else {
		curImage.src = "page" + numImage + ".jpg";
	}
	
	if (numImage == 4)
	{
		aBtn.classList.remove("disabled");
		bPic.src = "hand.jpg";
		aPic.src = "fight-icon-6.jpg";
	} else if (numImage == 10){
		aBtn.classList.remove("disabled");
		bPic.src = "brawl008-512.png";
		aPic.src = "freedom-dove-512.png";
	} else if (numImage == 13){
		aBtn.classList.remove("disabled");
		bBtn.classList.add("disabled");
		bPic.src = "Transparent_X.png";
		aPic.src = "arrows.png";
		backSong.volume = 0;
		endSong.play();
		endSong.volume = 0.2;
	} else 
	{
		aBtn.classList.add("disabled");
		bPic.src = "forward.png";
		aPic.src = "Transparent_X.png";
	}
}

function goSound(){
	if (isSound){
		isSound = false;
		backSong.volume = 0;
		soundPic.src = "mute.png";
	} else {
		isSound = true;
		backSong.volume = 0.2;
		soundPic.src = "sound.png";
	}
}