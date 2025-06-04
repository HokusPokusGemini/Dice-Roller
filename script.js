function rollDice() {

  const numOfDice = document. getElementById("numOfDice").value;
  const diceResult = document. getElementById("diceResult");
  const values = [];

  for(let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
  }

  if (numOfDice) {
  diceResult.textContent = `?? dice: ${values.join(', ')}`;
  } else {
    diceResult.textContent = `Add a number!`;
  }
}

function clear() {
  document.getElementById("diceResult").innerHTML="";
}

document.getElementById("b2").addEventListener("touchend", clear);
