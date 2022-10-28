const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&"];

let firstPassword = createPassword()
let secoundPassword = createPassword()

function createPassword(){
    let password = ''
    for(let i = 0; i<15; i++){
        password += characters[createRandomIndex()]
    }
    return password
}
function createRandomIndex(){
    return Math.floor(Math.random() * characters.length)
}

let generateEl = document.querySelector('#generate-btn')
generateEl.addEventListener('click', function(e){
    document.querySelector('#pass-one-div').innerHTML = firstPassword
    document.querySelector('#pass-two-div').innerHTML = secoundPassword
})

let passOneEl = document.querySelector('#pass-one-div')
passOneEl.addEventListener('click', function(e){
    navigator.clipboard.writeText(firstPassword)
    console.log(firstPassword)
})

let passTwoEl = document.querySelector('#pass-two-div')
passTwoEl.addEventListener('click', function(e){
    navigator.clipboard.writeText(secoundPassword)
})
