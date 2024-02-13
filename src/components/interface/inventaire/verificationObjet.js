export const verificationTypeObjet = (id, type, action) => {

    const equipTotal = JSON.parse(sessionStorage.getItem('equipementTotal'));
    const statJ1 = JSON.parse(sessionStorage.getItem(`${equipTotal.courant}`)) || [];
    
    if (type === 'consomable') {
        if (id === 'pomme') { statJ1[0].vie = statJ1[0].vie + action; if (statJ1[0].vie > 100) {statJ1[0].vie = 100}}
    }

    if (type === 'arme') {
        if (id === 'epee') { statJ1[0].attaque = statJ1[0].attaque + action;}
        if (id === 'bouclier') { statJ1[0].defense = statJ1[0].defense + action;}
    }

    if (type === 'armure') {
        if (id === 'casque') { statJ1[0].defense = statJ1[0].attaque + action;}
        if (id === 'epauliere') { statJ1[0].defense = statJ1[0].defense + action;}
        if (id === 'nike') { statJ1[0].defense = statJ1[0].defense + action;}
        if (id === 'plastron') { statJ1[0].defense = statJ1[0].defense + action;}
        if (id === 'jambiere') { statJ1[0].defense = statJ1[0].defense + action;}
    }

    sessionStorage.setItem(`${equipTotal.courant}`, JSON.stringify(statJ1));
}

export const retirerObjetEffet = (id, type, action) => {

    const equipTotal = JSON.parse(sessionStorage.getItem('equipementTotal'));
    const statJ1 = JSON.parse(sessionStorage.getItem(`${equipTotal.courant}`)) || [];

    var inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
    var ligneItem = inventaire.find((element) => element.id === id);

    if (type === 'arme') {
        if (id === 'epee') { statJ1[0].attaque = statJ1[0].attaque - action; ligneItem.equipe--;}
        if (id === 'bouclier') { statJ1[0].defense = statJ1[0].defense - action; ligneItem.equipe--;}
    }

    if (type === 'armure') {
        if (id === 'casque') { statJ1[0].defense = statJ1[0].defense - action; ligneItem.equipe--;}
        if (id === 'epauliere') { statJ1[0].defense = statJ1[0].defense - action; ligneItem.equipe--;}
        if (id === 'nike') { statJ1[0].defense = statJ1[0].defense - action; ligneItem.equipe--;}
        if (id === 'plastron') { statJ1[0].defense = statJ1[0].defense - action; ligneItem.equipe--;}
        if (id === 'jambiere') { statJ1[0].defense = statJ1[0].defense - action; ligneItem.equipe--;}
    }

    sessionStorage.setItem(`${equipTotal.courant}`, JSON.stringify(statJ1));
    sessionStorage.setItem('inventaire', JSON.stringify(inventaire));
}