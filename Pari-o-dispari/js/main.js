//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


//-----------------------PROGRAMMA PRINCIPALE----------------------------
//PRENDO GLI INPUT DALL'UTENTE
let evenOddUserChoice = prompt("La somma sarà pari o dispari?");
let numberUserChoice = prompt("Scegli un numero da 1 a 5");
//TODO: VALIDAZIONE DEGLI INPUT

//GENERO IL NUMERO CASUALE <=5
let randomNumber = Math.ceil(Math.random()*5);

//SOMMO IL NUMERO CASUALE GENERATO E IL NUMERO INSERITO DALL'UTENTE
let result = numberUserChoice + randomNumber;

let sum = result;

//TODO: VERIFICO LE CONDIZIONI DI VITTORIA


//OUTPUT DEL RISULTATO
console.log("La somma dei due numeri è " + evenOrOdd )










//-----------------------------FUNZIONI----------------------------------