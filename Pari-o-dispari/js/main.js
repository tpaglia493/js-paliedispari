//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


//-----------------------PROGRAMMA PRINCIPALE----------------------------
let intervalMinimum = 1;
let intervalMaximum = 5;
//PRENDO GLI INPUT DALL'UTENTE
let evenOddUserInput = evenOddUserChoice();

let validatedNumber = numberFromUser(intervalMinimum, intervalMaximum);

//FORMA GENERALIZZATA VALIDAZIONE NUMERO COMPRESO IN UN INTERVALLO

//insideTheIntervalValidation(validatedNumber, intervalMinimum, intervalMaximum);




//TODO: VALIDAZIONE DEGLI INPUT




//GENERO IL NUMERO CASUALE <=5
let randomNumber = Math.ceil(Math.random() * 5);

//SOMMO IL NUMERO CASUALE GENERATO E IL NUMERO INSERITO DALL'UTENTE
let result = validatedNumber + randomNumber;

let sum = result;

//TODO: VERIFICO LE CONDIZIONI DI VITTORIA
let evenOrOdd = "";

if (result % 2 == 0) {
    evenOrOdd = "pari";
} else { evenOrOdd = "dispari" }

//OUTPUT DEL RISULTATO
console.log("La somma dei due numeri è " + evenOrOdd)










//-----------------------------FUNZIONI----------------------------------

//VALIDAZIONE CHE L'INPUT COINCIDA IN STRINGA CON UNO DI DUE VALORI ATTESI (IN QUESTO CASO 'PARI' O 'DISPARI')
function evenOddUserChoice() {
    let userChoice = "";
    while (userChoice != "pari" && userChoice != "dispari") {
        userChoice = prompt("Inserisci 'pari' o 'dispari'");
    }

    return userChoice;
};

//VALIDAZIONE CHE L'INPUT SIA UN NUMERO COMPRESO NELL'INTERVALLO 1-5
function numberFromUser(minimum, maximum) {
    let number = "";
    while ((number < minimum || number > maximum || isNaN(number))) {
        number = prompt(`Inserisci un numero compreso tra ${minimum} e ${maximum}`)
    };

    return number;

}


