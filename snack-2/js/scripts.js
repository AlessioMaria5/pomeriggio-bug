/* 
 *  SNACK 2 - advancedCalculus()
 *  Chiedere all'utente un numero e stampare in pagina la tabellina 
 *  del 3 fino al multiplo scelto dall'utente
*/

let userNumber;

do {
    userNumber = prompt('Inserisci un numero');
    //nella condizione di while era riportato userNumber > 1 il che rendeva impossibile
    // la selezione di altri operatori che non fossero 0 e 1. 

    //Abbiamo sostituito il > 1 con < 1 in modo che l'utente possa selezionare tutti i valori possibili al di sopra a 1 ( compreso )
    
} while (userNumber < 1);

const mainList = document.getElementById('main-list');

for (let i = 1; i <= userNumber; i++) {
    const listItem = document.createElement('li');

    listItem.innerHTML = '3 * ' + i + ' = ';
    let product = i * 3;
    listItem.innerHTML = product;

    mainList.append(listItem);    
}