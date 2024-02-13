
import { verificationTypeObjet } from "./verificationObjet";

export const verificationItem = (id, type, cible, action, quantite, equipe) => {

    const equipementTotal = JSON.parse(sessionStorage.getItem('equipementTotal'));

    // =========== CONSOMABLE =========== //

    if (type === 'consomable') {

        const inventaire = JSON.parse(sessionStorage.getItem('inventaire')) || [];
        const ligneASupprimer = inventaire.find((element) => element.id === id);
      
        if (ligneASupprimer) {
            if (ligneASupprimer.important === 'non') {
                if (ligneASupprimer.quantite > 1) {
                ligneASupprimer.quantite--;
        
                sessionStorage.setItem('inventaire', JSON.stringify(inventaire));
                } else {
                const nouveauInventaire = inventaire.filter((element) => element.id !== id);
                sessionStorage.setItem('inventaire', JSON.stringify(nouveauInventaire));
                }
                verificationTypeObjet(id, type, action);
            } else {
                return;
            }
        }
    }

    // =========== ARME =========== //

    if (type === 'arme') {

            // main gauche

            var equipementJ1 = JSON.parse(sessionStorage.getItem(`${equipementTotal.courant}`));
            console.log(equipementJ1)
            console.log(equipementJ1[0].equipement)
            var ligneMainG = equipementJ1[0].equipement.find(function(element) {return element.type === 'mainG';});

            var inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
            var ligneItem = inventaire.find((element) => element.id === id);
            const quantite = ligneItem.quantite;
            const equipe = ligneItem.equipe;

            if (ligneMainG && quantite > equipe) {

                if (ligneMainG.id === '') {

                    // equipe l'objet main g

                    ligneItem.equipe++;
                    sessionStorage.setItem('inventaire', JSON.stringify(inventaire));

                    var indexMainG = equipementJ1[0].equipement.findIndex(function(element) {return element.type === 'mainG';});

                    console.log(indexMainG);

                    if (equipementJ1 && equipementJ1[0] && equipementJ1[0].equipement && indexMainG !== -1) {
                        equipementJ1[0].equipement[indexMainG].id = id;
                        console.log(equipementTotal.courant);
                        sessionStorage.setItem(`${equipementTotal.courant}`, JSON.stringify(equipementJ1));
                        console.log("Le champ 'id' de 'mainG' a été modifié avec succès.");
                        verificationTypeObjet(id, type, action);
                    } else {
                        console.log("Aucun élément trouvé pour le type 'mainG' ou equipementJ1 n'est pas correctement défini.");
                    }



                } else {

                    // main droite

                    equipementJ1 = JSON.parse(sessionStorage.getItem(`${equipementTotal.courant}`));
                    var ligneMainD = equipementJ1[0].equipement.find(function(element) {return element.type === 'mainD';});
                    var ligneItem = inventaire.find((element) => element.id === id);
                    const quantite = ligneItem.quantite;
                    const equipe = ligneItem.equipe;
                
                    if (ligneMainD && quantite > equipe) {

                        ligneItem.equipe++;
                        sessionStorage.setItem('inventaire', JSON.stringify(inventaire));

                        if (ligneMainD.id === '') {                            
                            
                            // equipe l'objet main d

                            var indexMainD = equipementJ1[0].equipement.findIndex(function(element) {return element.type === 'mainD';});
                        
                            if (indexMainD !== -1) {
                                equipementJ1[0].equipement[indexMainD].id = id;
                                sessionStorage.setItem(`${equipementTotal.courant}`, JSON.stringify(equipementJ1));
                                console.log("Le champ 'id' de 'mainD' a été modifié avec succès.");
                                verificationTypeObjet(id, type, action);
                            } else {
                                console.log("Aucun élément trouvé pour le type 'mainG'.");
                            }

                        } else {
                            console.log("Le champ 'id' n'est pas égal à '' pour le type 'mainD'.");
                        }
                    }
                }
            }
    }

    // =========== ARMURE =========== //

    if (type === 'armure') {
        if (cible === 'tete') {

            equipementJ1 = JSON.parse(sessionStorage.getItem(`${equipementTotal.courant}`));
            var ligneTete = equipementJ1[0].equipement.find(function(element) {return element.type === 'tete';});
        
            var inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
            var ligneItem = inventaire.find((element) => element.id === id);
            const quantite = ligneItem.quantite;
            const equipe = ligneItem.equipe;
        
            if (ligneTete && quantite > equipe) {

                ligneItem.equipe++;
                sessionStorage.setItem('inventaire', JSON.stringify(inventaire));

                if (ligneTete.id === '') {
                    
                    // equipe l'objet tete

                    var indexTete = equipementJ1[0].equipement.findIndex(function(element) {return element.type === 'tete';});
                
                    if (indexTete !== -1) {
                        equipementJ1[0].equipement[indexTete].id = id;
                        sessionStorage.setItem(`${equipementTotal.courant}`, JSON.stringify(equipementJ1));
                        console.log("Le champ 'id' de 'tete' a été modifié avec succès.");
                        verificationTypeObjet(id, type, action);
                    } else {
                        console.log("Aucun élément trouvé pour le type 'tete'.");
                    }

                } else {
                    console.log("Le champ 'id' n'est pas égal à '' pour le type 'tete'.");
                }
            }
        }

        // buste

        if (cible === 'buste') {

            equipementJ1 = JSON.parse(sessionStorage.getItem(`${equipementTotal.courant}`));
            var ligne = equipementJ1[0].equipement.find(function(element) {return element.type === 'buste';});
        
            var inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
            var ligneItem = inventaire.find((element) => element.id === id);
            const quantite = ligneItem.quantite;
            const equipe = ligneItem.equipe;
        
            if (ligne && quantite > equipe) {

                ligneItem.equipe++;
                sessionStorage.setItem('inventaire', JSON.stringify(inventaire));

                if (ligne.id === '') {
                    
                    // equipe l'objet buste

                    var index = equipementJ1[0].equipement.findIndex(function(element) {
                    return element.type === 'buste';});
                
                    if (index !== -1) {
                        equipementJ1[0].equipement[index].id = id;
                        sessionStorage.setItem(`${equipementTotal.courant}`, JSON.stringify(equipementJ1));
                        console.log("Le champ 'id' de 'buste' a été modifié avec succès.");
                        verificationTypeObjet(id, type, action);
                    } else {
                        console.log("Aucun élément trouvé pour le type 'buste'.");
                    }

                } else {
                    console.log("Le champ 'id' n'est pas égal à '' pour le type 'buste'.");
                }
            }
        }

        // jambe

        if (cible === 'jambe') {

            equipementJ1 = JSON.parse(sessionStorage.getItem(`${equipementTotal.courant}`));
            var ligne = equipementJ1[0].equipement.find(function(element) {return element.type === 'jambe';});
        
            var inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
            var ligneItem = inventaire.find((element) => element.id === id);
            const quantite = ligneItem.quantite;
            const equipe = ligneItem.equipe;
        
            if (ligne && quantite > equipe) {

                ligneItem.equipe++;
                sessionStorage.setItem('inventaire', JSON.stringify(inventaire));
                
                if (ligne.id === '') {
                    
                    // equipe l'objet jambe

                    var index = equipementJ1[0].equipement.findIndex(function(element) {return element.type === 'jambe';});
                
                    if (index !== -1) {
                        equipementJ1[0].equipement[index].id = id;
                        sessionStorage.setItem(`${equipementTotal.courant}`, JSON.stringify(equipementJ1));
                        console.log("Le champ 'id' de 'jambe' a été modifié avec succès.");
                        verificationTypeObjet(id, type, action);
                    } else {
                        console.log("Aucun élément trouvé pour le type 'jambe'.");
                    }

                } else {
                    console.log("Le champ 'id' n'est pas égal à '' pour le type 'jambe'.");
                }
            }
        }

        // bras

        if (cible === 'bras') {

            equipementJ1 = JSON.parse(sessionStorage.getItem(`${equipementTotal.courant}`));
            var ligne = equipementJ1[0].equipement.find(function(element) {return element.type === 'bras';});
        
            var inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
            var ligneItem = inventaire.find((element) => element.id === id);
            const quantite = ligneItem.quantite;
            const equipe = ligneItem.equipe;
        
            if (ligne && quantite > equipe) {

                ligneItem.equipe++;
                sessionStorage.setItem('inventaire', JSON.stringify(inventaire));
                
                if (ligne.id === '') {
                    
                    // equipe l'objet bras

                    var index = equipementJ1[0].equipement.findIndex(function(element) {return element.type === 'bras';});
                
                    if (index !== -1) {
                        equipementJ1[0].equipement[index].id = id;
                        sessionStorage.setItem(`${equipementTotal.courant}`, JSON.stringify(equipementJ1));
                        console.log("Le champ 'id' de 'bras' a été modifié avec succès.");
                        verificationTypeObjet(id, type, action);
                    } else {
                        console.log("Aucun élément trouvé pour le type 'bras'.");
                    }

                } else {
                    console.log("Le champ 'id' n'est pas égal à '' pour le type 'bras'.");
                }
            }
        }

        // pied

        if (cible === 'pied') {

            equipementJ1 = JSON.parse(sessionStorage.getItem(`${equipementTotal.courant}`));
            var ligne = equipementJ1[0].equipement.find(function(element) {return element.type === 'pied';});
        
            var inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
            var ligneItem = inventaire.find((element) => element.id === id);
            const quantite = ligneItem.quantite;
            const equipe = ligneItem.equipe;
        
            if (ligne && quantite > equipe) {

                ligneItem.equipe++;
                sessionStorage.setItem('inventaire', JSON.stringify(inventaire));
                
                if (ligne.id === '') {
                    
                    
                    // equipe l'objet pied

                    var index = equipementJ1[0].equipement.findIndex(function(element) {return element.type === 'pied';});
                
                    if (index !== -1) {
                        equipementJ1[0].equipement[index].id = id;
                        sessionStorage.setItem(`${equipementTotal.courant}`, JSON.stringify(equipementJ1));
                        console.log("Le champ 'id' de 'pied' a été modifié avec succès.");
                        verificationTypeObjet(id, type, action);
                    } else {
                        console.log("Aucun élément trouvé pour le type 'pied'.");
                    }

                } else {
                    console.log("Le champ 'id' n'est pas égal à '' pour le type 'pied'.");
                }
            }
        }
    }

}