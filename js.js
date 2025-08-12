// si y'a un element que tu ne connait pas trop ou que le nom n'est pas très évocateur fait : CRTL + R, tu écrit le mot et il seramit en surbillance dans tous les fenetres html css js 


// changement d'image pour boutons quand tu clique  

var imagePrecedente;
var characterElement = document.getElementById("character");        
var divThebeElement = document.querySelector(".UNthebe");           // nom de l'image d'origine qui vas subire TOUS les changements 


var count = 100;         // définir que le pourcentage est de 100 % 
var pourcentageSoulElement = document.getElementById("pourcentage-soul");         // définir chaque pourcentage 3 dans ce cas 
var pourcentageTenebreElement = document.getElementById("pourcentage-tenebre");
var pourcentageSleepElement = document.getElementById("pourcentage-sleep");

function changerImage(img) {               // fonction du bouton vas voir le html ligne 131  mais laisse la même ligne exact 
    imagePrecedente = img.src;

    img.src = "asset/bouton/faim/miam_clique.png";          // source du bouton toi même tu sais 
    setTimeout(function () {

        img.src = imagePrecedente;
    }, 100);                                  // vitesse où le bouton revient à l'image précedente 
}

var imagePrecedente;
function changerImage2(img) {
    imagePrecedente = img.src;
    img.src = "asset/bouton/tenebre/tenebre_click.png";
    setTimeout(function () {

        img.src = imagePrecedente;
    }, 100);
}

var imagePrecedente;
function changerImage3(img) {
    imagePrecedente = img.src;

    img.src = "asset/bouton/dodo/dodo_cliqk.png";
    setTimeout(function () {

        img.src = imagePrecedente;
    }, 100);
}

var imagePrecedente;
function changerImage4(img) {
    imagePrecedente = img.src;

    img.src = "asset/bouton/encore/encore_passif.png";
    setTimeout(function () {

        img.src = imagePrecedente;
    }, 100);
}

var isImageChanged = false;

function changerImage5(img) {                             // bouton qui met ou retire de la musique en arrière plan 
    if (!isImageChanged) {
    img.src = "asset/bouton/musique/le bon.png";
    isImageChanged = true;
    } else {
    img.src = "asset/bouton/musique/le bon2.png";
    isImageChanged = false;
    }
}





// en soit à chaque petit bloc c'est des copier coller juste en ajustant les valeurs selon toi 




// Pourcentage ame.
window.addEventListener('load', function() {                           // cette partie vas être le pourcentage 
	var count = 25;													   // cette ligne c'est pour à partir de combient démare ton % 
	var timer = setInterval(function() {
		if (!characterElement.classList.contains("roiDemon")) {        // ce terme roiDemon c'est juste le container où est mon perso 
			count--;
			if (count >= 0) {										 // cette ligne c'est pour quand ça touche 0 il est bloquer 
				pourcentageSoulElement.innerHTML = count ;
			} else {
				clearInterval(timer);
				pourcentageSoulElement.innerHTML = "0";
			}
		}
	}, 2000);														// vitesse d'épuisement de ton % 

	var ToujourPlus = document.getElementById("ToujourPlus");        // Toujour plus c'est le nom d'un bouton à voir dans html ou css
	ToujourPlus.addEventListener("click", function() {
		if (!characterElement.classList.contains("roiDemon")) {
			count += 1;                                               // fait en sorte d'ajouter +1 au % 
			if (count > 100) {
				count = 100;
			}
			pourcentageSoulElement.innerHTML = count;
		}
	});

	var miamButtonElement = document.getElementById("Miam-bouton");     // je crois c'est pour ne jamais dépasser les 100 % je crois.. peut être... sûrement même
	miamButtonElement.addEventListener("click", function() {
		if (!characterElement.classList.contains("roiDemon") && count > 0) {
			count += 1;
			if (count > 100) {
				count = 100;
			}
			pourcentageSoulElement.innerHTML = count;
		}
	});
});





// Pourcentage tenebre. en soit un copier coller du précedent avec les valeurs differentes parcequ'il n'evolue pas au même rythme 


window.addEventListener('load', function() {
	var count = 25;
	var timer = setInterval(function() {
		if (!characterElement.classList.contains("roiDemon")) {
			count--;
			if (count >= 0) {
				pourcentageTenebreElement.innerHTML = count;
			} else {
				clearInterval(timer);
				pourcentageTenebreElement.innerHTML = "0%";
			}
		}
	}, 2500);

	var EncorePlus = document.getElementById("EncorePlus");
	EncorePlus.addEventListener("click", function() {
		if (!characterElement.classList.contains("roiDemon")) {
			count += 1;
			if (count > 100) {
				count = 100;
			}
			pourcentageTenebreElement.innerHTML = count;
		}
	});

	var thenebreBouton = document.getElementById("thenebreBouton");
	thenebreBouton.addEventListener("click", function() {
		if (!characterElement.classList.contains("roiDemon")) {
			if (count > 0) { 
				count += 1;
				if (count > 100) {
					count = 100;
				}
				pourcentageTenebreElement.innerHTML = count;
			}
		}
	});
});


// Pourcentage DODO. pareil que la phrase du haut 


window.addEventListener('load', function() {
	var count = 100;
	var timer = setInterval(function() {
		if (!characterElement.classList.contains("roiDemon")) { 
			count--;
			if (count >= 0) {
				pourcentageSleepElement.innerHTML = count;
			} else {
				clearInterval(timer);
				pourcentageSleepElement.innerHTML = "0%";
			}
		}
	}, 1500);

	var EncoreplusD = document.getElementById("EncoreplusD");
	EncoreplusD.addEventListener("click", function() {
		if (!characterElement.classList.contains("roiDemon")) { 
			count += 1;
			if (count > 100) {
				count = 100;
			}
			pourcentageSleepElement.innerHTML = count;
		}
	});

	var dodoBouton = document.getElementById("dodoBouton");
	dodoBouton.addEventListener("click", function() {
		if (!characterElement.classList.contains("roiDemon") && count > 0) { 
			count += 1;
			if (count > 100) {
				count = 100;
			}
			pourcentageSleepElement.innerHTML = count;
		}
	});
});









function checkStat() {
    var sleep = parseInt(pourcentageSleepElement.innerHTML);
    var soul = parseInt(pourcentageSoulElement.innerHTML);
    var tenebre = parseInt(pourcentageTenebreElement.innerHTML);



	// première étape

	// la par exemple j'ai fait en sorte que l'image à l'écrant soit selon certain pourcentage 
	// && = et  ex : si tenebre < (superieur) à 50 && (et) sleep > (superieur) à 50 = changement image
	//  || = ou c'est à dire que si l'une des deux valeurs atteint le chiffre peut importe qui des deux atteint cette valeur = changement image

	if (tenebre < 50 && sleep >= 1 && soul >= 1) {
        characterElement.src = "asset/thebePersonnage/1erÉtape/Enfant.svg"; // IMPORTANT je sais pas pourquoi mais il faut reécrire le chemin à chaque fois tu n'as pas de proposition c'est chiant
		characterElement.classList.add("babyDemon1");     // cette ligne c'est pour nomer ta nouvelle image 
        divThebeElement.style.animation = "none";   // cette ligne c'est pour faire en sorte que cette image ne choppe pas les animation des autres images 
	}

	if (tenebre < 50 && soul > 80) {
        characterElement.src = "asset/thebePersonnage/1erÉtape/Baby gros sac 1.svg";
        characterElement.classList.add("babyGrosSac1");
        divThebeElement.style.animation = "none";
	}

	if (tenebre < 50 && soul > 80 && sleep < 30) {
        characterElement.src = "asset/thebePersonnage/1erÉtape/gros_someil 1.svg";
        characterElement.classList.add("petitgrosSomeil");
        divThebeElement.style.animation = "none";
	}

	if (tenebre < 50 && sleep < 30) {
        characterElement.src = "asset/thebePersonnage/1erÉtape/therberdodod 2.svg";
        characterElement.classList.add("petitSomeil");
        divThebeElement.style.animation = "none";
	}

		if (tenebre < 1 || soul < 1|| sleep < 1 ) {
        characterElement.src = "asset/thebePersonnage/1erÉtape/Lamort.svg";
		characterElement.classList.add("deces1");
        divThebeElement.style.animation = "none";
	}

	// deuxième étape

    if (tenebre > 50 && (sleep > 25 && soul <= 80)) {
        characterElement.src = "asset/thebePersonnage/2emeÉtape/Prince.svg";
        divThebeElement.style.animation = "levitation 2s infinite";    // <---- cette ligne c'est parceque y'a une animation en css 
        characterElement.classList.add("princeDesTenebres1");
        console.log("ici");   // cette ligne c'est pour l'effet 
    } 
	if (tenebre > 50 && sleep < 25) {
        characterElement.src = "asset/thebePersonnage/2emeÉtape/intermédiareDodo.svg";
        characterElement.classList.add("demonIntermediareDodo");  // là y'a deux nom c'est une erreure mais j'ai peur d'y toucher et de tous niquer 
        characterElement.classList.add("SomeilIntermediaire");
        divThebeElement.style.animation = "none";
	}

	if (tenebre > 50 && soul <1 && sleep < 1) {
		characterElement.src = "asset/thebePersonnage/2emeÉtape/deuxMort.svg";
        characterElement.classList.add("deces2");
        divThebeElement.style.animation = "none";
	}


	if (tenebre > 80 && soul > 80) {
        characterElement.src = "asset/thebePersonnage/2emeÉtape/LeGrosTas.svg";
        characterElement.classList.add("MoyenGrosSac");
        divThebeElement.style.animation = "none";
	}
	


	// étape BOSS

	if (soul > 90 && tenebre > 90 && sleep > 90) {
		characterElement.src = "asset/thebePersonnage/bossFinal/tyEstLeBoss.svg";
		characterElement.classList.add("roiDemon");
		const audio = new Audio('sound/monster-death-screams-free-sound-effect-hd.mp3'); // cette ligne c'est pour lorque tu clique sur ton perso y'a un son 
		audio.volume = 0.1;																// volume
		characterElement.addEventListener('click', function () {                        // option de clique 
			audio.play();																
});
	}

}



var bouton = document.getElementById("boutons");
var son = document.getElementById("son");
bouton.addEventListener("click", function() {
son.play();
});



setInterval(() => {
	checkStat();
}, 1000);