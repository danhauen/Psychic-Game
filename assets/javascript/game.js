  // letter array
  var letters = ['a',"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // Random letter generator
  var randomLetter = Math.floor(Math.random() * letters.length);
  // Guessed letter 
  var letterGuess = document.getElementById("letter-guess")
  
  // wins++1
  
  // losses++1
  
  //var guess = event.key;
  
  //var guessesLeft = 10;

  $("button").click (function() {
    console.log("play pressed");
  });
  
  document.getElementById("button").addEventListener("click", function() {
      // Random letter generator
      
      console.log("randomLetter");
  }
  
  //document.onkeyup = function(event) {
      //letterGuess.textContent = event.key.toLowerCase();{
      // Each time the user guesses a letter the guesses remaining goes down by 1.
      //guessesLeft -=1;
       // }
    
    // If letter is correctly picked, run the following
        //if (letterGuess === randomLetter) {
          //  console.log("correct letter");
            //clear and start over 

    // If letter is not picked, run the following functions/methods.
       // }else if (letterGuess == randomLetter);{
         //   console.log("wrong!");
          
    //not a letter
       // }
    
     
    
  