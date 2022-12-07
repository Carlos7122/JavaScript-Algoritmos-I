const jogos = require('./precoJogos');

let maisBarato = 0;

for (let atual = 0; atual < jogos.length; atual++) {
    if( precojogos[atual] < jogos[maisBarato]){
        maisBarato = atual; 
    }
}

console.log(jogos[maisBarato]);