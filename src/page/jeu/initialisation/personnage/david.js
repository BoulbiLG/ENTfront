
import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../../../components/interface/inventaire/ItemURL';

export const initialisationSessionDavid = () => {

  // ========== DAVID  ========== //

  sessionStorage.setItem('David', JSON.stringify({
    
    nom: 'David',
    zoneX: 0,
    zoneY: 2,
    zoneZ: 0,
    x: 0,
    y: 0,
    etat: 'ennemi',
    soumis: 'non',
    URL: 'https://cloud.onche.org/d682eecd-0f0e-42a8-86bc-5e2e2d5f4598!xMhG6dJaYD/128',

    // STAT

    vie: 50,
    PV: 50,
    niveau: 1, 
    exp: 0, 
    attaque: 10,
    defense: 10,
    vitesse: 10,
    courage: 5,
    magie: 10,
    argent: 0,
    testo: 0,
    bodycount: 0,

    // HUMEUR

    joie: 10,
    colere: 0,
    tristesse: 0,
    confiance: 0,
    peur: 0,
    empathie: 2,

    // DIALOGUE
    
    dialogue1: 'Coucou sale fils de pute.',
    dialogueDesir: "J'aime beaucoup les épée et les boucliers.",
    desir: ['pomme', 'bouclier'],
    questionPose: [],
    replique: {
        colere: {r1: 'Tu peux me laisser ?', r2: "T'as compris oh ?", r3: "OH sale pédé c'est quoi ton soucis ??", r4: "Va te faire niquer", r5: "Vazy tu l'auras voulu !!!"},
        tristesse: "C'est pas gentil ! *snif snif...",
        joie: "Ayaaaa énorme !",
        peur: "Tu... tu en sûr ?",
        confiance: {r1: "Arrête tu vas me faire rougir ahah.", r2: "Tu sais ? Je t'aime bien", r3: "Sache que tu es pour moi un ami !"},
        empathie: "Oh ! C'est gentil.",
    },
    compteurReplique: 0,

    // EQUIPEMENT

    equipement: [
      { id: 'casque', type: 'tete', x: 674, y: 25, cible: 'tete'},
      { id: '', type: 'buste', x: 50, y: 140, cible: 'buste' },
      { id: '', type: 'bras', x: 674, y: 140, cible: 'bras' },
      { id: '', type: 'jambe', x: 50, y: 357, cible: 'jambe' },
      { id: '', type: 'mainG', x: 50, y: 250, cible: 'main' },
      { id: '', type: 'mainD', x: 674, y: 255, cible: 'main' },
      { id: '', type: 'pied', x: 50, y: 463, cible: 'pied' },
    ],

    itemDropable: [
      {
        id: 'pomme',
        img: pommeURL,
        quantite: {
          min: 1,
          max: 5,
        },
        action: 5,
        important: 'non',
        nom: 'Pomme',
        description: 'fdp.',
        valeur: 2,
        type: 'consomable',
      }
    ]

  }));

}