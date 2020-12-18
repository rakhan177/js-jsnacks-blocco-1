// blocco-4: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo l' array con la lista
var listaInvitati = ['matteo', 'giulia', 'sandy', 'martina', 'francesca', 'shiva'];
// chiedo all' utente il nome
var nomeUtente = prompt('Qual è il tuo nome?');
// dichiaro una variabile come falsa
var nomeTrovato = false;
// inizio il ciclo for
for (var i = 0; i < listaInvitati.length; i++){
  // lo ripeto fino a quando il nome utente viene trovato all' interno dell' array
  if (nomeUtente === listaInvitati[i]){
    // se il nome utente viene trovato la variabile dichiarata prima diventa true
    nomeTrovato = true;
  }
}
// esco dal ciclo e creo le condizioni di verifica
if (nomeTrovato === true){
  console.log('Puoi entrare');
}else{
  console.log(nomeUtente +" "+ 'Torna da dove sei venuto!!!');
}
