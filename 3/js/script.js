// blocco-3: Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

// chideo i numeri
var numeroUno = prompt('Inserisci un numero');
var numeroDue = prompt('Inserisci un numero');
var numeroTre = prompt('Inserisci un numero');
var numeroQuattro = prompt('Inserisci un numero');
var numeroCinque = prompt('Inserisci un numero');
// creo un array vuoto
var array = [];
// popolo l' array con i numeri inseriti dall' utente trasformandoli in numeri interi
array.push(parseInt(numeroUno));
array.push(parseInt(numeroDue));
array.push(parseInt(numeroTre));
array.push(parseInt(numeroQuattro));
array.push(parseInt(numeroCinque));
// stampo l' array per controllo
console.log(array);
// creo la variabile di verifica false per ciclo for
var somma = 0;
// creo ciclo for
for (var i = 0; i < array.length; i++) {
  // dichiaro che ad ogni ciclo, somma è uguale a se stessa piu il valore ciclato di array
  somma += array[i];
}
// stampo la somma dei numeri della variabile
console.log('La somma dei tuoi numeri è:' +" "+ somma);


/*METODO BREVE:

var somma = 0;
for(var i = 0; i < 5; i++){
  var n = prompt('Inserisci un numero');
  somma += parseInt(n);
}
console.log('La somma dei tuoi numeri è:' +" "+ somma);

-creo la variabile somma con valore 0;
-inizio un ciclo for che parte da 0 e arriva fino a 5 aggiungendo 1 ogni volta.
-ad ogni ciclo chiedo il numero all' utente e lo metto nella variabile n.
-aggiungo ad ogni ciclo, al valore 0 iniziale di somma,il valore n trasformato in intero.
-stampo in console il valore di somma a fine ciclo.

*/
