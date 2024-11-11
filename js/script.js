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

 // Salvo in un nuovo array i numeri generati nella ul
 let generatednumbers = [];
 let listitems = nlist.querySelectorAll('li');
 for(let i = 0; i < listitems.length; i++) {
     generatednumbers.push(parseInt(listitems[i].textContent));
 }
console.log (generatednumbers)

//Attivo un countdown di 30 sec. (ora 5 sec. per testare) per far memorizzare all'utente i numeri e al suo scadere d-none a tutto e faccio apparire le caselle il form con le caselle di input

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

//dopo il click del pulsante salvo i valori inseriti dall'utente all'interno di un nuovo array

let usernumber = [];
confirm.addEventListener("click", saveusernumber)
function saveusernumber (){
    event.preventDefault();
    for(let i = 0; i < inputs.length; i++){
        usernumber.push(parseInt(inputs[i].value));
        if (i === inputs.length - 1){
            console.log(usernumber);
            const igrup = document.getElementById("input-group");
            igrup.classList.add('d-none');
            confirm.classList.add('d-none');
        }
    }
//confronto i numeri dell'utente con quelli estratti e invio il risultato
 let result = [];
 for(let i = 0; i < usernumber.length; i++) {
    for(let i2 = 0; i2 < generatednumbers.length; i2++){
        if (usernumber[i] === generatednumbers[i2]){
            result.push(usernumber[i]);
        }
    }
 }
 message.innerHTML = `Hai indovinato ${result.length} numeri: ${result.join(' , ')}`;
}



