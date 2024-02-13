import React from 'react';
//import { useState, useEffect } from 'react';

import './fenetreEquipement.css';

import Item from '../../sprite/Item';
import { retirerObjetEffet } from './verificationObjet';

const FenetreEquipement = () => {

    const equipementTotal = JSON.parse(sessionStorage.getItem('equipementTotal'));
    const items = JSON.parse(sessionStorage.getItem(`${equipementTotal.courant}`));

    const retirerItem = (id, type) => {

        const itemsNouveau = JSON.parse(sessionStorage.getItem(`${equipementTotal.courant}`)) || [{ equipement: [] }];
        const itemsMaj = itemsNouveau[0].equipement.map(item => {
            if (item.type === type) {
                return { ...item, id: '' };
            }
            return item;
        });
    
        itemsNouveau[0].equipement = itemsMaj;
    
        sessionStorage.setItem(`${equipementTotal.courant}`, JSON.stringify(itemsNouveau));
    
        const inventaire = JSON.parse(sessionStorage.getItem('inventaire')) || [];
        const infoItem = inventaire.find((element) => element.id === id);
    
        if (infoItem) {
            retirerObjetEffet(id, infoItem.type, infoItem.action);
        } else {
            console.error(`Aucun élément trouvé dans l'inventaire avec l'ID ${id}.`);
        }
    };
    
       

    return (
        <div
        className='equipementConteneur'
        style={{
            position: 'absolute',
            left: '150px',
            top: '50px',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <br />
            <p>(Double clic pour retirer un équipement)</p>
            <p>{equipementTotal.courant}</p>
            {items[0] && items[0].equipement && items[0].equipement.length > 0 && items[0].equipement.map(({ id, x, y, type }) => (
                <Item key={id} x={x} y={y} img={id} onClick={() => {retirerItem(id, type)}} />
            ))}
        </div>
    );
};

export default FenetreEquipement;
