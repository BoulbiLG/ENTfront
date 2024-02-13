import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../../components/interface/inventaire/ItemURL';

export const initialisationSession = () => {

  // ========== INVENTAIRE ========== //
      
  sessionStorage.setItem('inventaire', JSON.stringify([]));

  const monTableau = JSON.parse(sessionStorage.getItem('inventaire'));

  const l1 = { equipe: 0, action: 5, important: 'non', id: 'pomme', nom: 'Pomme', quantite: 3, img: pommeURL, description: 'fdp.', valeur: 2, type: 'consomable'};
  const l2 = { equipe: 0, action: 5, important: 'non', id: 'epee', nom: 'Epée', quantite: 1, img: epeeURL, description: 'fdp.', valeur: 50, type: 'arme'};
  const l3 = { equipe: 0, action: 5, important: 'non', id: 'bouclier', nom: 'Bouclier', quantite: 1, img: bouclierURL, description: 'fdp.', valeur: 30, type: 'arme'};
  const l4 = { equipe: 0, action: 5, cible: 'tete', important: 'non', id: 'casque', nom: 'Casque', quantite: 1, img: casqueURL, description: 'fdp.', valeur: 30, type: 'armure'};
  const l5 = { equipe: 0, action: 5, cible: 'buste', important: 'non', id: 'plastron', nom: 'Plastron', quantite: 1, img: plastronURL, description: 'fdp.', valeur: 30, type: 'armure'};
  const l6 = { equipe: 0, action: 5, cible: 'jambe', important: 'non', id: 'jambiere', nom: 'Jambière', quantite: 1, img: jambiereURL, description: 'fdp.', valeur: 30, type: 'armure'};
  const l7 = { equipe: 0, action: 5, cible: 'bras', important: 'non', id: 'epauliere', nom: 'Epaulière', quantite: 1, img: epauliereURL, description: 'fdp.', valeur: 30, type: 'armure'};
  const l8 = { equipe: 0, action: 5, cible: 'pied', important: 'non', id: 'nike', nom: 'Nike', quantite: 1, img: nikeURL, description: 'fdp.', valeur: 30, type: 'armure'};

  monTableau.push(l1);
  monTableau.push(l2);
  monTableau.push(l3);
  monTableau.push(l4);
  monTableau.push(l5);
  monTableau.push(l6);
  monTableau.push(l7);
  monTableau.push(l8);

  sessionStorage.setItem('inventaire', JSON.stringify(monTableau));

  // ========== EQUIPEMENT JOUEUR 1 ========== //

  sessionStorage.setItem('Benzemonstre', JSON.stringify([{

    // EQUIPEMENT

    equipement: [
      { id: '', type: 'tete', x: 674, y: 25, cible: 'tete'},
      { id: '', type: 'buste', x: 50, y: 140, cible: 'buste' },
      { id: '', type: 'bras', x: 674, y: 140, cible: 'bras' },
      { id: '', type: 'jambe', x: 50, y: 357, cible: 'jambe' },
      { id: '', type: 'mainG', x: 50, y: 250, cible: 'main' },
      { id: '', type: 'mainD', x: 674, y: 255, cible: 'main' },
      { id: '', type: 'pied', x: 50, y: 463, cible: 'pied' },
      { nom: 'Benzemonstre' }
    ],

    // STAT

    niveau: 1, 
    exp: 0, 
    attaque: 10,
    defense: 10,
    vitesse: 10,
    courage: 5,
    magie: 100,
    argent: 0,
    testo: 0,
    bodycount: 0,
    vie: 100,
    PV: 100,
    nom: 'Benzemonstre',

    // HUMEUR

    joie: 10,
    colere: 0,
    tristesse: 0,
    peur: 0,

} ]));

  // ========== ETAT EQUIPEMENT TOTAL ========== //

  sessionStorage.setItem('equipementTotal', JSON.stringify({
    courant: 'Benzemonstre',
    index: ['Benzemonstre'],
    stat: ['statJ1'],
    nom: ['Benzemonstre']
  }));

  // ========== TYPE ARME ========== //

  sessionStorage.setItem('typeArme', JSON.stringify({
    offensive: ['epee'],
  }));

  // ========== LEXIQUE ITEM ========== //

  sessionStorage.setItem('lexiqueItem', JSON.stringify([
    { equipe: 0, action: 5, important: 'non', id: 'pomme', nom: 'Pomme', quantite: 3, img: pommeURL, description: 'fdp.', valeur: 2, type: 'consomable'},
    { equipe: 0, action: 5, important: 'non', id: 'epee', nom: 'Epée', quantite: 1, img: epeeURL, description: 'fdp.', valeur: 50, type: 'arme'},
    { equipe: 0, action: 5, important: 'non', id: 'bouclier', nom: 'Bouclier', quantite: 1, img: bouclierURL, description: 'fdp.', valeur: 30, type: 'arme'},
    { equipe: 0, action: 5, cible: 'tete', important: 'non', id: 'casque', nom: 'Casque', quantite: 1, img: casqueURL, description: 'fdp.', valeur: 30, type: 'armure'},
    { equipe: 0, action: 5, cible: 'buste', important: 'non', id: 'plastron', nom: 'Plastron', quantite: 1, img: plastronURL, description: 'fdp.', valeur: 30, type: 'armure'},
    { equipe: 0, action: 5, cible: 'jambe', important: 'non', id: 'jambiere', nom: 'Jambière', quantite: 1, img: jambiereURL, description: 'fdp.', valeur: 30, type: 'armure'},
    { equipe: 0, action: 5, cible: 'bras', important: 'non', id: 'epauliere', nom: 'Epaulière', quantite: 1, img: epauliereURL, description: 'fdp.', valeur: 30, type: 'armure'},
    { equipe: 0, action: 5, cible: 'pied', important: 'non', id: 'nike', nom: 'Nike', quantite: 1, img: nikeURL, description: 'fdp.', valeur: 30, type: 'armure'},
  ]));

}