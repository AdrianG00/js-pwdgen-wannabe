//name
const userName = prompt("inserisci il tuo nome");
console.log(userName);
//surname
const userSurname = prompt("inserisci il tuo cognome");
console.log(userSurname);
//color
const userColor = prompt("inserisci il tuo colore preferito");
console.log(userColor);
//year
const year = 22;
//password message
const message = `La tua password è ${userName}${userSurname}${userColor}${year}`
console.log(message);
//Print password on the page
document.getElementById("user-password").innerHTML = message;
