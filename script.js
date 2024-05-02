let title = document.getElementById("title");
let titleText = "Keller";
let LetterId = 0;


const titreEffect = setInterval(function () {
    title.textContent += titleText[LetterId];
    LetterId++;

    if (LetterId >= titleText.length) {
        clearInterval(titreEffect);
    }
}, 300);

titreEffect;



// Exercice 2
let secondeTitle = document.getElementById("time");
let secondeOnPage = 0;

const timeOnPage = setInterval(function () {
    secondeOnPage++;

    let minute = Math.floor(secondeOnPage / 60);
    let second = secondeOnPage - (60 * minute);
    secondeTitle.textContent = (minute > 0 ? minute + " minute " : "") + (minute > 0 && second > 0 ? "and " : "") + (second > 0 ? second + " second " : "") + "has passed"
}, 1000);

timeOnPage;


// tape-taupe
let grp = [];
let TaupeId = 0;
let ligne = document.getElementsByClassName('gameLigne')
let rand = 0;
let score = 0;
let taupe;

function ct() {
    changeTaupe();
}


const Tape = (e) => {
    if (e.target.id == rand) {
        score++;
        document.getElementById("score").textContent = "score: " + score;

        clearInterval(taupe);
        changeTaupe();
        taupe = setInterval(ct, 2000);
    }
}

for (const x of ligne) {
    for (const i of x.childNodes) {
        if (i.nodeName == "TD") {
            i.id = TaupeId;
            i.addEventListener("click",Tape)
            grp.push(i);
            TaupeId++;
        }
    }
}


function changeTaupe() {
    let difrand = Math.floor(Math.random() * grp.length);
    while (rand === difrand) {
        console.log(rand, difrand);
        difrand = Math.floor(Math.random() * grp.length);
    } 
    rand = difrand;

    for (const x of grp) {
        if (x.id == rand) {
            x.style = "transition: background-color 0.5s ;background-color: rgb(0,150,0)";
        } else {
            x.style = "transition: background-color 0.25s ;background-color: none";
        }
    }
}


changeTaupe()
taupe = setInterval(ct, 2000);
