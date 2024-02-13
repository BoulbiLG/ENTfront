import React, { useState, useEffect } from 'react';

const Texte = ({ texte, vitesse }) => {
    const [affichage, setAffichage] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < texte.length) {
                setAffichage((prev) => prev + texte[index]);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, vitesse);

        return () => clearInterval(intervalId);
    }, [texte, vitesse]);

    return <div>{affichage}</div>;
};

export default Texte;
