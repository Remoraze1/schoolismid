// Array of texts to display
const texts = [
  'BallsyG!',
  'BallstyG for justice!',
  'A dozen a dime',
  'ballsyG, the newest concrete type!'
  'github is unblocked on fortigard i think'
  'BallsyG is unblocke'
];

// Initial index for rotating text
let index = 0;

// Function to change text every 10 seconds
function changeText() {
  document.getElementById('text-display').innerText = texts[index];
  index = (index + 1) % texts.length; // Loop back to start when the end is reached
}

// Call the function every 10 seconds
changeText(); // Initial call to show the first text immediately
setInterval(changeText, 10000); // Change every 10,000 milliseconds (10 seconds)
