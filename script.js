function getUnixTimestamp() {
  return Math.floor(Date.now() / 1000);
}

setInterval(function() {
  const timestamp = getUnixTimestamp();

  document.getElementById("timestamp").textContent = "Current Unix Timestamp: " + timestamp;
}, 1000);

const button = document.querySelector('button');
const input = document.getElementById('b14');
const resultParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const base10 = parseInt(input.value, 10);
  const base14 = base10.toString(14);
  document.getElementById("be14").textContent = `base 14 number: ${base14}`;
});
