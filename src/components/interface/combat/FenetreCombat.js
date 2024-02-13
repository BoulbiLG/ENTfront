import React, { useState, useEffect } from 'react';
import PersonnageCombat from './PersonnageCombat';
import FenetreDropItem from './dropItem/FenetreDropItem';
import Equipier from './Equipier';
import './fenetreCombat.css';

const FenetreCombat = ({ combat }) => {

  // ========== RECUPERATION SESSION ========== //

  const [showFenetreDropItem, setShowFenetreDropItem] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedItemGagne = JSON.parse(sessionStorage.getItem('itemGagne'));
      if (updatedItemGagne.etat === 'oui') {
        setShowFenetreDropItem(true);
      } else {
        setShowFenetreDropItem(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  // ========== FENETRE BOUGE ========== //

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const equipementTotal = JSON.parse(sessionStorage.getItem('equipementTotal')) || { nom: [] };

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
      className='fenetreCombatConteneur'
      style={{
        position: 'absolute',
        left: `${position.x - 600}px`,
        top: `${position.y - 1110}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className='info'>
        <p>(Combat)</p>
      </div>
      <div className='personnage'>
        {combat.nom.map((nom, index) => (
          <PersonnageCombat nom={nom} img={combat.nomURL[index]} key={nom} />
        ))}
      </div>
      <div className='action'>
        <div className='listeEquipier'>
          {equipementTotal.nom.map((nom) => (
            <div className='conteneurEquipier' key={nom}>
              <Equipier nom={nom} />
            </div>
          ))}
        </div>
      </div>
      <div className='fenetreDialogue'></div>
      <div className="fenetreDropItem">
        {showFenetreDropItem ? (
          <FenetreDropItem />
        ) : null}
      </div>
    </div>
  );
};

export default FenetreCombat;
