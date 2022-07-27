const stBtn = document.getElementById("startBtn")
const messageEl = document.getElementById("message-el")

const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const newBtn = document.getElementById("newBtn")
const playerEl = document.getElementById("player-el")

let sum = 0 
let cards = [] // array 
let hasBlackJack = false
let isAlive = false
let message = ""

let player={
    name : "Hassan",
    chips : 5
}



playerEl.textContent = player.name + ": $"+ player.chips 


stBtn.addEventListener("click",startGame)

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}


function startGame(){
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards= [firstCard , secondCard]

    sum = firstCard + secondCard



    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: "+ sum

    cardsEl.textContent ="Cards: "
    for(let i=0; i<cards.length ;i++){
        cardsEl.textContent +=cards[i]+" "
    }

    if(sum <= 20){
    
        message="Do you want to draw a new card? "
    }else if(sum === 21){
        
        message = "You've got Blackjack! "
        hasBlackJack = true
    }else {
        
        message = "You're out of the game "
        isAlive = false
        // if(isAlive==false){
            
        //     newBtn.parentNode.removeChild(newBtn);
            
        // }
    }
    messageEl.textContent=message
    
    

    console.log(message)
}
function handleNewCard(){
    
    
    if(isAlive && hasBlackJack===false){
        let thirdCard = getRandomCard()
        cards.push(thirdCard)
        sum += thirdCard
    
        renderGame()
        if(isAlive===false){
            newBtn.parentNode.removeChild(newBtn);
            stBtn.textContent = "GAME OVER"
            stBtn.disabled = true
        }
    }
    if(hasBlackJack){
        newBtn.parentNode.removeChild(newBtn);
        stBtn.textContent = "BLACKJACK"
        stBtn.disabled = true

    }
    
}

newBtn.addEventListener( "click" , handleNewCard )



