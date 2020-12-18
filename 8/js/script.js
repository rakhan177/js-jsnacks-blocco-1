// 8: Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

// chide all' utente di digitare un numero in console
var numero = prompt('inserisci un numero di 4 cifre');
// inizializzo una variabile somma a cui do un valore 0
var somma = 0;
// creo la condizione di controllo che il numero sia effettivamente di 4 cifre
if(numero.length !== 4){
  // se il numero(ancora stringa) non è di quattro cifre richiamo l' utente
  alert('ho detto un numero di 4 cifre!!!');
}//altrimenti
else{
  /*se invece l' utente si è comportato bene creo un ciclo che parte da 0 e
  arriva fino alla lunghezza del numero*/
  for(var i = 0; i < numero.length/*i < 4*/; i++){
    /*ad ogni ciclo aggiungo alla variabile somma(inizialmente 0)il parseInt
    della i di numero, quindi se l' utente inserisce 4735 al primo ciclo
    numero[i] sarà 4 e somma diventerà 4(4+0), al secondo numero[i]=7 quindi
    somma=4 + 7=11 e così via*/
    somma += parseInt(numero[i]);
  }
  // esco dal ciclo e stampo in console la somma dei numeri così ottenuta,
  // ossia il valore che avrà somma a fine ciclo
  console.log('La somma dei tuoi numeri è: ' + somma);
}
