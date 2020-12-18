// blocco-2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parolaUno = prompt('Inserisci una parola');

var parolaDue = prompt('Inserisci un altra parola');

if (parolaUno.length > parolaDue.length){
  console.log(parolaDue +" "+ parolaUno);
}else{
  console.log(parolaUno +" "+ parolaDue);
}
