import React from 'react';
import './bouton.css';

const Bouton = ({ label, onClick }) => {

    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};

export default Bouton;