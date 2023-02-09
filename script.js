let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];

const button1 = documentQuerySelector("#button1");
const button2 = documentQuerySelector("#button2");
const button3 = documentQuerySelector("#button3");
const text = documentQuerySelector("#text");
const xpText = documentQuerySelector("#xpText");
const healthText = documentQuerySelector("#healthText");
const goldText = documentQuerySelector("#goldText");
const monsterStats = documentQuerySelector("#monsterStats");
const monsterNameText = documentQuerySelector("#monsterName");
const monsterHealthText = documentQuerySelector("#monsterHealth");

button1.onclick = goStore;
button2.onclick = goCave;
button1.onclick = fightDragon;

function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button1.onclick = goTown;
    text.innerText = "You entered the store.";
}
function goCave() {
    console.log("Going to cave.");
}
function fightDragon() {
    console.log("Fighting dragon.");
}



