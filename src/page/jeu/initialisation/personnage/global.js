
export const initialisationSessionPersonnageGlobal = () => {

    // ========== GLOBAL ========== //
  
    sessionStorage.setItem('personnageGlobal', JSON.stringify({
      nom: ['David'],
    }));
  
  }