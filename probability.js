let trialsRequested = 100;


function dice(ank) {
  let success = 0;
  for (let trial = 0; trial < trialsRequested; trial++) {
    if (ank.includes(`${randomInteger(5) + 1}`)) {
      success++;
    } //get a random integer 1-6 check if we got a number of the list we are looking

  }
  return `we noticed success in our trial in  ${((success/trialsRequested)*100).toPrecision(4)}% cases.<br>
          in ${success} out of ${trialsRequested}  ${randomise("dice throws","rolls","trials","observations")} we got ${ank}.`

}

function diceShows() {
  let numberTracked = ((prompt('Digit(s) you want to track on your dice [1-6]')).split(","));
  // if (!(numberTracked < 7 && numberTracked > 0 && Number.isInteger(numberTracked))) {
  //   document.getElementById("warning").innerHTML = "This dice will only show Natural numbers 1 to 6 ";
  // }
  document.getElementById("a").innerHTML = (dice(numberTracked))
}

function coin() {
  let head = 0;
  let tail = 0;
  for (let trial = 0; trial < trialsRequested; trial++) {
    if (Math.random() < 0.5) {
      head++
    }
    else {
      tail++
    }
  }
  return `out of ${trialsRequested} flips we have got ${head} heads and ${tail} tails.
so ${((head/trialsRequested)*100).toPrecision(4)}% times it was head and remaining ${((tail/trialsRequested)*100).toPrecision(4)}% times tail flipped up. `
};

function coinShow() {
  document.getElementById("a").innerHTML = (coin())
}

function setTrial() {
  trialsRequested = document.getElementById("trialRequested").value || 100;
  document.getElementById("a").innerHTML=`trials to be performed changed successfully to ${trialsRequested}`
}
function diceUse(){
  document.getElementById("diceResult").innerHTML="DICE IS ROLLING";
  document.getElementById("diceUse").disabled=true
  setTimeout(() => {
    showDiceResult();
    document.getElementById("diceUse").disabled=false
  }, 1500);

  function showDiceResult() {
    let result = randomInteger(5) + 1;
    document.getElementById("diceResult").innerHTML = `DICE SHOWS : ${result}`;
    document.getElementById("diceface").setAttribute("src", `dicefaces/dice${result}.png`);
  }
}
function coinUse(){document.getElementById("coinResult").innerHTML="Coin Is In the Air";
document.getElementById("coinUse").disabled=true;
setTimeout(() => { if(Math.random()<.5){document.getElementById("coinResult").innerHTML="It's a Head"}
else{document.getElementById("coinResult").innerHTML="It's a Tail"}
document.getElementById("coinUse").disabled=false
}, 1000);
 }

function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1))
} //random integer 0 to n
function randomise() {
  var n = arguments.length;
  const index = Math.floor(Math.random() * n);
  return arguments[index]
} //returns a random argument
