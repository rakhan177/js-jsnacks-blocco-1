// Calcola la somma e la media dei primi 10 numeri.

// creo la variabile somma e la variabile media assegnandogli un valore 0
var somma = 0;
var media = 0;
// inizio un ciclo che parte da 1 e arriva fino a 10
for (var x = 1; x <= 10; x++) {
  // ad ogni cliclo aggiungo a somma il valore di x...quindi 0+1 1+2 3+3 ecc...
  somma += x;
  /*dopo aver stabilito somma stabilisco la media del risultato, quindi divido somma
  per la x di quel ciclo...a fine ciclo somma risulterà 55 e la x sarà chiaramente 10*/
  media = somma / x;
}
// esco dal ciclo e stampo in console i risultati di somma e media
console.log(somma);
console.log(media);
