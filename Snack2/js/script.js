// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// MAIN

const teams = [
    {
        name: 'Inter',
        points: 0,
        sufferedFouls: 0
    },
    {
        name: 'Milan',
        points: 0,
        sufferedFouls: 0
    },
    {
        name: 'Juventus',
        points: 0,
        sufferedFouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        sufferedFouls: 0
    }
];
const newArray = [];
for (let i=0; i<teams.length; i++){
    const singleTeam = teams[i];
    const {name, points, sufferedFouls} = singleTeam
    const copySingleTeam = {
        name,
        sufferedFouls: getRndInteger ( 1, 150)
    }
    newArray.push(copySingleTeam)

    console.log(name + ': ' + copySingleTeam.sufferedFouls + ' falli subiti');
}
console.log(newArray);