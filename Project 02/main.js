let player = {
    name: "Matt",
    coins: 150,
    cards: [],
    isAlive: false
}
let sum = 0;
let hasBlackJack = false;
let message = "";

let playerEl = document.querySelector('#player-el');
playerEl.innerHTML = `${player.name}: $${player.coins}`;

const sumEl = document.querySelector('#sum-el');
const messageEl = document.querySelector('#message-el');
const cardEl = document.querySelector("#cards-el");

const startBtn = document.querySelector('#start-game-btn');
startBtn.addEventListener('click', function(e){
    startGame();
})
const drawEl = document.querySelector('#draw-card-btn');
drawEl.addEventListener('click', function(e){
    drawCard();
})
function startGame(){
    if(player.coins >= 10){
        player.isAlive = true;
        hasBlackJack = false;
        let firstCard = getRandomCard();
        let secoundCard = getRandomCard();
        sum = firstCard + secoundCard;
        player.cards = [firstCard, secoundCard];
        player.coins -= 10;
        playerEl.innerHTML = `${player.name}: $${player.coins}`;
        renderGame();
    }else{
        alert("YOU'RE OUT OF COINS!!")
    }
}
function renderGame(){
    if (sum <=20){
        message = "Do you want to draw a new card?";
    }else if (sum === 21){
        message = "You've got a BlackJack!\n+100c";
        hasBlackJack = true
        player.coins += 100;
        playerEl.innerHTML = `${player.name}: $${player.coins}`;
    }else {
        message = "You're out of the game!";
        player.isAlive = false;
    }
    messageEl.innerHTML = message;
    sumEl.innerHTML = `Sum: ${sum}`;
    cardEl.innerHTML = 'Cards: '
    for(let i = 0; i < player.cards.length; i++){
        cardEl.innerHTML += `${player.cards[i]} `;
    }
}
function drawCard(){
    if (player.isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        player.cards.push(card)
        renderGame();
    }
}
function getRandomCard(){
    let randomNum = Math.ceil(Math.random() * 13);
    if (randomNum == 1){
        return 11;
    }else if (randomNum > 10){
        return 10;
    }else {
        return randomNum;
    }
}