import React from 'react';

const Jauge = ({ valeur, couleur, fond }) => {
    
    const tauxRemplissage = Math.min(Math.max(valeur, 0));
    const taux = valeur * 300 / 100;

    return (
        <div style={{
            height: '5px',
            width: '300px',
            backgroundColor: fond
        }}>
            <div style={{
                height: '5px',
                width: `${taux}px`,
                backgroundColor: couleur
            }}></div>
        </div>
    );
};

export default Jauge;