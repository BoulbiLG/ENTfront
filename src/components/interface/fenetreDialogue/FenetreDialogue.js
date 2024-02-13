import React, { useState, useEffect } from 'react';
import './fenetreDialogue.css';
import Bouton from '../../bouton/Bouton';
import Texte from '../../defilementTexte/DefilementTexte';
import { replique } from './repliqueJoueur';
import { verificationDialogue } from './verificationDialogue';
import FenetreDon from './FenetreDon';

const FenetreDialogue = ({ nom }) => {

  const PNJ = JSON.parse(sessionStorage.getItem(`${nom}`));

  const [dialogueAffichage, dialogueAffichageSet] = useState(PNJ.dialogue1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const [affichageFenetreDon, affichageFenetreDonSet] = useState('false');

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
      className='dialogueConteneur'
      style={{
        position: 'absolute',
        left: `${position.x - 430}px`,
        top: `${position.y - 330}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <p>{nom} :</p>
      <div className="dialogue">
        <p>{dialogueAffichage}</p>
      </div>
      <div className="choix">
        <div className="humeur">
          <p>Joie : {PNJ.joie}</p>
          <p>Colere : {PNJ.colere}</p>
          <p>Peur : {PNJ.peur}</p>
          <p>Tristesse : {PNJ.tristesse}</p>
          <p>Confiance : {PNJ.confiance}</p>
          <p>Empathie : {PNJ.empathie}</p>
        </div>
        <hr />
        <p>Que voulez vous dire à {nom} ?</p>
        {replique.map(({ phrase, id, type, consequence }) => (
          !PNJ.questionPose.includes(id) && (
            <>
            {type != 'don' ? (
              <Bouton
              key={id}
              label={phrase}
              onClick={() => verificationDialogue(nom, id, type, consequence, dialogueAffichageSet)}
              />
            ) : 
              <>
                {affichageFenetreDon == 'false' ? (
                  <Bouton key={id} label={phrase} onClick={() => {affichageFenetreDonSet('true')}}/>
                ) : 
                  <Bouton key={id} label={phrase} onClick={() => {affichageFenetreDonSet('false')}}/>
                } 
              </>
            }
          </>
          )
        ))}
      </div>
      {affichageFenetreDon == 'true' ? (
        <FenetreDon nom={nom} />
      ) : null }
      {affichageFenetreDon == 'true' ? (
        <>
          <div className='fermer' >
            <Bouton label='Fermer' onClick={() => {affichageFenetreDonSet('false')}}/>
          </div>
        </>
      ) : null } 
    </div>
  );
};

export default FenetreDialogue;