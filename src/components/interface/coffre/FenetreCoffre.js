import React, { useState, useEffect } from 'react';

import Item from '../../sprite/Item';
import { depotItem } from './depotItem';
import { recuperationItem } from './recuperationItem';

import './fenetreCoffre.css';

const FenetreCoffre = ({ type, id }) => {

    const idCoffre = id;
    const inventaire = JSON.parse(sessionStorage.getItem('inventaire'));
    const coffreInventaire = JSON.parse(sessionStorage.getItem(`${idCoffre}Inventaire`));

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    
    useEffect(() => {
        const centerWindow = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const dialogWidth = 50;
        const dialogHeight = 30;

        setPosition({
            x: (windowWidth - dialogWidth) / 2,
            y: (windowHeight - dialogHeight) / 2,
        });
        };

        centerWindow();
        window.addEventListener('resize', centerWindow);

        return () => {
        window.removeEventListener('resize', centerWindow);
        };
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;

        setPosition({
            x: position.x + deltaX,
            y: position.y + deltaY,
        });

        setDragStart({ x: e.clientX, y: e.clientY });
        }
    };
    
    return (
        <div 
            className='fenetreCoffreConteneur'
            style={{
                position: 'absolute',
                left: `${position.x - 320}px`,
                top: `${position.y - 330}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className="coffreSection">
                <p> Contenu du {type}</p>
                <div className='coffreSection2'>
                    {coffreInventaire.map(({ action, cible, important, id, nom, quantite, img, description, valeur, type }) => (
                        <Item
                            img={id}
                            quantite={quantite}
                            onClick={() => {recuperationItem(idCoffre, action, cible, important, id, nom, img, description, valeur, type)}}
                        />
                    ))}
                </div>
            </div>
            <hr />
            <div className="inventaireSection">
                <p>Votre inventaire</p>
                <div className='inventaireSection2'>
                    {inventaire.map(({ action, cible, important, id, nom, quantite, img, description, valeur, type }) => (
                        <Item
                            img={id}
                            quantite={quantite}
                            onClick={() => {depotItem(idCoffre, action, cible, important, id, nom, img, description, valeur, type)}}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FenetreCoffre