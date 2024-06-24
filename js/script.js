import { stories } from './stories.js';
let prenom = '';
// Fonctions pour créer des éléments HTML
function createImage(src) {
    const div = document.createElement('div');
    div.className = 'image';
    const img = document.createElement('img');
    img.src = src;
    div.appendChild(img);
    return div;
}
function createMusique(song) {
    const div = document.createElement('div');
    div.className = 'musique';
    const audio = document.createElement('audio');
    audio.src = song;
    audio.autoplay = true; 
    div.appendChild(audio);
    return div;
}
function createText(text) {
    const div = document.createElement('div');
    div.className = 'text';
    const p = document.createElement('p');
    p.innerHTML = text;
    div.appendChild(p);
    return div;
}
function createQuestion(question) {
    const div = document.createElement('div');
    div.className = 'question';
    const p = document.createElement('p');
    p.innerHTML = question;
    div.appendChild(p);
    return div;
}
function createInputPrenom() {
    const div = document.createElement('div');
    div.className = 'input-prenom';
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'prenom';
    input.name = 'prenom';
    input.placeholder = 'Entrez votre prénom';
    form.appendChild(input);
    form.addEventListener('submit', handleSubmit);
    div.appendChild(form);
    return div;
}
function createButton(label, nextStoryId) {
    const div = document.createElement('div');
    div.className = 'button';
    const button = document.createElement('button');
    button.textContent = label;
    button.type = 'submit'; 
    button.addEventListener('click', function() { choisirReponse(nextStoryId); });
    div.appendChild(button);
    return div;
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
    const containerElement = document.querySelector('.container');
    containerElement.innerHTML = ''; // Nettoyez le contenu précédent
    containerElement.appendChild(createImage(story.img));
    if (story.audio) {
        const audioElement = createMusique(story.audio);
        containerElement.appendChild(audioElement);
        
            
        };
    
    let storyText;
    if (typeof story.text === 'function') {
        storyText = story.text(prenom);
    } else {
        storyText = story.text;
    }
    containerElement.appendChild(createText(storyText));
    containerElement.appendChild(createQuestion(story.question));
    if (story.id === 0) {
        containerElement.appendChild(createInputPrenom()); 
    }
    story.reponses.forEach(response => {
        containerElement.appendChild(createButton(response.label, response.nextStoryId));
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