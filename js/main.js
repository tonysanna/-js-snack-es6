// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// let bici = [
//     {
//         nome: 'giula',
//         peso: 10
//     },
//     {
//         nome: 'graziella',
//         peso: 7
//     },
//     {
//         nome: 'sonic',
//         peso: 12
//     }

// ];

// let biciLeggera = bici[0];
// for (let i = 0; i < bici.length - 1;i++) {
    
//     if (bici[i].peso < biciLeggera.peso) {
//         biciLeggera = bici[i];
//     }
// };

// let {
//     nome, peso
// } = biciLeggera;
// console.log ( 
//     `nome bicicletta: ${nome}, peso bicicletta: ${peso}`
// )

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// let squadre = [
//     {nome: 'giuventus', punti: 0, falli: 0},
//     {nome: 'inda', punti: 0, falli: 0},
//     {nome: 'bilan', punti: 0, falli: 0},
//     {nome: 'acpicchia', punti: 0, falli: 0},
//     {nome: 'acdempoli', punti: 0, falli: 0},
//     {nome: 'lazie', punti: 0, falli: 0},
//     {nome: 'natoli', punti: 0, falli: 0},
// ];

// console.log(squadre);

// for (let key in squadre) {
//     squadre[key].punti = random(10,80);
//     squadre[key].falli = random(1,50);
// };

// let club = [];
// for (let i = 0; i < squadre.length; i++) {
//     let { nome, falli} = squadre[i];
//     club.push({nome,falli});
// };

// function random(min,max) {
//     return Math.floor(Math.random() * max) + min;
// }

const firstArray = [1, 2, 3, 4, 5, 6, 7,];
console.log('Array inzio:');
console.log(firstArray);

function cutArray(array, a, b) {
    const secondArray = array.filter((element, index) =>{
        if (index => a && index <= b) return true;
        return false;
    });
    return secondArray;

}

console.log('Array taglio');
console.log(cutArray(firstArray, 2, 4));