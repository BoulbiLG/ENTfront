export const recuperationItem = (id, action, cible, important, idItem, nom, img, description, valeur, type) => {

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

    // suppression coffre

    const ligneASupprimer = coffreInventaire.find((element) => element.id === idItem);
      
    if (ligneASupprimer) {
        if (ligneASupprimer.quantite > 1) {
            ligneASupprimer.quantite--;
    
            sessionStorage.setItem(`${id}Inventaire`, JSON.stringify(coffreInventaire));
        } else {
            const nouveauInventaire = coffreInventaire.filter((element) => element.id !== idItem);
            console.log(nouveauInventaire)
            sessionStorage.setItem(`${id}Inventaire`, JSON.stringify(nouveauInventaire));
        }
    }

    // ajout inventaire

    const ligneAajouter = inventaire.find((element) => element.id === idItem);
      
    if (ligneAajouter) {

        ligneAajouter.quantite++;
        sessionStorage.setItem('inventaire', JSON.stringify(inventaire));

    } else {
        const ligne = { equipe: 0, action: action, cible: cible, important: important, id: idItem, nom: nom, quantite: 1, img: img, description: description, valeur: valeur, type: type};
        inventaire.push(ligne);
        sessionStorage.setItem('inventaire', JSON.stringify(inventaire));
    }

    console.log(inventaire);

}