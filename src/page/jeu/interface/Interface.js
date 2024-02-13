import React, { useState } from 'react';
import Bouton from '../../../components/bouton/Bouton';
import FenetreInventaire from '../../../components/interface/inventaire/FenetreInventaire';
import './interface.css';

const Interface = () => {

  const [inventaireEtat, inventaireEtatSet] = useState('false');
  
  return (
    <div className='interfaceTerminale'>
      {inventaireEtat === 'false' ? (
        <Bouton label='Inventaire' onClick={() => {inventaireEtatSet('true')}}/>
      ) : null}
      {inventaireEtat === 'true' ? (
        <>
          <Bouton label='Fermer inventaire' onClick={() => {inventaireEtatSet('false')}}/>
          <FenetreInventaire />
        </>
      ) : null}

    </div>
  )
}

export default Interface