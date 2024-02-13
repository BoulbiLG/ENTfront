export const verificationDialogue = (nom, id, type, consequence, dialogueAffichageSet) => {

    const PNJ = JSON.parse(sessionStorage.getItem(`${nom}`));

    PNJ.compteurReplique++;

    let repliqueReturn = 'Rien compris . . .';

    console.log(PNJ);

    // incrementation

    for (const emotion in consequence) {

        const valeur = consequence[emotion];
        if (emotion == 'joie') {PNJ.joie += valeur; if (PNJ.joie <= 0) {PNJ.joie = 0}}
        if (emotion == 'colere') {PNJ.colere += valeur; if (PNJ.colere <= 0) {PNJ.colere = 0}}
        if (emotion == 'tristesse') {PNJ.tristesse += valeur; if (PNJ.tristesse <= 0) {PNJ.tristesse = 0}}
        if (emotion == 'peur') {PNJ.peur += valeur; if (PNJ.peur <= 0) {PNJ.peur = 0}}
        if (emotion == 'confiance') {PNJ.confiance += valeur; if (PNJ.confiance <= 0) {PNJ.confiance = 0}}
        if (emotion == 'empathie') {PNJ.empathie += valeur; if (PNJ.empathie <= 0) {PNJ.empathie = 0}}

        console.log('Emotion:', emotion, 'Valeur:', valeur);

    }

    PNJ.questionPose.push(id);

    sessionStorage.setItem(`${nom}`, JSON.stringify(PNJ));

    console.log(PNJ);

    // gestion dialogue

    if (type == 'colere') {
        if(PNJ.colere >= 0 && PNJ.colere <= 20) {repliqueReturn = PNJ.replique.colere.r1;}
        if(PNJ.colere >= 20 && PNJ.colere <= 40) {repliqueReturn = PNJ.replique.colere.r2;}
        if(PNJ.colere >= 40 && PNJ.colere <= 60) {repliqueReturn = PNJ.replique.colere.r3;}
        if(PNJ.colere >= 60 && PNJ.colere <= 80) {repliqueReturn = PNJ.replique.colere.r4;}
        if(PNJ.colere >= 80) {repliqueReturn = PNJ.replique.colere.r5;}
    }

    if (type == 'confiance') {
        if(PNJ.confiance >= 0 && PNJ.confiance <= 30) {repliqueReturn = PNJ.replique.confiance.r1;}
        if(PNJ.confiance >= 30 && PNJ.confiance <= 60) {repliqueReturn = PNJ.replique.confiance.r2;}
        if(PNJ.confiance >= 60) {repliqueReturn = PNJ.replique.confiance.r3;}
    }

    if (type == 'joie') {repliqueReturn = PNJ.replique.joie;}
    if (type == 'tristesse') {repliqueReturn = PNJ.replique.tristesse;}
    if (type == 'empathie') {repliqueReturn = PNJ.replique.empathie;}
    if (type == 'peur') {repliqueReturn = PNJ.replique.peur;}

    if (type == 'don') {repliqueReturn = 'Vraiment ?'}

    dialogueAffichageSet(repliqueReturn);

}