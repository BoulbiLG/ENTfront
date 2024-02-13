// Deplacement.js
import React, { useState, useEffect } from 'react';
import './deplacement.css';
import Bouton from '../../bouton/Bouton';
import { verificationEvenement } from './verificationEvenement';
import FenetreCombat from '../combat/FenetreCombat';

const Deplacement = () => {
  const [deplacement, setDeplacement] = useState(
    JSON.parse(sessionStorage.getItem('deplacementGlobal')) || {
      autorisation: 'non',
    }
  );

  const [combatVerification, setCombatVerification] = useState(false);

  const [zone, setZone] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    console.log('Initialisation deplacement fenetre');
    console.log('zoneX : ', zone.x);
    console.log('zoneY : ', zone.y);
    console.log('zoneZ : ', zone.z);

    setDeplacement((prevDeplacement) => ({
      ...prevDeplacement,
      autorisation: 'non',
    }));

    sessionStorage.setItem('deplacementGlobal', JSON.stringify(deplacement));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deplacer = (direction) => {
    const nouvellesCoordonnees = { ...zone };
    switch (direction) {
      case 'monter':
        nouvellesCoordonnees.z++;
        break;
      case 'descendre':
        nouvellesCoordonnees.z--;
        break;
      case 'avant':
        nouvellesCoordonnees.y++;
        break;
      case 'bas':
        nouvellesCoordonnees.y--;
        break;
      case 'gauche':
        nouvellesCoordonnees.x++;
        break;
      case 'droite':
        nouvellesCoordonnees.x--;
        break;
      default:
        break;
    }

    setZone(nouvellesCoordonnees);
    verificationEvenement(nouvellesCoordonnees.x, nouvellesCoordonnees.y, nouvellesCoordonnees.z);
    verifierCombat();
  };

  const verifierCombat = () => {
    const combat = JSON.parse(sessionStorage.getItem('combatGlobal'));

    if (combat.combat === 'oui') {
      console.log('combat oui');
      setCombatVerification(true);
    } else {
      console.log('combat non');
      setCombatVerification(false);
    }
  };

  return (
    <div className='deplacementConteneur'>
      <div className='boutonSection'>
        <div className='haut'>
          <Bouton label='Monter' onClick={() => deplacer('monter')} />
          <Bouton label='Avant' onClick={() => deplacer('avant')} />
          <Bouton label='Descendre' onClick={() => deplacer('descendre')} />
        </div>
        <div className='bas'>
          <Bouton label='Gauche' onClick={() => deplacer('gauche')} />
          <Bouton label='Bas' onClick={() => deplacer('bas')} />
          <Bouton label='Droite' onClick={() => deplacer('droite')} />
        </div>
      </div>
      {combatVerification && <FenetreCombat combat={JSON.parse(sessionStorage.getItem('combatGlobal'))} />}
    </div>
  );
};

export default Deplacement;
