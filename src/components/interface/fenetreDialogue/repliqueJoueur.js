
export const titre = [

    {titre: 'joyeux'},
    {titre: 'colere'},
    {titre: 'tristesse'},
    {titre: 'peur'},
    {titre: 'empathie'},
    {titre: 'confiance'},

];

export const replique = [

    // joyeux

    {type: 'joie', phrase: 'Je vous souhaite une bonne journée !', id: 1, consequence: {joie: 4, confiance: 1}},
    {type: 'joie', phrase: 'Si vous êtes joyeux alors je suis joyeux', id: 2, consequence: {joie: 4, confiance: 1, empathie: 2}},

    // colere

    {type: 'colere', phrase: 'Sale pédé', id: 3, consequence: {colere: 4, peur: 1, confiance: -3, empathie: -5}},
    {type: 'colere', phrase: 'Fils de pute je vais te crever !', id: 4, consequence: {colere: 6, peur: 2, confiance: -10, empathie: -20}},

    // tristesse

    {type: 'tristesse', phrase: 'Tu sais on finira tous par mourir', id: 5, consequence: {tristesse: 3, joie: -3}},
    {type: 'tristesse', phrase: 'Nous ne sommes que poussière', id: 6, consequence: {tristesse: 1, joie: -1, colere: 1}},

    // peur

    {type: 'peur', phrase: 'Si je te met une claque tu meurs gamin ahah', id: 7, consequence: {colere: 2, peur: 4, confiance: -4}},
    {type: 'peur', phrase: "J'ai entendu dire que quelqu'un veut te faire du mal", id: 8, consequence: {peur: 6, confiance: 3, empathie: 1}},

    // empathie

    {type: 'empathie', phrase: "L'autre jour je pensais à toi justement", id: 9, consequence: {empathie: 3, confiance: 1, joie: 3}},
    {type: 'empathie', phrase: "J'ai parlé de toi en bien à ma mère", id: 10, consequence: {empathie: 5, confiance: 3}},

    // confiance

    {type: 'confiance', phrase: 'Je suis sur que tu es un type bien', id: 11, consequence: {confiance: 6, joie: 1}},
    {type: 'confiance', phrase: "J'aimerais être aussi fort que toi", id: 12, consequence: {confiance: 3, empathie: 2}},

    // don

    {type: 'don', phrase: "-     Je veux te donner quelque chose     -", consequence: {confiance: 2, empathie: 2, joie: 2, peur: -2, colere: -2, tristesse: -2}},

]