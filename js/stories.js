export const stories = [
    {
        id: 0,
        text: "Bienvenue à la Taverne de la Gargouille Mélancolique, un endroit où les murmures résonnent aussi fort que les chopes s'entrechoquent. Vous, cher aventurier, êtes attablé dans un coin sombre de cette auberge lugubre, entouré de personnages aussi pittoresques que les rats qui rôdent sous les tables.",
        img: './img/taverne.png',
        question: "Que choisissez-vous ?",
        audio:'',
        reponses: [
            { label: "Continuer", nextStoryId: 1 },
        ]
    },
    {
        id: 1,
        text: "Soudain, la porte vermoulue de la taverne grince sur ses gonds rouillés, laissant apparaître une silhouette familière : Rognon le Nez-Casse, le célèbre aventurier malchanceux et son fidèle compagnon, un raton-laveur dénommé Cracotte. Leurs exploits ont fait d'eux une légende dans le royaume, mais vous avez toujours eu des doutes sur la véracité de leurs prétendues réussites.",
        img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        audio:'./audio/porte.wav',
        question: "Que faites-vous maintenant ?",
        reponses: [
            { label: "Continuer", nextStoryId: 2 }
        ]
    },
    {
        id: 2,
        text: "- Ah, enfin je vous trouve, l'aventurier !, s'exclame Rognon en secouant sa cape poussiéreuse.<br> - J'ai entendu parler d'un trésor fabuleux caché dans un donjon tout proche. Mais... euh... on a un léger problème...",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnk69imH81bbU56g8JGOFNCrT0AOyCkpEBaT3qaU9awt63r5dg8ol5-BeEUUkMA8EHsAY&usqp=CAU',
        audio:'./audio/bar.mp3',
        question: "Que faites-vous maintenant ?",
        reponses: [
            { label: "Continuer", nextStoryId: 3 }
        ]
    },
    {
        id: 3,
        text: "Il jette un regard furtif derrière lui, où vous remarquez une procession d'individus aux comportements des plus étranges : une barde 🎻 débordante d'enthousiasme  mais sans talent musical<br> un magicien 🧙 qui confond ses sorts et transforme les choses en confiture, et un guerrier ⚔️ au cerveau aussi épais que sa masse d'armes.",
        img: 'https://www.naturephotographie.com/wp-content/uploads/2022/12/Blue-Monday.jpg',
        audio:'',
        question: "Que voulez-vous faire ensuite ?",
        reponses: [
            { label: "Continuer", nextStoryId: 4 }
        ]
    },
    {
        id: 4,
        text: "Vous voyez, j'ai rassemblé cette... hum... équipe d'experts pour m'aider, mais on a besoin d'un véritable chef pour nous guider, continue Rognon en vous regardant avec espoir. En échange, vous me suivez dans cette quête et je vous offre une part équitable du butin : des pièces d'or à foison, des artefacts magiques, ou même une sélection de femmes aussi belles que courageuses pour vous tenir chaud lors des longues nuits d'aventure !",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJglPyx_NNnrCtssD34D0yQr5q0u-i3SxFWMsR9anXNA&s',
        audio:'',
        question: "Que voulez-vous faire ensuite ?",
        reponses: [
            { label: "Continuer", nextStoryId: 5 }
        ]
    },
    {
        id: 5,
        text: "Vous n'êtes pas convaincu par cette proposition. Après tout, Rognon le Nez-Casse est-il vraiment aussi habile qu'on le prétend ? Mais alors que vous hésitez, Rognon remarque votre regard fixé sur votre chope vide et comprend aussitôt.",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJglPyx_NNnrCtssD34D0yQr5q0u-i3SxFWMsR9anXNA&s',
        audio:'',
        question: "Que voulez-vous faire ensuite ?",
        reponses: [
            { label: "Continuer", nextStoryId: 6 }
        ]
    },
    {
        id: 6,
        text:function(prenom){
           return `Ah, mais je vois bien que vous êtes un aventurier dans l'âme, ${prenom}, s'exclame-t-il avec enthousiasme...`
        },
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJglPyx_NNnrCtssD34D0yQr5q0u-i3SxFWMsR9anXNA&s',
        audio:'',
        question: "Que voulez-vous faire ensuite ?",
        reponses: [
            { label: "Continuer", nextStoryId: 7 }
        ]
    },
    {
        id: 7,
        text: "Alors, cher aventurier, accepterez-vous cette offre alléchante malgré vos doutes ? Après tout, une tournée gratuite ne se refuse pas, n'est-ce pas ?",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJglPyx_NNnrCtssD34D0yQr5q0u-i3SxFWMsR9anXNA&s',
        audio:'',
        question: "Voulez-vous recommencer ?",
        reponses: [
            { label: "Oui", nextStoryId: 0 },
            { label: "Non", nextStoryId: 8 }
        ]
    },
    {
        id: 8,
        text: "bravo",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJglPyx_NNnrCtssD34D0yQr5q0u-i3SxFWMsR9anXNA&s',
        audio:'',
        question: "Passez une bonne journée ! :)",
        reponses: [
 
        ]
    },
    // Ajoutez d'autres histoires ici...
];