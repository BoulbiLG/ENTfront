import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../../../components/interface/inventaire/ItemURL';

export const initialisationSessionDeplacement = () => {

  // ========== GLOBAL ========== //

  sessionStorage.setItem('deplacementGlobal', JSON.stringify({
    zoneX: 0,
    zoneY: 0,
    zoneZ: 0,
    autorisation: 'oui',
  }));

}