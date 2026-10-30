let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector(".user_score");
const compScorePara = document.querySelector(".comp_score");
const btn = document.querySelector(".btn");
const restart = document.querySelector("#restart");
let mode="light";
const md=document.querySelector("#mode");
const body=document.querySelector("body");
const user=document.querySelector(".user");
const comp=document.querySelector(".comp");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        const compChoice = genCompChoice();

        if (userChoice === compChoice) {
            btn.innerText = `Draw! Both chose ${userChoice}`;
            btn.style.backgroundColor = "grey";
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compChoice === "scissors" ? false : true;
            } else {
                userWin = compChoice === "rock" ? false : true;
            }

            if (userWin) {
                userScore++;
                userScorePara.innerText = userScore;
                btn.innerText = `You Win! Computer chose ${compChoice}`;
                btn.style.backgroundColor = "green";
            } else {
                compScore++;
                compScorePara.innerText = compScore;
                btn.innerText = `You Lose! Computer chose ${compChoice}`;
                btn.style.backgroundColor = "red";
            }
        }
    });
});

restart.addEventListener("click", () => {
    userScore = 0; 
    compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    btn.innerText = "Let's start the game";
    btn.style.backgroundColor = "purple";
});
md.addEventListener("click", () =>{
    if(mode==="light"){
        body.style.backgroundColor="black";
        md.innerText="Click to switch light mode";
        btn.style.backgroundColor="purple";
        md.style.backgroundColor="blue";
        restart.style.backgroundColor="orange";
        userScorePara.style.color="white"
        compScorePara.style.color="white"
        user.style.color="white";
        comp.style.color="white";

    
    
        mode="dark";
    }
    else{
        body.style.backgroundColor="white";
        md.innerText="Click to switch dark mode";
        btn.style.backgroundColor="black";
        md.style.backgroundColor="black";
        restart.style.backgroundColor="black";
        userScorePara.style.color="black"
        compScorePara.style.color="black"
        user.style.color="black";
        comp.style.color="black";


    
        mode="light";
       }
    }
);