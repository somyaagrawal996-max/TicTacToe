let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let winMSg = document.querySelector("#win");
let winCont = document.querySelector(".win-msg")
let count = 0;
let winnerFound = false;

let turnO = true;

const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.color = "";
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    winCont.classList.add("hide");
    count = 0;
    winnerFound = false;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked")
        if(turnO){
            box.innerText = "O";
            turnO = false;
            box.style.color = "#A9A9A9"
            count++;
        }else{
            box.innerText = "X";
            turnO = true;
            count++;
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    for(pattern of winArr){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

         if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                disableBoxes();
                winMSg.innerText = `Congratulation, You are winner ${pos1}`;
                winCont.classList.remove("hide");
                winnerFound = true;
            }
    }
   }
   
    if(count == 9 && !winnerFound){
        winMSg.innerText = "No Winner Found";
        winCont.classList.remove("hide");
    }

}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

