// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione 
// compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let max = parseInt(prompt(`Inserisci il numero massimo tra 0 e ${myArray.length-1}`));
let min = parseInt(prompt(`Inserisci il numero minimo tra 0 e ${myArray.length-1}`));

while (min > max){
    min = parseInt(prompt(`ERRORE: Inserisci un numero minimo tra 0 e ${myArray.length-1} più piccolo del numero massimo`));
}

// FOR EACH
// const newArray = [];
// myArray.forEach((element, index, array) => {
//     if (index>min && index<max){
//         newArray.push(element);
//     }
// });
// console.log(newArray);

// FILTER
const newArray = myArray.filter((element, index) => {
    return index>min && index<max;
});
console.log(newArray);
