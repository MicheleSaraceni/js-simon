
/******************* Nome Funzione *******************/

/******************* RANDOM *******************/
/**
 * Genera un numero random da un valore minimo ad un valore massimo e lo ritorna in un valore numerico intero.
 * @param {number} min Valore minimo del random
 * @param {number} max Valore massimo del random
 */
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}  

//Es. Utilizzo 1
//Numeri definiti in precedenza
//let n = random(1, 6);
//console.log (n);

//Es. Utilizzo 2
//let min = parseInt(prompt ("Inserisci il numero minimo"));
//let max = parseInt(prompt ("Inserisci il numero massimo"));
//num = random(min, max);
//console.log (n);



/******************* PARI O DISPARO *******************/
/**
 * 
 * @param {number} n 
 * @returns 
 * 
 * @abstract Ritorna la parola "Pari" o "Dispari"
 */
function evenodd(n){
    if (n % 2 === 0){
        return "Pari";
    } else {
        return "Dispari";
    }
}

//Es. Utilizzo 1
//n = parseInt(prompt("Inserisci un numero"));
//paridispari = evenodd(n);
//console.log (paridispari);

/******************* Nome Funzione *******************/