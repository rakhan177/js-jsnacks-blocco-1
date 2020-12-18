// blocco-5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// inizializzo un array list vuoto e una variabile n vuota che andro poi a definire nel ciclo
var list = [];
var n; //la dichiarazione si fa solo una volta
// creo ciclo if che arriva fino a 5(da 0 ovviamente)
for(var i = 0; i < 6; i++){
  // ad ogni ciclo chiedo all' utente di inserire un numero e lo trasformo in intero
   n = parseInt(prompt('inserisci un numero'));
   /*creo la condizione che controlla il numero inserito,se quest ultimo diviso 2
   da un resto diverso da 0 significa che non è un numero pari.....*/
  if(n % 2 !== 0) {
    // .....quindi con push lo inserisco nell' array
    list.push(n);
  }
}
// stampo in console l' array con i valori dispari prima inseriti
console.log(list);

/*ps.ho perso 2 ore perche non capivo come mai quando scrivevo i numeri nel prompt
,la console mi stampava un array vuoto....poi ho capito....scrivevo solo
numeri pari.....imbarazzo totale!*/
