// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi a che posizione della lista il nuovo utente si trova


console.log('ciao');
// dichiarazione var e array
var tuocognome, elenco, listacognomi, listatemp;
listacognomi = document.getElementById('mio-id');
elenco = [
  'Bianchi',
  'Rossi',
  'Carli',
  'Giuli',
  'Viola',
  'Blu'
];

// inserisci cognome
tuocognome = prompt('Inserisci il tuo cognome');


// push nell'array

elenco.push(tuocognome);
console.log(elenco);

//  ordina elenco alfabetico
elenco.sort();
console.log(elenco);



// restituisci posizione in elenco
