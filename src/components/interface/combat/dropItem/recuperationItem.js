export const recuperationItem = (action, cible, important, idItem, nom, img, description, valeur, type) => {

    const inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
    const coffreInventaire = JSON.parse(sessionStorage.getItem('itemGagne'));

    // suppression coffre

    const ligneASupprimer = coffreInventaire.item.find((element) => element.id === idItem);
      
    if (ligneASupprimer) {
        if (ligneASupprimer.quantite > 1) {
            ligneASupprimer.quantite--;
    
            sessionStorage.setItem('itemGagne', JSON.stringify(coffreInventaire));
        } else {
            const nouveauInventaire = coffreInventaire.item.filter((element) => element.id !== idItem);
            console.log(nouveauInventaire)
            sessionStorage.setItem('itemGagne', JSON.stringify(nouveauInventaire));
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

}