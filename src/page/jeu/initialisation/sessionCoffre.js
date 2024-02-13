import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../../components/interface/inventaire/ItemURL';

export const initialisationSessionCoffre = () => {

  // ========== COFFRE 1 ========== //

  sessionStorage.setItem('x0y0z0coffreInventaire', JSON.stringify([
    { equipe: 0, action: 5, important: 'non', id: 'epee', nom: 'Epée', quantite: 1, img: epeeURL, description: 'fdp.', valeur: 50, type: 'arme'},
    { equipe: 0, action: 5, important: 'non', id: 'pomme', nom: 'Pomme', quantite: 3, img: pommeURL, description: 'fdp.', valeur: 2, type: 'consomable'},
    { equipe: 0, action: 5, cible: 'tete', important: 'non', id: 'casque', nom: 'Casque', quantite: 1, img: casqueURL, description: 'fdp.', valeur: 30, type: 'armure'},
  ]));

  sessionStorage.setItem('x0y0z0coffreStat', JSON.stringify({
    type: 'coffre',
    id: 'x0y0z0coffre',
    img: '',
    x: 500,
    y: 500,
    ZoneX: 0,
    ZoneY: 0,
    ZoneZ: 0,
  }));

}