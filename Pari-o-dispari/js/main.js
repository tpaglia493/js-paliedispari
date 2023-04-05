//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


//-----------------------PROGRAMMA PRINCIPALE----------------------------
//PRENDO GLI INPUT DALL'UTENTE
let stringEvenOddUserInput = prompt("La somma sarà pari o dispari?");
stringInputEqualityToRequirementValidation(stringEvenOddUserInput);

let numberUserChoice = prompt("Scegli un numero da 1 a 5");
isANumberValidation(numberUserChoice);


//FORMA GENERALIZZATA VALIDAZIONE NUMERO COMPRESO IN UN INTERVALLO
let intervalMinimum = 1;
let intervalMaximum = 5;
insideTheIntervalValidation(validatedNumber,intervalMinimum,intervalMaximum);




//TODO: VALIDAZIONE DEGLI INPUT




//GENERO IL NUMERO CASUALE <=5
let randomNumber = Math.ceil(Math.random()*5);

//SOMMO IL NUMERO CASUALE GENERATO E IL NUMERO INSERITO DALL'UTENTE
let result = numberUserChoice + randomNumber;

let sum = result;

//TODO: VERIFICO LE CONDIZIONI DI VITTORIA
let evenOrOdd ="";

if(result%2==0){
    evenOrOdd = "pari";
}else{evenOrOdd= "dispari"}

//OUTPUT DEL RISULTATO
console.log("La somma dei due numeri è " + evenOrOdd )










//-----------------------------FUNZIONI----------------------------------

//VALIDAZIONE CHE L'INPUT COINCIDA IN STRINGA CON UNO DI DUE VALORI ATTESI (IN QUESTO CASO 'PARI' O 'DISPARI')
function stringInputEqualityToRequirementValidation(string){
    while(string!="pari" && string!="dispari"){
        alert("Il valore inserito non ha significato");
         string = prompt("Devi inserire 'pari' o 'dispari'");
    }
    console.log(string)
};

//VALIDAZIONE CHE L'INPUT SIA UN NUMERO
function isANumberValidation(string){
    while(isNaN(string)){
        alert("Il valore inserito non ha significato");
        string = prompt("Inserisci un numero che sia un numero")
    }

    string = parseInt(string);
    console.log(validatedNumber);
    
}

//VALIDAZIONE CHE L'INPUT NUMERICO SIA COMPRESO NELL'INTERVALLO 1-5

function insideTheIntervalValidation(number,minimum,maximum){
    while (number<minimum || number>maximum){
        alert(`Devi inserire un valore compreso tra ${minimum} e ${maximum}`);
        number = prompt(`Inserisci un numero compreso tra ${minimum} e ${maximum}`)

    }
}

