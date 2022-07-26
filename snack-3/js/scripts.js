/* 
 *  SNACK 3 - whatAMessExclamationPoint()
 *  Prendere i dati da vari array e creare un solo array di oggetti. 
 *  Dopodichè, mostare gli elementi in pagina
*/

const firstNames = [
    'Adriano',
    'Simone',
    'Jacopo',
    'Alessio'
];
const lastNames = [
    'Grimaldi',
    'Giusti',
    'Damiani',
    'Vietri'
];
const emails = [
    'adriano.grimaldi@boolean.careers',
    'simone.giusti@boolean.careers',
    'jacopo.damiani@boolean.careers',
    'alessio.vietri@boolean.careers'
];
const phoneNumbers = [
    '+39 331 234 56 78',
    '+39 332 345 67 89',
    '+39 333 456 78 90',
    '+39 334 567 89 01'
];
const avatars = [
    'https://cdn-icons-png.flaticon.com/512/236/236831.png',
    'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    'https://cdn-icons-png.flaticon.com/512/145/145843.png',
    'https://cdn-icons-png.flaticon.com/512/3940/3940403.png'
];

const users = [];
const usersContainer = document.getElementById('users');
//alla condizione del for "i<firstNames" mancava il .length per fare riferimento alla lunghezza dell'array.
for (let i = 0; i < firstNames.length; i++) {
    //abbiamo inserito i parametri assegnati alla funzione che prima mancavano
    let newUser = createUserObject(firstNames[i], lastNames[i],emails[i],phoneNumbers[i],avatars[i]);

    users.push(newUser);
    
    
}




// element e d i erano invertiti, perchè il primo è un parametro e il secondo è l'indice. ( nel for each )
users.forEach((element, i) => {
    const newUserCard = document.createElement('div');
    newUserCard.innerHTML += `<img src="${element.avatar}">`;
    newUserCard.innerHTML += `<h2>${element.fullName}</h2>`;
    newUserCard.innerHTML += `<h4>${element.email}</h4>`;
    newUserCard.innerHTML += `<h4>${element.phoneNumber}</h4>`;

    usersContainer.append(newUserCard);
    console.log('ciao')
});

function createUserObject(firstName, lastName, email, phoneNumber,avatar) {
    console.log(firstName, lastName, email, phoneNumber,avatar)
    let newUser = {};
    newUser.fullName = firstName + ' ' + lastName;
    newUser.email = email;
    newUser.phoneNumber = phoneNumber;
    newUser.avatar = avatar;
   
    //mancava il return della funzione che restituiva i valori da stampare
    return newUser
    
    
}

