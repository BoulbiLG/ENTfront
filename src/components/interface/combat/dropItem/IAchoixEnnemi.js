export const IAchoixEnnemi = () => {

    console.log('initialisation ia ennemi');

    const combatGlobal = JSON.parse(sessionStorage.getItem('combatGlobal'));

    for (let i = 0; i < combatGlobal.nom.length; i++) {
        const ennemi = combatGlobal.nom[i];
        console.log(`Ennemi ${i + 1}: ${ennemi}`);
    }

}