$(document).ready(function(){
  var myArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8 ];
  function shuffleArray() {
       // Loop through each item in the array
      // Set i equal to the length of the array -1 to account for the index starting at 0. Then decrement i until i is greater than or equal to 0.
    for (var i = myArray.length-1; i >=0; i--) {
           // Set the randomIndex value to the current Index position or below. Since we are going in order from right to left.
      var randomIndex = Math.floor(Math.random()*(i+1)); 
      var itemAtIndex = myArray[randomIndex]; 
      // Set the Array value at randomIndex to the current i value
      myArray[randomIndex] = myArray[i];
      
      // Set current loop index value to be the value of the random index.        
      myArray[i] = itemAtIndex;  
    }
  }

  $('#new_game').click(function(e){
    e.preventDefault();
    shuffleArray();
    console.log(myArray);
    var tdCells = $("td").find("span");
    for (var i = myArray.length - 1; i >=0; i--) {
      $(tdCells[i]).html(myArray[i]);
    }
  });

  $("td").click(function(e){
    $(this).children("span").toggleClass('hide');
  });

});

// make a function that takes in the id of the td
// toggles the class on the span

// through that function in the click