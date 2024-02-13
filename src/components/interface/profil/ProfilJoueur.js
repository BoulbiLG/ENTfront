import React from 'react';

import './profilJoueur.css';

const ProfilJoueur = ({ nom, courant }) => {

    const modifierEquipementCourant = (nom) => {

        const equipementTotal = JSON.parse(sessionStorage.getItem('equipementTotal'));
        equipementTotal.courant = nom;
        sessionStorage.setItem('equipementTotal', JSON.stringify(equipementTotal));
        
    }

    return (
        <>
            { courant === nom ? (
                <div className='profilJoueurConteneur courant' onClick={() => {modifierEquipementCourant(nom)}}>
                    <p>{nom}</p>
                </div>
            ) : 
                <div className='profilJoueurConteneur basic' onClick={() => {modifierEquipementCourant(nom)}}>
                    <p>{nom}</p>
                </div>
            }
        </>
    )
}

export default ProfilJoueur