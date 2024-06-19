'use strict';

/***********************************************************************************/
/* ******************************* DONNEES GLOBALES ********************************/
/***********************************************************************************/
const IMG_PATH = 'img/';
const START = 9;

let timer;
let count;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

// Gestionnaire d'événement au clic sur le bouton de mise à feu
function clickButton(){
    // Une fois que la mise à feu lancée, on désactive le bouton de mise à feu
    firingButton.removeEventListener('click', clickButton);
    //firingButton.classList.add('disabled');
    // compte à rebours
    countDown();
    // décollage de la fusée à la fin du compte à rebours
    throwIt();
    // compte à rebours
    timer = window.setInterval(countDown, 1000);
    
    // image fusée
    updateRocket('rocket2.gif');
}

/**
 * Programme le décollage de la fusée à la fin du compte à rebours
 */
function throwIt()
{
    // décollage dans 10s
    setTimeout(function(){

        // image fusée
        updateRocket('rocket3.gif');

        // transition CSS 
        rocket.classList.add('tookOff');

    }, count * 1000);
}

// Gestion du compte à rebours
function countDown(){
    // Affichage sur le panneau du compte à rebours
    billboard.textContent = count;
    // On décrémente le compteur
    count--;
    // Si le compteur arrive à -1, on stoppe le chronomètre
    if( count == -1 ){
        window.clearInterval(timer);
    }
}

/**
 * Met à jour l'image de la fusée
 */
function updateRocket(filename)
{
    rocket.src = IMG_PATH + filename;
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

// Initialisation des variables globales
count = 10;

// Sélection des différents éléments du DOM sur lesquels nous allons agir
const rocket = document.getElementById('rocket');
const billboard = document.querySelector('#billboard span');
const cancel = document.querySelector('.cancel');
const firingButton = document.getElementById('firing-button');

// Au clic, decollage
firingButton.addEventListener('click', clickButton);