import React from 'react';
import Jauge from '../../jauge/Jauge';

import './fenetreStat.css';

const FenetreStat = () => {

    const statTotal = JSON.parse(sessionStorage.getItem('equipementTotal'));
    const stats = JSON.parse(sessionStorage.getItem(`${statTotal.courant}`));
    
    return (
        <div className='fenetreStatConteneur' style={{
            position: 'absolute',
            left: '100px',
            top: '100px',
        }}>
            <p>{statTotal.courant}</p>
            <br />
            <hr />
            <br />
            <div className="vie jauge">
                <p className='predicateur'>Vie : </p>
                <Jauge valeur={stats[0].vie} couleur='green' fond='red' />
                <p className='indicateur'>{stats[0].vie}</p>
            </div>
            <p>Niveau(x) : {stats[0].niveau}</p>
            <div className="exp jauge">
                <p className='predicateur'>Exp : </p>
                <Jauge valeur={stats[0].exp} couleur='blue' fond='grey' />
                <p className='indicateur'>{stats[0].exp}</p>
            </div>
            <p>Attaque : {stats[0].attaque}</p>
            <p>Defense : {stats[0].defense}</p>
            <p>Vitesse : {stats[0].vitesse}</p>
            <p>Courage : {stats[0].courage}</p>
            <div className="magie jauge">
                <p className='predicateur'>Magie : </p>
                <Jauge valeur={stats[0].magie} couleur='yellow' fond='black' />
                <p className='indicateur'>{stats[0].magie}</p>
            </div>
            <p>Testostérone : {stats[0].testo}</p>
            <p>Body count : {stats[0].bodycount}</p>
            <p>Argent : {stats[0].argent}</p>
        </div>
    )
}

export default FenetreStat