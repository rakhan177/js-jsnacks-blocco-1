// blocco-6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

// chiedo all' utente un numero,lo memorizzo in una variabile e lo trasformo in intero
var n = parseInt(prompt('dimmi un numero'));
// creo un ciclo che parte da uno per arrivare fino al numero inserito
for(var x = 1; x <= n; x++){  //recap: tutto ciò che scrivo dentro for si ripete per tutta la durata del ciclo
  /*ad ogni ciclo stampo in console il valore di x elevato al cubo con:
  Math.pow(valore da elevare, potenza)*/
  console.log(Math.pow(x, 3));
}
