//vars for guess and correct answers

//alerts for wrong or right answers

//promts for inserting answers

//functions for correct and incorrect answers

//alerts for game end

//promt asking to play again





// $(document).ready(function() {

// alert("Want to play a game?");

// alert("Guess a Letter. You have 9 guesses.");


var possible_letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var random_letter = possible_letters[Math.floor(Math.random() * possible_letters.length)];
// Computer is choosing random letter from the possible_letters array
console.log("This is the computer's random letter.")
console.log(random_letter)

// var user_guess = function() {
// }
// var guess_again;
// var guess_count = 0;
// var max_guesses = 9;
// var incorrect_answers = [];
// var correct_answer;
var guesses_left = 9;
var wins = 0;
var losses = 0;
var letters_guessed = [];

var update = function(){
document.getElementById("Wins").innerHTML = wins;
document.getElementById("Losses").innerHTML = losses;
document.getElementById("guesses_left").innerHTML = guesses_left;
document.getElementById("letters_guessed").innerHTML = letters_guessed.join(", ");
}

document.onkeyup = function(event) {
    console.log(event);
    console.log(letter);
    console.log(typeof letter);

    if(event.key.match(/[a-z]/i) && event.key.length === 1){
        var letter = event.key;
        if(letter == random_letter) {
            wins++;
            alert("Nice! You just read my mind! Let's play again!");
            guesses_left = 9;
            letters_guessed = [];
            random_letter = possible_letters[Math.floor(Math.random() * possible_letters.length)];
    
            // increases wins by 1
            // alerts them they've won
            // resets the guesses_left to 9
            // resets the letter_guessed array to empty
            // picks a new random letter
        } 
        else{
            guesses_left--;
            letters_guessed.push(letter);
            // decreases the letters_guessed by 1
            // pushes the guessed letter to the letters_guessed array
        }
        if(guesses_left == 0){
            losses++;
            alert("You've run out of guesses. Please play again.")
            guesses_left = 9;
            letters_guessed = [];
            random_letter = possible_letters[Math.floor(Math.random() * possible_letters.length)];
            // increases the losses by 1
            // alerts them they've lost the game
            // resets the guesses_left to 9
            // resets the letters_guessed array to empty
            // chooses a new random letter
        }
        
        update();
    } else {
        return;
    }
}

// document.onkeyup = function (user_guess) {
//     keyPressed = user_guess.key;}

//     incorrect_answers.push(keyPressed);

// function getItem() {
//     document.getElementById("random_letter").innerHTML = possible_letters[Math.floor(Math.random() * possible_letters.length)];
//   }

// //possible letters loop
// for (let i = 0; i < possible_letters.length; i++) {
//     console.log(possible_letters[i]);
//     }

// //guesses left loop
// for (let i = 9; i > 0; i--) {
//     console.log(i);
//     }

// function remainingGuessesFunctionName() {
//     guesses_left = 9 - letters_guessed.length;
// }

//How do I make letters guesses appear?
// $("#letters_guessed").on("keyup", function() {
//     letters_guessed=letters_guessed + possible_letters;
// });

//  if (user_guess !== random_letter){
    
//     guess_again
//     // prompt("Nope! Sorry, guess again!");
    
// }


//     code trying to get prompt to repop up after each wrong answer
// do {
//     guess_again
// }
// while (user_guess !== random_letter);



//win scenario
// if (user_guess === random_letter){
    
//     alert("Nice! You just read my mind! Want to play again?")
//     wins += 1;
// }

// //loss scenario
// if (guesses_left ===-1 ){

//     alert("You've run out of guesses. Please play again.")
//     losses += 1;
// }
    


// });
