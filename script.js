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

function decimalToBase14(decimalNum) {
  if (decimalNum === 0) {
    return "0";
  }

  const base14Digits = "0123456789ABCDEF";
  let result = "";

  while (decimalNum > 0) {
    let remainder = decimalNum % 14;
    result = base14Digits[remainder] + result;
    decimalNum = Math.floor(decimalNum / 14);
  }

  return result;
}

// Example usage:
const decimalNumber = 2048;
const base14Number = decimalToBase14(decimalNumber);
console.log(`Decimal ${decimalNumber} in base 14 is: ${base14Number}`);