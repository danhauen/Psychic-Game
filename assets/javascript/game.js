 
  // creates an array for computer choice
  var computerChoices = ["a","b","c","d","e","f","g","h","i","j","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
  // starts wins and losses at zero
  var wins = 0;
  var losses = 0;
  // starts initial guess amount at 5
  var guessesLeft= 5;

  // Starts and resets game
  $( "button" ).click(function() {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    wins = 0;
    losses = 0;
    guessesLeft= 5;
    console.log(computerGuess);
  });

  document.onkeyup = function(event) {

    var userChoiceText = document.getElementById("userchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guessesLeft-text");
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var userGuess = event.key;
    
    var resetGuesses = function () {
           

    }
      

    if (userGuess === computerGuess) {
            wins++;
            resetGuesses();

        }
           else if (guessesLeft == 0) {
            losses++
            resetGuesses();                      
        }
            console.log(guessesLeft);



      userChoiceText.textContent = userGuess;
      winsText.textContent =  wins;
      lossesText.textContent =  losses;
      guessesText.textContent =  guessesLeft;

      }
    
 
 
 
 
 
 
 // letter array
  //var letters = ['a',"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  // Random letter generator
  //function getItem(){
    //document.getElementById("letterGuess").innerHTML = letters[Math.floor(Math.random() * letters.length)];
    //console.log(randomLetter);
    
 // }); 
  
  //$("button").click (
   // console.log("play pressed");
  //document.onkeyup = function(event) {
    //letterGuess.textContent = event.key.toLowerCase();{
    // Each time the user guesses a letter the guesses remaining goes down by 1.
    //guessesLeft -=1;
  //}
  
  //if (guessesLeft === -1) {
    //alert("You Loose!");
  //}
  
  // wins++1
  
  // losses++1
  
  //var guess = event.key;
  
 

  //document.getElementById("button").addEventListener("click", function() {
      // Random letter generator-reset stats
      
  //}
  
  
    
    // If letter is correctly picked, run the following
        //if (letterGuess === randomLetter) {
          //  console.log("correct letter");
            //Press play to start again

    // If letter is not picked, run the following functions/methods.
       // }else if (letterGuess == randomLetter);{
         //   console.log("wrong!");
          
    //not a letter
       // }
    
     
    
  //}