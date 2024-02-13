import React from 'react';
import { useState, useEffect } from 'react';
import Bouton from '../../bouton/Bouton';
import { IAchoixEnnemi } from './dropItem/IAchoixEnnemi';
import { verificationActionChoix } from './verificationActionChoix';

import './fenetreChoix.css';

const FenetreChoix = ({ nom }) => {



    // ========== RECUPERATION SESSION ========== //



    let combatGlobal = JSON.parse(sessionStorage.getItem('combatGlobal'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            combatGlobal = JSON.parse(sessionStorage.getItem('combatGlobal'));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);



    // ========== RESTE ========== //

    

    const [autorisation, setAutorisation] = useState(true);

    useEffect(() => {
        const isAutorise = combatGlobal.nomEquipe.some((element) => element.nom !== nom);
        console.log(isAutorise)
        setAutorisation(isAutorise);
    }, [combatGlobal, nom]);

    const nomEquipier = nom;

    const applicationChoix = (choix, cible, nom) => {
        verificationActionChoix(choix, cible, nom);
    }

    if (combatGlobal.nomEquipe.length === 0) {
        console.log(combatGlobal.nomEquipe.length);
        IAchoixEnnemi();
    }

    const combat = JSON.parse(sessionStorage.getItem('combatGlobal'));

    const [etatChoixCible, etatChoixCibleSet] = useState('false');
    const [etatFenetreTotal, etatFenetreTotalSet] = useState('true');
    const [choixAction, choixActionSet] = useState('');

    return (
        <>
            {etatFenetreTotal === 'true' ? (
                <div className='fenetreChoixConteneur'>
                    <p>{nom}</p>
                    {autorisation === true ? (
                        <div className="listeBouton">
                            <Bouton label='Main gauche' onClick={() => {etatChoixCibleSet('true'); choixActionSet('mainG');}} />
                            <Bouton label='Main droite' onClick={() => {etatChoixCibleSet('true'); choixActionSet('mainD');}} />
                            <Bouton label='Utiliser un objet' onClick={() => {etatChoixCibleSet('true'); choixActionSet('objet');}} />
                            <Bouton label='Parler' onClick={() => {etatChoixCibleSet('true'); choixActionSet('parler');}} />
                        </div>
                    ) : 
                    <p>Attendez que le tour se finisse.</p>
                    }
                    { etatChoixCible === 'true' ? (
                        <div className="choixCible">
                            <div className="haut">
                                <p>Quelle cible ?</p>
                            </div>
                            <div className="listeCible">
                                {combat.nom.map((nom) => (
                                    <p key={nom} onClick={() => {applicationChoix(choixAction, nom, nomEquipier); etatFenetreTotalSet('false');}}>{nom}</p>
                                ))}
                            </div>
                            <div className="bas">
                                <Bouton label='Retou' onClick={() => {etatChoixCibleSet('false');}} />
                            </div>
                        </div>
                    ) : null }
                </div>
            ) : null }
        </>
    )
}

export default FenetreChoix