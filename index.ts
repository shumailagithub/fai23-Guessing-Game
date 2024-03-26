#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input for guessing number

// 3) compare user input with compuyer generated number and show result


const randomNumber = Math.floor(Math.random() * 6 + 1 );

console.log("welcom to number Guessing Game");


console.log(randomNumber);




const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congtratulation! your Guessing number is Right");
}else{
    console.log("you Guess wrong number");
    
}
