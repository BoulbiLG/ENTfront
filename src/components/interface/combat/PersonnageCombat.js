import React, { useState } from 'react';
import './personnage.css';

const PersonnageCombat = ({ nom, x, y, img}) => {

    const [etat, etatSet] = useState('fixe');

    const style = {
        cursor: 'pointer'
    }
        
    return (
        <div className='personnageCombatConteneur' 
            style={{
                position: 'absolute',
                top: y,
                left: x,
                border: '1px solid black',
                padding: '2vh',
            }}
            >
            <p>{nom}</p>
            <img src={img} alt="personnage" style={style}/>
        </div>
    )
}

export default PersonnageCombat