
  // creates an array for computer choice
      var letters = ["a","b","c","d","e","f","g","h","i","j","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
  
  // computer choses random letter
      var randLetter = letters [Math.floor(Math.random() * letters.length)];
  
  // starts wins and losses at zero and initial guess amount at 9
      var winCount = 0;
      var lossCount = 0;
      var guessesLeft= 9;
      var guessedLetters = [];

  // var for joining guessed letters
      var updateGuessesSoFar = function() {
        document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");   
      };

  // vars for diplaying text HTML
      var userGuessText = $("#userGuess-display");
      var winsText = $("#win-display")
      var lossesText = $("#loss-display");
      var guessesLeftText = $("#guessesLeft-display");
      
  // changes wins and losses
      winsText.text(winCount);
      lossesText.text(lossCount);
  // updates amount of guesses remaining
      guessesLeftText.text(guessesLeft);    
      
  // resets game
      $("#button").on("click", function() {
        randLetter = letters [Math.floor(Math.random() * letters.length)];    
        winCount = 0;
        winsText.text(winCount);
        lossCount = 0;
        lossesText.text(lossCount);
        guessesLeft= 9;
        guessesLeftText.text(guessesLeft);
        guessedLetters = [];
        updateGuessesSoFar();  
        console.log(randLetter);
      });

   // reset when letter guessed or exceeds guess limit of 9
      function reset() {
        randLetter = letters [Math.floor(Math.random() * letters.length)]; 
        guessesLeft = 9;
        guessesLeftText.text(guessesLeft);
        console.log(randLetter);    
      }   
      
    //--------------------------------------------------------------------------------
      
    $(document).ready(function() {
        reset();

    // user presses a key to guess letter
        document.onkeyup = function(event) {
            var userGuess = event.key.toLowerCase();
            //userGuessText.text(userGuess);
            guessedLetters.push(userGuess);
        
                      if (userGuess === randLetter) {
                          winCount++;
                          winsText.text(winCount);
                          guessedLetters = [];
                          updateGuessesSoFar(); 
                          reset();
                          console.log("correct")
                      }   

                      else if (userGuess != randLetter) {
                          guessesLeft--;
                          guessesLeftText.text(guessesLeft);  
                          updateGuessesSoFar(); 
                          console.log("incorrect")
                      }    
                                    
                      if (guessesLeft === 0){
                          lossCount++;
                          lossesText.text(lossCount);
                          guessedLetters = [];
                          updateGuessesSoFar(); 
                          reset();
                          console.log("loss")
                      }  
                             
            } 
    });        


              
                  
              
              
              
 
 
 
 