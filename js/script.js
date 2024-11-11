/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce. (Per favorire il lavoro tutor mettete inizialmente un timer di 5-10 sec e non 30)
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*NOTA*: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*BONUS:*
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form. */

"use strict";
console.clear();


const countdown = document.getElementById("countdown");
console.log(countdown);

const instructions = document.getElementById("instructions");
console.log(instructions);

const nlist = document.getElementById("numbers-list");
console.log(nlist);

const form = document.getElementById("answers-form");
console.log(form);

const inputs = document.querySelectorAll("input");
console.log(inputs);

let usernumber = [];
function saveusernumber (){
    for(let i = 0; i < inputs.length; i++){
        usernumber.push(inputs[i].value);
    }
}
console.log(usernumber)

const confirm = document.querySelector(".btn-primary");
console.log(confirm);

const message = document.getElementById("message");
console.log(message);
