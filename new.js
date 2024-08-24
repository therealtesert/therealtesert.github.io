// script.js

// Function to get the Unix timestamp
function getUnixTimestamp() {
  return Math.floor(Date.now() / 1000);
}

// Update the timestamp every second
setInterval(function() {
  // Get the timestamp
  const timestamp = getUnixTimestamp();

  // Update the paragraph element with the timestamp
  document.getElementById("timestamp").textContent = "Current Unix Timestamp: " + timestamp;
}, 1000);

const button = document.querySelector('button');
const input = document.getElementById('b14');
const resultParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const base10 = parseInt(input.value, 10);
  const base14 = base10.toString(14);
  resultParagraph.textContent = `base 14 number: ${base14}`;
});