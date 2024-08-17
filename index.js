var timer = 60;
var score = 0;
var Hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#ScoreVal").textContent = score;
}

function getNewHit() {
  Hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#HitVal").textContent = Hitrn;
}

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 176; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}

var endtimer = setInterval(function () {
  if (timer > 0) {
    timer--;
  } else {
    clearInterval(endtimer);
    document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
  }

  document.querySelector("#runtimer").textContent = timer;
}, 1000);

document.querySelector("#pbottom").addEventListener("click", function (dets) {
  var clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === Hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
getNewHit();