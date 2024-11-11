/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce. (Per favorire il lavoro tutor mettete inizialmente un timer di 5-10 sec e non 30)
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*NOTA*: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*BONUS:*
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form. */

"use strict";
console.clear();


//prendo i dati
let countdown = document.getElementById("countdown");
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

//Genero nuovi li contenenti un numero random e li appendo all'ul

for (let i = 0; i < 5; i++){
    let newli = document.createElement("li");
    newli.textContent = random(1, 50);
    console.log("newli");
    nlist.appendChild(newli);
}

//attivo un countdown di 30 sec. (ora 5 sec. per testare) per far memorizzare all'utente i numeri e al suo scadere d-none a tutto e faccio apparire le caselle il form con le caselle di input

let time = 30;
const clock = setInterval(function(){
    if (time > 25){
        time -= 1;
        countdown.innerHTML = time;
    } else {
        clearInterval(clock);
        countdown.classList.add('d-none');
        instructions.classList.add('d-none');
        nlist.classList.add('d-none');
        form.classList.remove('d-none');
    }
}, 1000)