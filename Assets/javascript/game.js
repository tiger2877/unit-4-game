
  
  /*-- JAVASCRIPT  -->
  <!-- ================================================================ -->
  <!-- The number on each pokemon is randomly generated between 1 and 12-->
  <!-- Each pokemon value will be added to the user total               -->
  <!-- The target number is randomly generated between 19 and 120       -->
  <!-- If user total matches target number then add wins else lose      -->
  <!-- ================================================================ -->*/
 
  // Creating variables to hold the number of wins and loses. They start at 0.
  var wins = 0;
  var losses = 0;

  var myPokemon = ["charmander","pikachu","squirtle","bulbasaur"];

  var targetNumber= Math.floor(Math.random() * 120) +1; //to randomize target number with Math.floor(Math.random() * ((y-x)+1) + x);
   
  $("#guess").text(targetNumber);

// Function that initializes the game.

 function startUp()
 {
      targetNumber= Math.floor(Math.random() * 120) +1; //to randomize target number with Math.floor(Math.random() * ((y-x)+1) + x);

      counter = 0;
     
 // For each iteration, generate a new random number between 1 and 12.
    //  for (i=0; i <= myPokemon.length; i++){
        //  var pokemonValue= Math.floor(Math.random() * 12) + 1;
         var pokemonValue1 = Math.floor(Math.random() * 12) +1;
         var pokemonValue2 = Math.floor(Math.random() * 12) +1;
         var pokemonValue3 = Math.floor(Math.random() * 12) +1;
         var pokemonValue4 = Math.floor(Math.random() * 12) +1;
         // console.log(pokemonValue1);
         // console.log(pokemonValue2);
         // console.log(pokemonValue3);
         // console.log(pokemonValue4);
         
        // update the html
        $('#wins').text(wins);
        $('#losses').text(losses);
        $("#guess").text(targetNumber);
        $('#counter').text(counter);

         // Each imageCrystal will be given a data attribute called data-pokemonValue.
         // This data attribute will be set equal to the array value.
 
         $(".pokemon1").attr("data-pokemonvalue", pokemonValue1);
         $(".pokemon2").attr("data-pokemonvalue", pokemonValue2);
         $(".pokemon3").attr("data-pokemonvalue", pokemonValue3);
         $(".pokemon4").attr("data-pokemonvalue", pokemonValue4);
          

    //      // add the data-pokemonvalue to each pokemon div
    //      $('.pokemon' + i).attr('data-pokemonvalue', pokemonValue);
    //  }
 } 

 startUp();
     
 console.log(targetNumber);

   // This time, our click event applies to every single pokemon on the page. Not just one.
     $(".pokemon-image").on("click", function() {
 
         // Determining the pokemon's value requires us to extract the value from the data attribute.
         // Using the $(this) keyword specifies that we should be extracting the pokemon value of the clicked pokemon.
         // Using the .attr("data-pokemonvalue") allows us to grab the value out of the "data-pokemonvalue" attribute.
         // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
         var userValue = ($(this).attr("data-pokemonvalue"));
       
         userValue  = parseInt(userValue);
         
         // We then add the pokemonValue to the user's "counter" which is a global variable.
         // Every click, from every pokemon adds to the global counter.
         counter += userValue;
         
         $("#counter").text(counter);
         // All of the same game win-lose logic applies. So the rest remains unchanged.
        //  alert("New score: " + counter);
         console.log(targetNumber);

         if (counter === targetNumber) {
             wins++;
             $("#wins").text(wins);
             $("#message").text("You win!");
             startUp();
         }
 
         else if (counter >= targetNumber) {
             losses++;
             $("#losses").text(losses);
             $("#message").text("You lose! Looks like you collected too many crystals.");
             startUp();
         }
     })
