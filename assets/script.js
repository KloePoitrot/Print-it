const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let arrowleft = document.querySelector('.arrow_left');
let arrowright = document.querySelector('.arrow_right');
let bullets = document.getElementsByClassName('dot')

let imgIndex = 0;
let bulIndex = 0
function before(){
	imgIndex--;
	bulIndex = imgIndex;
	bulIndex++;
	
	if(slides[imgIndex] == null){
		imgIndex = slides.length - 1;
	}
	if(bulIndex == slides.length + 1){
		bulIndex = 0;
	}

	document.querySelector('.banner-img').src = 'assets/images/slideshow/' + slides[imgIndex]["image"];
	document.querySelector('#banner p').innerHTML = slides[imgIndex]["tagLine"];

	bullets[bulIndex].classList = ('dot')
	bullets[imgIndex].classList = ('dot dot_selected')
}

function after(){
	imgIndex++;
	bulIndex = imgIndex;
	bulIndex--;

	if(slides[imgIndex] == null){
		imgIndex = 0;
	}
	if(bulIndex == -1){
		bulIndex = slides.length;
	}

	document.querySelector('.banner-img').src = 'assets/images/slideshow/' + slides[imgIndex]["image"];
	document.querySelector('#banner p').innerHTML = slides[imgIndex]["tagLine"];

	bullets[bulIndex].classList = ('dot')
	bullets[imgIndex].classList = ('dot dot_selected')
}

arrowleft.addEventListener('click', before)
arrowright.addEventListener('click', after)

