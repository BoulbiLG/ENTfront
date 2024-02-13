import React, { useState, useEffect } from 'react';

import './fenetreInventaire.css';

import Item from '../../sprite/Item';
import Bouton from '../../bouton/Bouton';
import FenetreEquipement from './FenetreEquipement';
import FenetreStat from './FenetreStat';
import ProfilJoueur from '../profil/ProfilJoueur';
import { verificationItem } from './equiperItem';
import { retirerObjetEffet } from './verificationObjet';

const FenetreInventaire = () => {

    const items = JSON.parse(sessionStorage.getItem('inventaire'));
    const equipementTotal = JSON.parse(sessionStorage.getItem('equipementTotal'));

    const [avertissement, avertissementSet] = useState('');
    const [itemCourant, itemCourantSet] = useState('');
    const [fenetreEquipementEtat, fenetreEquipementEtatSet] = useState('false');
    const [fenetreStatEtat, fenetreStatEtatSet] = useState('false');
        
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Centrer la fenêtre initialement
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

    const supprimerElementInventaire = (id, type) => {

        // suppression equipement

        const itemsNouveau = JSON.parse(sessionStorage.getItem(`${equipementTotal.courant}`)) || [];
        const maj = itemsNouveau[0].equipement.find(item => item.id === id);

        if (maj) {
            maj.id = '';
          } else {
            console.error(`L'élément avec l'ID ${id} n'a pas été trouvé.`);
          }
      
        sessionStorage.setItem(`${equipementTotal.courant}`, JSON.stringify(itemsNouveau));

        const inventairePrime = JSON.parse(sessionStorage.getItem('inventaire')) || [];
        const infoItem = inventairePrime.find((element) => element.id === id);

        retirerObjetEffet(id, infoItem.type, infoItem.action);

        // suppression inventaire

        let inventaire = JSON.parse(sessionStorage.getItem('inventaire')) || [];
        const ligneASupprimer = inventaire.find((element) => element.id === id);
      
        if (ligneASupprimer) {
            if (ligneASupprimer.important === 'non') {
                if (ligneASupprimer.quantite > 1) {
                ligneASupprimer.quantite--;
        
                sessionStorage.setItem('inventaire', JSON.stringify(inventaire));
                } else {
                const nouveauInventaire = inventaire.filter((element) => element.id !== id);
                sessionStorage.setItem('inventaire', JSON.stringify(nouveauInventaire));
                }
            } else {
                avertissementSet('Cet objet est important, il ne peut pas être supprimer sale fils de pute.');
                return;
            }
        }

    };

    return (
        <div
        className='inventaireConteneur'
        style={{
            position: 'absolute',
            left: `${position.x - 600}px`,
            top: `${position.y - 330}px`,
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        >
            <div className="caseSection">
                {items.map(({ id, quantite, equipe }) => (
                    <div>
                        <Item
                            img={id}
                            quantite={quantite}
                            equipe={equipe}
                            typeItem='inventaire'
                            onClick={() => {itemCourantSet(id)}}
                        />
                    </div>
                ))}
            </div>
            {items.map(({ id, nom, quantite, description, valeur, type, cible, action, equipe, img }) => (
                id === itemCourant ? (
                    <div key={id} className="infosSection">
                        <div className="info">
                            <p>Nom : {nom}</p>
                            <p>Quantité : {quantite}</p>
                            <p>Description : </p>
                            <div className="description">
                                <p>{description}</p>
                            </div>
                            <p>Valeur d'achat : {valeur}</p>
                        </div>
                        <div className="action">
                            <div className="avertissement">
                                <p>{avertissement}</p>
                            </div>
                            <Bouton label='Utiliser' onClick={() => {verificationItem(id, type, cible, action, quantite, equipe)}} />
                            <Bouton label='Jeter' onClick={() => {supprimerElementInventaire(id, type)}} />
                        </div>
                    </div>
                ) : null
            ))}
            {fenetreEquipementEtat === 'true' ? (
                <FenetreEquipement />
            ) : null }
            {fenetreStatEtat === 'true' ? (
                <FenetreStat />
            ) : null }
            <div className="profil">
                <div className="boutonSection">
                    {fenetreEquipementEtat === 'false' ? (
                        <Bouton label='Voir équipements' onClick={() => {fenetreEquipementEtatSet('true')}} />
                    ) : <Bouton label='Fermer les équipements' onClick={() => {fenetreEquipementEtatSet('false')}} /> }
                    {fenetreStatEtat === 'false' ? (
                        <Bouton label='Voir stats' onClick={() => {fenetreStatEtatSet('true')}} />
                    ) : <Bouton label='Fermer les stats' onClick={() => {fenetreStatEtatSet('false')}} /> }
                </div>
                {equipementTotal.index.map((equipement, index) => (
                    <ProfilJoueur key={index} id={equipement} nom={equipementTotal.nom[index]} courant={equipementTotal.courant} idS={equipementTotal.stat[index]}/>
                ))}
            </div>
        </div>
    );
};

export default FenetreInventaire;