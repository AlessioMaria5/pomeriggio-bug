/* 
 *  SNACK 1 - fattiMandareDallaMamma()
 *  Sulla base dei valori selezionati in una lista di checkbox, 
 *  stampare (in console) la lista della spesa, pronta da utilizzare!
*/

// su Const printButton era dichiarato un querySelectorAll , cosi
//recuperava una nodeList. Uno dei modi corretti è usare getElementById per recuperare in maniera giusta l'elemento.
const printButton = document.getElementById('print-button');

printButton.addEventListener('click', function () {
    //in const groceryList invece avevamo querySelector invece di querySelectorAll ed anche un errore di sintassi prima di Input ('.input)
    const groceryList = document.querySelectorAll('input[type="checkbox"]');
    const toBeBought = [];
    
    for (let i = 0; i < groceryList.length; i++) {
        const element = groceryList[i];

        if(element.checked){
            toBeBought.push({
                name: element.value,
                bought: '▢'
            });
        }

        console.log(element.value, element.checked);
    }

    console.table(toBeBought);
});