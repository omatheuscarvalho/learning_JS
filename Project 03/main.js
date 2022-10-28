let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let choosen = chooseFigthers()

})
function getRandomIndex(){
    return Math.floor(Math.random() * fighters.length);
}
function chooseFigthers(){
    let playerOne = fighters[getRandomIndex()];
    let playerTwo = fighters[getRandomIndex()];
    stageEl.innerHTML = `${playerOne} VS ${playerTwo}`
}
