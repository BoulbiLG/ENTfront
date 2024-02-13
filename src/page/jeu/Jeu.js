import React from 'react';
import './jeu.css';
import Personnage from '../../components/sprite/Personnage';
import Coffre from '../../components/sprite/Coffre';
import Interface from './interface/Interface';
import Deplacement from '../../components/interface/deplacement/Deplacement';
import { initialisationSession } from './initialisation/session';
import { initialisationSessionCoffre } from './initialisation/sessionCoffre';
import { initialisationSessionDavid } from './initialisation/personnage/david';
import { initialisationSessionCombat } from './initialisation/sessionCombat';
import { initialisationSessionDeplacement } from './initialisation/sessionDeplacement';
import { initialisationSessionPersonnageGlobal } from './initialisation/personnage/global';

const Jeu = () => {

  initialisationSession();
  initialisationSessionDavid();
  initialisationSessionCoffre();
  initialisationSessionCombat();
  initialisationSessionDeplacement();
  initialisationSessionPersonnageGlobal();

  return (
    <div className='jeuConteneur'>
      <Personnage nom='David' x='100px' y='100px' img='https://cloud.onche.org/d682eecd-0f0e-42a8-86bc-5e2e2d5f4598!xMhG6dJaYD/128'/>
      <Coffre type='coffre' id='x0y0z0coffre' x={500} y={500} img='https://cloud.onche.org/d682eecd-0f0e-42a8-86bc-5e2e2d5f4598!xMhG6dJaYD/128' />
      <Interface />
      <Deplacement />
    </div>
  )
}

export default Jeu