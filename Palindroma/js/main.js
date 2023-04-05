//Palidroma
//Chiedere all’utente di inserire una parola.
//Creare una funzione per capire se la parola inserita è palindroma

//-----------------------PROGRAMMA PRINCIPALE----------------------------
while(true){

let userInputString = prompt("Inserisci una parola");

isPalindroma(userInputString);
}









//-----------------------------FUNZIONI----------------------------------
//defiinisco la lunghezza della parola

//la prima lettera è uguale all'ultima lettera?

//la seconda lettera è uguale alla penultima lettera?
function isPalindroma(word){
let arrayDiLettere = [];
let arrayDiControllo = [];
//PUSHO OGNI LETTERA DELLA PAROLA NELL'ARRAY
for(let i =0; i<word.length; i++){
//PUSHO NELL'ARRAY DI LETTERE IN ORDINE NORMALE
let letter = word.slice(i, i+1);
arrayDiLettere.push(letter);
//PUSHO NELL'ARRAY DI CONTROLLO OGNI LETTERA IN ORDINE INVERSO
let controlLetter = word.slice((word.length - i - 1), word.length - i);
arrayDiControllo.push(controlLetter)
if(arrayDiLettere[i]!=arrayDiControllo[i]){
    alert(word + " non è palindroma!");
    break;
} else{ 
    alert(word + " è palindroma");
    break;
};

}
}

