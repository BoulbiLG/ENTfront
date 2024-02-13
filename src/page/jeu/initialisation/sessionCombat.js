
export const initialisationSessionCombat = () => {

  // ========== GLOBAL ========== //

  console.log('Session de combat initialisée');

  sessionStorage.setItem('combatInit', JSON.stringify({
    validation: 'oui',
  }));

  sessionStorage.setItem('itemGagne', JSON.stringify({
    item: [],
    etat: 'non',
  }));

  const validation = JSON.parse(sessionStorage.getItem('combatInit'));

  if (validation.validation == 'oui') {
    sessionStorage.setItem('combatGlobal', JSON.stringify({
      combat: 'non',
      nombreEnnemi: 0,
      nombreEquipe: 0,
      nomEquipe: [],
      nom: [],
      nomURL: [],
    }));
  }

  validation.validation = 'non';

  sessionStorage.setItem('combatInit', JSON.stringify(validation))

  const validation2 = JSON.parse(sessionStorage.getItem('combatInit'));

  console.log(validation2);

}