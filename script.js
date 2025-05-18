let userPick;
let computerPick;
let pickArr = ["Rock","Paper","Scissors"]

let Random = () => {
    return Math.floor(Math.random()*3) 
}

let determineWinner = () => {
    if (userPick === computerPick) {
        result = "It's a tie"
} else if (userPick === "Rock") {
    if (computerPick === "Scissors") {
        result = "You win!";
    } else {
        result = "You lose!";
    }
} else if (userPick === "Paper") {
    if (computerPick === "Rock") {
        result = "You win!";
    } else {
        result = "You lose!";
    }
} else if (userPick === "Scissors") {
    if (computerPick === "Paper") {
        result = "You win!";
    } else {
        result = "You lose!";
    }
}
document.querySelector(".result").textContent = `${result}`
}

for(let i = 0; i<=2; i++){
    document.querySelectorAll(".images")[i].addEventListener("click",()=> {
        userPick = pickArr[i];
        computerPick = pickArr[Random()]
        document.querySelector(".YourPick").textContent = `Your Pick: ${userPick}`
        document.querySelector(".ComputersPick").textContent = `Computer's Pick: ${computerPick}`
        determineWinner();
    })
}

document.querySelector(".pickOne").addEventListener("click",()=>{
    userPick = pickArr[Random()]
    computerPick = pickArr[Random()]
    document.querySelector(".YourPick").textContent = `Your Pick: ${userPick}`
    document.querySelector(".ComputersPick").textContent = `Computer's Pick: ${computerPick}`
    determineWinner();
})

