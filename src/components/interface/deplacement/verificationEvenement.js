export const verificationEvenement = (zoneX, zoneY, zoneZ) => {
    const nom = JSON.parse(sessionStorage.getItem('personnageGlobal'));
    const equipementTotal = JSON.parse(sessionStorage.getItem('equipementTotal'));
    let combatStat = JSON.parse(sessionStorage.getItem('combatGlobal'));

    console.log('x : ', zoneX);
    console.log('y : ', zoneY);
    console.log('z : ', zoneZ);

    console.log('nom : ', nom);
    console.log('combatStat : ', combatStat);

    for (let i = 0; i < nom.nom.length; i++) {
        let nomCourant = JSON.parse(sessionStorage.getItem(`${nom.nom[i]}`));

        if (nomCourant.zoneX == zoneX && nomCourant.zoneY == zoneY && nomCourant.zoneZ == zoneZ) {
            if (nomCourant.etat == 'ennemi') {
                console.log('OUI !');
                combatStat.combat = 'oui';
                combatStat.nombreEnnemi++;
                combatStat.nom.push(nom.nom[i]);
                combatStat.nomURL.push(nomCourant.nomURL);
                combatStat.nomEquipe = equipementTotal.nom;
                combatStat.nombreEquipe = equipementTotal.nom.length;
            }
        }
    }

    console.log('combatStat après boucle : ', combatStat);

    // Sauvegardez la variable mise à jour dans le sessionStorage
    sessionStorage.setItem('combatGlobal', JSON.stringify(combatStat));
}
