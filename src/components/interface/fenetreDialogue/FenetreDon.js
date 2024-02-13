import React from 'react';

import './fenetreDon.css';

import Item from '../../sprite/Item';

const FenetreDon = ({ nom }) => {

  const donnerObjet = (id) => {

    const PNJ = JSON.parse(sessionStorage.getItem(`${nom}`));
    const inventaire = JSON.parse(sessionStorage.getItem('inventaire'));

    PNJ.confiance = PNJ.confiance + 10;

    if (PNJ.confiance > 100) {
      PNJ.confiance = 100;
    }

    sessionStorage.setItem(`${nom}`, JSON.stringify(PNJ));
      
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
        return;
      }
    }
  }

  const items = JSON.parse(sessionStorage.getItem('inventaire'));
  const PNJ = JSON.parse(sessionStorage.getItem(`${nom}`));

  return (
    <div className='fenetreDonConteneur'>
      <p>Voici les objets qui interesse {nom} parmis vos objets :</p>
      <p>(Cliquez ou double cliquez sur l'objet que vous voulez donner)</p>
      <div className="caseItem">
        {items.map(({ id, quantite }) => (
          PNJ.desir.includes(id) && (
            <Item img={id} quantite={quantite} onClick={() => {donnerObjet(id)}} />
            )
          ))}
      </div>
    </div>
  )
}

export default FenetreDon