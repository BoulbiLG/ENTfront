import React, { useState } from 'react';
import FenetreChoix from './FenetreChoix';

const Equipier = ({ nom, x, y, img}) => {

    const [etat, etatSet] = useState('fixe');

    const style = {
        cursor: 'pointer'
    }
        
    return (
        <div className="surConteneurEquipier">
            <div className='equipierConteneur' 
                style={{
                    border: '1px solid black',
                }}
            >
                <p>{nom}</p>
                {etat === 'fixe' ? (
                    <img src={img} alt="personnage" style={style} onClick={() => {etatSet('choix')}}/>
                ) : null }
                {etat === 'choix' ? (
                    <img src={img} alt="personnage" style={style} onClick={() => {etatSet('fixe')}}/>
                ) : null }
            </div>
            {etat === 'choix' ? (
                <div className='choixConteneur' style={{
                }}>
                    <FenetreChoix nom={nom} />
                </div>
            ) : null }
        </div>
    )
}

export default Equipier