//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("ESERCIZIO 1");
let cifraUno = 100
let cifraDue = 40
if (cifraUno > cifraDue) {
  console.log(cifraUno + " è il numero più grande");
} else {
  console.log(cifraUno + " non è il numero più grande");
}
if (cifraUno < cifraDue) {
  console.log(cifraDue + " è il numero più grande");
} else {
  console.log(cifraDue + " non è il numero più grande");
}


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

console.log("ESERCIZIO 2");
let num = 21
if (num < 5) {
  console.log("The text size is Tiny");

} else if (num < 10) {
  console.log("The text size is Small");
  
} else if (num < 15) {
  console.log("The text size is Medium");

} else if (num < 20) {
  console.log("The text size is Large");
  
} else if (num >= 20) { 
  console.log("The text size is Huge");
  
} 
  

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

console.log("ESERCIZIO 3");
for (let step = 0; step < 11; step++) {
  if (step === 3) {
    continue
  }
  if (step === 8) {
    continue
  }
  console.log(step);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

console.log("ESERCIZIO 4");
for (let stepDue = 0; stepDue < 16; stepDue++) {
  if (stepDue % 2 === 1 ) {
    console.log(stepDue + " dispari");
  } else {
    console.log(stepDue + " pari");
  }
 
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("ESERCIZIO 1 (EXTRA)");
let a = 18
let b = 10
if (a === 8) {
   console.log(a + " è uguale ad a");

} else if (b === 8) {
   console.log(b + " è uguale a b");
  
} else if ((a + b) === 8) {
   console.log(( a + b ) + " è la somma di a + b");

} else if ((a - b) === 8) {
   console.log(( a - b ) + " è la differenza di a - b");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log("ESERCIZIO 2 (EXTRA)");

let data = "18"
let olio = 30
let vino = 30
let totalShoppingCart = olio + vino
let spedizione = 10
let valoreScontato = ( totalShoppingCart - ((totalShoppingCart * 20) / 100) )
if (data === "18") {
  totalShoppingCart = sconto
  console.log("OGGI E' IL BLACK-FRIDAY !!! *** 20% DI SCONTO ***");
}
if (totalShoppingCart < 50) {
  totalShoppingCart += spedizione
}
console.log("l'ammontare totale del tuo carrello è di " + totalShoppingCart + " €");


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

console.log("ESERCIZIO 3 (EXTRA)");
console.log("GUARDA ESERCIZIO SOPRA ");


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/
console.log("ESERCIZIO 4 (EXTRA)");


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

console.log("ESERCIZIO 5 (EXTRA)");
for (let i = 1; i < 101; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log(i + " FizzBuzz");
  }
  if (i % 3 === 0){
    if ((i === 15) || (i === 30) || (i === 45) || (i === 60) || (i === 75) || (i === 90)) {
     continue 
    }
    console.log(i + " Fizz");
  }
  if (i % 5 === 0) {
    if ((i === 15) || (i === 30) || (i === 45) || (i === 60) || (i === 75) || (i === 90)) {
      continue
    }
    console.log(i + " Buzz");
  }

}