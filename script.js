function getUnixTimestamp() {
  return Math.floor(Date.now() / 1000);
}

setInterval(function() {
  const timestamp = getUnixTimestamp();

  document.getElementById("timestamp").textContent = "Current Unix Timestamp: " + timestamp;
  document.getElementById("cooldown").textContent = "until y2k38: " + (2147483647-timestamp);
}, 1000);

const button = document.querySelector('button');
const input = document.getElementById('b14');
const resultParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const base10 = parseInt(input.value, 10);
  const base14 = base10.toString(14);
  document.getElementById("be14").textContent = `base e number: ${base14}`;
});
