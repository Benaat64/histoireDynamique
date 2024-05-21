import { stories } from './stories.js';
let prenom = '';
// Fonctions pour créer des éléments HTML
function createImage(src) {
    const img = document.createElement('img');
    img.src = src;
    return img;
}
function createMusique(song) {
    const audio = document.createElement('audio');
    audio.src = song;
    return audio;
}
function createText(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    return p;
}
function createQuestion(question) {
    const p = document.createElement('p');
    p.innerHTML = question;
    return p;
}
function createInputPrenom() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'prenom';
    input.name = 'prenom';
    input.placeholder = 'Entrez votre prénom';
    form.appendChild(input);
    form.addEventListener('submit', handleSubmit);
    return form;
}
function createButton(label, nextStoryId) {
    const button = document.createElement('button');
    button.textContent = label;
    button.type = 'submit'; 
    button.addEventListener('click', function() { choisirReponse(nextStoryId); });
    return button;
}

// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault();
    const inputElement = document.querySelector('#prenom');
    if (inputElement.value !== '') {
        prenom = inputElement.value; // Stockez la valeur du prénom
        localStorage.setItem('prenom', prenom); // Sauvegardez la valeur dans localStorage
    }
    choisirReponse(stories[currentStoryIndex].reponses[0].nextStoryId);
}

function displayStory() {
    const story = stories[currentStoryIndex];
    const bodyElement = document.querySelector('body');
    bodyElement.innerHTML = ''; // Nettoyez le contenu précédent
    bodyElement.appendChild(createImage(story.img));
    if (story.audio) {
        const audioElement = createMusique(story.audio);
        bodyElement.appendChild(audioElement);
        audioElement.play();
    }
    let storyText;
    if (typeof story.text === 'function') {
        storyText = story.text(prenom);
    } else {
        storyText = story.text;
    }
    bodyElement.appendChild(createText(storyText));
    bodyElement.appendChild(createQuestion(story.question));
    if (story.id === 0) {
        bodyElement.appendChild(createInputPrenom()); 
    }
    story.reponses.forEach(response => {
        bodyElement.appendChild(createButton(response.label, response.nextStoryId));
    });
}

function choisirReponse(nextStoryId) {
    const inputElement = document.querySelector('#prenom');
    if (currentStoryIndex === 0) {
        if (inputElement.value !== '') {
            prenom = inputElement.value; // Stockez la valeur du prénom
        }else{
        return alert('Rajouter un prenom')
        }
    }
    const nextStoryIndex = stories.findIndex(story => story.id === nextStoryId);
    if (nextStoryIndex !== -1) {
        currentStoryIndex = nextStoryIndex;
        displayStory();
    } else {
        console.log("Réponse invalide.");
    }
}

// Variable pour suivre l'index de l'histoire actuelle
let currentStoryIndex = 0;

// Initialisation pour afficher la première histoire
displayStory();