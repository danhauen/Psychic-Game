
  // creates an array for computer choice
      var letters = ["a","b","c","d","e","f","g","h","i","j","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
  
  // computer choses random letter
      var randLetter = letters [Math.floor(Math.random() * letters.length)];
  
  // starts wins and losses at zero and initial guess amount at 5
      var winCount = 0;
      var lossCount = 0;
      var guessesLeft= 5;
      
      


  // vars for diplaying text HTML
      var userGuessText = $("#userGuess-display");
      var winsText = $("#win-display")
      var lossesText = $("#loss-display");
      var guessesLeftText = $("#guessesLeft-display");
      
      winsText.text(winCount);
      lossesText.text(lossCount);
      guessesLeftText.text(guessesLeft);
      
  
  // Starts, creates random letter and resets game
      $("#button").on("click", function() {
        randLetter = letters [Math.floor(Math.random() * letters.length)];    
        winCount = 0;
        winsText.text(winCount);
        lossCount = 0;
        lossesText.text(lossCount);
        guessesLeft= 5;
        guessesLeftText.text(guessesLeft);
        userGuess = [];
        userGuessText.text(userGuess); 
        console.log(randLetter);
      });

   // reset when letter guessed or exceeds guess limit of 5
      function reset() {
        randLetter = letters [Math.floor(Math.random() * letters.length)]; 
        console.log(randLetter);
        winsText.text(winCount);
        lossesText.text(lossCount);
        guessesLeft = 5;
        guessesLeftText.text(guessesLeft);
        userGuess = [];
        userGuessText.text(userGuess);     
      }   
      
      
$(document).ready(function() {
        reset();

            

    // user presses a key to guess letter
    document.onkeyup = function(event) {
      var userGuess = event.key.toLowerCase();
      userGuessText.text(userGuess);

      // changes wins and losses
      winsText.text(winCount);
      lossesText.text(lossCount);
      // updates amount of guesses remaining
      guessesLeftText.text(guessesLeft);
      //guessesSoFarText.text(userGuess);


                      if (userGuess === randLetter) {
                        winCount++;
                        console.log("correct")
                        reset();
                        
                      }   

                      else if (userGuess != randLetter) {
                        guessesLeft--;
                        console.log("wrong")
                        guessesLeftText.text(guessesLeft);
                        //guessedLettersText.text(guessedLetters);

                                    if (guessesLeft === 0){
                                    lossCount++;
                                    guessesLeft = 5;
                                    console.log("loss")
                                    reset();
                                    }  
                        }     
                    } 
                  });        


              
                  
              
              
              
 
 
 
 