let bici = [
    {
        nome: 'giula',
        peso: 10
    },
    {
        nome: 'graziella',
        peso: 7
    },
    {
        nome: 'sonic',
        peso: 12
    }

];

let biciLeggera = bici[0];
for (let i = 0; i < bici.length - 1;i++) {
    
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
};

let {
    nome, peso
} = biciLeggera;
console.log ( 
    `nome bicicletta: ${nome}, peso bicicletta: ${peso}`
)