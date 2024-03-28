let Boxes = document.querySelectorAll(".grid-item")
let Newgame = document.querySelector('.button')
let curPlayer = document.querySelector('.player')
let alertBox = document.querySelector('#popup-box')
let winnertext = document.querySelector('.Winnertext')
let msgcontainer = document.querySelector('.hide')



let turn0 = true;
curPlayer.innerHTML = 'Current Player : X'
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const disableboxex = () =>{
    Boxes.forEach((Box)=>{
        Box.classList.add('disabled');
    })
}

const winnershow = (winner)=>{
    winnertext.innerText = `Winner is ${winner}`
    // msgcontainer.classList.remove('.hide')
}



Boxes.forEach((Box) => {
    Box.addEventListener('click', function(){
    //    console.log(Box)
    // Box.innerHTML = 0
    if(turn0 === true){
        Box.innerHTML = "O"
        curPlayer.innerHTML = 'Current Player : O'
        turn0 = false
        // Box.disabled = true; // this will only work for button td element not on the div 
        Box.classList.add('disabled');  // so we add the new technique 
    }
    else{
        curPlayer.innerHTML = 'Current Player : X'
        Box.innerHTML = "X"
        turn0 = true
        // Box.disabled = true;
        Box.classList.add('disabled');
    }
    checkwinner();
    
    })
})


const checkwinner = ()=>{
    // for(let pattern of winPatterns){
    //     // console.log(pattern[0] , pattern[1], pattern[2])
    //     let val1 = pattern[0].innerHTML
    //     console.log(val1)
    // }
    winPatterns.forEach((pattern)=>{
        // console.log(Boxes[pattern[0]], Boxes[pattern[1]], Boxes[pattern[2]])
        let val1 = Boxes[pattern[0]].innerHTML
        let val2 = Boxes[pattern[1]].innerHTML
        let val3 = Boxes[pattern[2]].innerHTML
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                console.log(`winner ${val1}`)
                disableboxex()
                winnershow(val1)
            }
        }
        
    })
}

const enableBoxes = ()=>{
    Boxes.forEach((Box)=>{
        Box.classList.add('.enabled')
        Box.innerHTML = ""
        curPlayer.innerHTML = 'Current Player : X'

    })
}

const newGame = () =>{
    turn0 = true;
    enableBoxes()
    winnertext.innerText = ""
}

Newgame.addEventListener('click', newGame)