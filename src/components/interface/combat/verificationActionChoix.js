export const verificationActionChoix = (choix, cible, nom) => {

    console.log('choix : ', choix);
    console.log('cible : ', cible);
    console.log('nom : ', nom);

    const equipier = JSON.parse(sessionStorage.getItem(nom));
    const ennemi = JSON.parse(sessionStorage.getItem(cible));
    const inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
    const typeArme = JSON.parse(sessionStorage.getItem('typeArme'));
    const lexiqueItem = JSON.parse(sessionStorage.getItem('lexiqueItem'));
    const combatGlobal = JSON.parse(sessionStorage.getItem('combatGlobal'));
    const itemGagne = JSON.parse(sessionStorage.getItem('itemGagne'));

    if (equipier && equipier.length > 0) {



        // ==================== CALCUL ATTAQUE ==================== //



        // recuperation action de l'arme

        console.log('============');

        const equipementCible = equipier[0].equipement.find(equip => equip.type === choix);
        const id = equipementCible ? equipementCible.id : null;

        const inventaireCible = inventaire.find(equip => equip.id === id);
        const action = inventaireCible.action;

        // verification type de l'arme

        typeArme.offensive.forEach((offensive) => {
            if (offensive == id) {

                // stat equipier

                const attaque = equipier[0].attaque;
                const courage = equipier[0].courage;
                const niveau = equipier[0].niveau;
                const testo = equipier[0].testo;

                const joie = equipier[0].joie;
                const tristesse = equipier[0].tristesse;
                const peur = equipier[0].peur;
                const colere = equipier[0].colere;

                // calcul attaque brut

                var tauxNiveau = niveau / 10 + 1;
                var tauxColere = colere / 10 + 1;
                var tauxTesto = (testo / 10 + 1) * tauxColere;
                var attaqueStat = 0;

                attaqueStat = (attaque * tauxNiveau) * tauxTesto;

                // proba
                
                const randomValue = Math.random();
                if (randomValue < 1 / courage) {attaqueStat = attaqueStat * 2;}

                // calcul attaque net

                var attaqueHumeur = attaqueStat;
                var tauxJoie;
                var tauxTristesse;
                var tauxPeur;

                if (joie > 0) {tauxJoie = joie / 10 + 1;} else {tauxJoie = 0;}
                if (tristesse > 0) {tauxTristesse = tristesse / 10 + 1;} else {tauxTristesse = 0;}
                if (peur > 0) {tauxPeur = peur / 10 + 1;} else {tauxPeur = 0;}

                if (tauxJoie > 0) {
                    if (tauxTristesse > 0) {
                        if (tauxPeur > 0) {
                            attaqueHumeur = ((attaqueHumeur * tauxJoie) / tauxTristesse) / tauxPeur;
                        } else {
                            attaqueHumeur = (attaqueHumeur * tauxJoie) / tauxTristesse;
                        }
                    } else {
                        attaqueHumeur = (attaqueHumeur * tauxJoie);
                    }
                }



                // ==================== CALCUL ATTAQUE ==================== //



                // stat ennemi

                var defenseEnnemi = ennemi.defense;

                // calcul defense

                ennemi.equipement.forEach(item => {
                    if (item.id !== '') {

                        let idVariable = item.id;
                    
                        lexiqueItem.forEach(lexiqueItem => {
                            if (lexiqueItem.id === idVariable) {
                            let actionValue = lexiqueItem.action;
                            defenseEnnemi = defenseEnnemi + actionValue;
                            }
                        });
                    }
                });

                // calcul avec humeur

                var tauxJoieEnnemi = ennemi.joie;
                var tauxNiveauEnnemi = ennemi.niveau / 10 + 1;
                var tauxColereEnnemi = ennemi.colere / 10 + 1;
                var tauxTristesseEnnemi = ennemi.tristesse;
                var tauxPeurEnnemi = ennemi.peur;
                var tauxTestoEnnemi = (ennemi.testo / 10 + 1) * tauxColereEnnemi;

                if (ennemi.joie > 0) {tauxJoieEnnemi = ennemi.joie / 10 + 1;} else {tauxJoieEnnemi = 0;}
                if (ennemi.tristesse > 0) {tauxTristesseEnnemi = ennemi.tristesse / 10 + 1;} else {tauxTristesseEnnemi = 0;}
                if (ennemi.peur > 0) {tauxPeurEnnemi = ennemi.peur / 10 + 1;} else {tauxPeurEnnemi = 0;}

                if (tauxPeurEnnemi > 0) {
                    if (tauxTristesseEnnemi > 0) {
                        if (tauxJoieEnnemi > 0) {
                            defenseEnnemi = ((defenseEnnemi * tauxPeurEnnemi) / tauxTristesseEnnemi) / tauxJoieEnnemi;
                        } else {
                            defenseEnnemi = (defenseEnnemi * tauxPeurEnnemi) / tauxTristesseEnnemi;
                        }
                    } else {
                        defenseEnnemi = defenseEnnemi * tauxPeurEnnemi;
                    }
                }

                defenseEnnemi = (defenseEnnemi * tauxNiveauEnnemi) * tauxTestoEnnemi;

                console.log('attaqueHumeur : ', attaqueHumeur);
                console.log('defenseEnnemi : ', defenseEnnemi);

                const attaqueNet = attaqueHumeur - defenseEnnemi;

                console.log('attaque Net : ', attaqueNet);

                const ennemi2 = JSON.parse(sessionStorage.getItem(cible));
                ennemi2.vie = ennemi2.vie - attaqueNet;
                sessionStorage.setItem(cible, JSON.stringify(ennemi2));

                console.log('ennemi vie : ', ennemi2.vie);

                if (ennemi2.vie < 0) {

                    ennemi2.vie = 0;
                    combatGlobal.nombreEnnemi--;

                    // drop item

                    let ligne;

                    ennemi.itemDropable.forEach(item => {
                        let id = item.id;
                        let img = item.img;
                        let action = item.action;
                        let description = item.description;
                        let important = item.important;
                        let nom = item.nom;
                        let valeur = item.valeur;
                        let type = item.type;
                        let quantite = Math.floor(Math.random() * (item.quantite.max - item.quantite.min + 1)) + item.quantite.min;

                        ligne = {
                            id: id, 
                            quantite: quantite, 
                            img: img, 
                            description: description, 
                            action: action,
                            important: important,
                            nom: nom,
                            valeur: valeur,
                            type: type,
                        };

                        console.log('ligne a ajouter :', ligne);

                        itemGagne.item.push(ligne);
                    });

                    if (combatGlobal.nombreEnnemi <= 0) {
                        itemGagne.etat = 'oui';
                    }

                    sessionStorage.setItem('itemGagne', JSON.stringify(itemGagne));
                    
                }
            }
        });

        combatGlobal.nombreEquipe--;
        combatGlobal.nomEquipe = combatGlobal.nomEquipe.filter((element) => element !== nom);
        console.log('combatGlobal.nomEquipe : ', combatGlobal.nomEquipe);
        sessionStorage.setItem('combatGlobal', JSON.stringify(combatGlobal));

    }
}
