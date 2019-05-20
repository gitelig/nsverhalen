/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


/* 1. Microinteractie voeg add button */

var section = document.querySelector('.add');
var section2 = document.querySelector('.cirkel');
var feedback = document.querySelector('.feedback');

var knop = document.querySelector('.add');

function collapse() {
	/* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
	section.classList.toggle('add2');
	section2.classList.toggle('cirkel2');
	feedback.classList.add('feedback2');

	setTimeout(function () {
		feedback.classList.toggle('feedback2');
	}, 7000);
}

/* 2. voeg een event toe aan een element */
knop.addEventListener('click', collapse);



var afspeelknop = document.querySelector('.play');

function speler() {

	afspeelknop.classList.toggle('play2');
	
	setTimeout(function () {
		afspeelknop.classList.toggle('play1');
	}, 3000);
	
	setTimeout(function () {
		afspeelknop.classList.toggle('play2');
	}, 3000);
	
	setTimeout(function () {
		afspeelknop.classList.toggle('play3');
	}, 3000);
	
}

/* 2. voeg een event toe aan een element */
afspeelknop.addEventListener('click', speler);





/* 2. Microinteractie zoekbalk */

var zoekBalk = document.querySelector('.zoekbalk');
var navKnop = document.querySelector('.zoekknop');
var sluit = document.querySelector('.sluiten');
var filterNav = document.querySelector('.filternav');
var zoekKnop = document.querySelector('.zoekknop_actief');

function inSlaan() {
	zoekBalk.classList.toggle('zoekbalk2');
	filterNav.classList.toggle('filternav2');
	zoekKnop.classList.toggle('zoekknop_actief2');
	sluit.classList.toggle('sluiten2');

}

navKnop.addEventListener('click', inSlaan);
sluit.addEventListener('click', inSlaan);



/* 2. filter */

var popUp = document.querySelector('.pop-up');
var filKnop = document.querySelector('.filternavknop');
var sluitFilter = document.querySelector('.filterknop');

function popper() {
	popUp.classList.toggle('pop-up2');
}

filKnop.addEventListener('click', popper);
sluitFilter.addEventListener('click', popper);

/* 3. add */