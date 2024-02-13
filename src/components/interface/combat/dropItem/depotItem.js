export const depotItem = (id, action, cible, important, idItem, nom, img, description, valeur, type) => {

    console.log('============================');
    console.log('id : ', id);
    console.log('action : ', action);
    console.log('cible : ', cible);
    console.log('important : ', important);
    console.log('idItem : ', idItem);
    console.log('nom : ', nom);
    console.log('img : ', img);
    console.log('description : ', description);
    console.log('valeur : ', valeur);
    console.log('type : ', type);

    const inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
    const coffreInventaire = JSON.parse(sessionStorage.getItem(`${id}Inventaire`));

    // suppression inventaire

    const ligneASupprimer = inventaire.find((element) => element.id === idItem);
      
    if (ligneASupprimer) {
        if (ligneASupprimer.important === 'non') {
            if (ligneASupprimer.quantite > 1) {
                ligneASupprimer.quantite--;
        
                sessionStorage.setItem('inventaire', JSON.stringify(inventaire));
            } else {
                const nouveauInventaire = inventaire.filter((element) => element.id !== idItem);
                sessionStorage.setItem('inventaire', JSON.stringify(nouveauInventaire));
            }
        } else {
            return;
        }
    }

    // ajoute inventaire coffre

    const ligneAajouter = coffreInventaire.find((element) => element.id === idItem);
      
    if (ligneAajouter) {

        ligneAajouter.quantite++;
        sessionStorage.setItem(`${id}Inventaire`, JSON.stringify(coffreInventaire));

    } else {
        //const ligne = { id: idItem, nom: nom, quantite: 1, img: `${idItem}URL`, description: 'fdp.', valeur: 2};
        const ligne = { equipe: 0, action: action, cible: cible, important: important, id: idItem, nom: nom, quantite: 1, img: `${idItem}URL`, description: description, valeur: valeur, type: type};
        coffreInventaire.push(ligne);
        sessionStorage.setItem(`${id}Inventaire`, JSON.stringify(coffreInventaire));
    }

}