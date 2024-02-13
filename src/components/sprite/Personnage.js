import React, { useState } from 'react';
import FenetreDialogue from '../interface/fenetreDialogue/FenetreDialogue';

const Personnage = ({ nom, x, y, img, dialogue, parlerAutorisation = 'false' }) => {

    const [etat, etatSet] = useState('fixe');

    const style = {
        cursor: 'pointer'
    }
        
    return (
        <div className='personnageConteneur' 
            style={{
                position: 'absolute',
                top: y,
                left: x
            }}
            >
                {etat === 'fixe' ? (
                    <img src={img} alt="personnage" style={style} onClick={() => {etatSet('dialogue')}}/>
                ) : null }
                {etat === 'dialogue' ? (
                    <img src={img} alt="personnage" style={style} onClick={() => {etatSet('fixe')}}/>
                ) : null }
                {etat === 'dialogue' ? (
                    <FenetreDialogue nom={nom} dialogue={dialogue} />
                ) : null }
        </div>
    )
}

export default Personnage