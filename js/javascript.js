var test10 = wordsArray[Math.floor((Math.random() * wordsArray.length) + 0)];
var test11 = Array.from(test10);
console.log(test10);
console.log(test11);

var container = document.getElementById("container");

var inputs = document.createElement("div");
inputs.id =  "inputs";

container.appendChild(inputs);

var words = document.createElement("p");
words.innerHTML = "Welkom bij lingo!";

inputs.appendChild(words);

var checkLetter = document.createElement("p");
checkLetter.innerHTML = "Check letter:";

inputs.appendChild(checkLetter);

var input2 = document.createElement("input");
input2.id = "input2";input2

inputs.appendChild(input2);

var uitkomst = document.createElement("div");
uitkomst.id = "uitkomst";

container.appendChild(uitkomst);

var CheckButton = document.createElement("button");
CheckButton.id = "Cb";
CheckButton.style.position = "absolute";
CheckButton.style.top = "121px";
CheckButton.style.right = "450px";

CheckButton.onclick = Check;

inputs.appendChild(CheckButton);
CheckButton.innerHTML = "Check!";
    for (var i = 1; i <= 5; i++) {
        var woordDiv = document.createElement("div");
        woordDiv.id = "letter" + i;
        woordDiv.classList.add('row')
        woordDiv.innerHTML = ' ';
        woordDiv.style.width = "50%";
        woordDiv.style.margin = "0 auto";

        for (var j = 1; j <= 5; j++) {
            var test = document.createElement("div");
            test.id = "KURK" + i + j;
            woordDiv.appendChild(test);
        }
        uitkomst.appendChild(woordDiv);
    }
    var rij = 1

document.getElementById('KURK' + rij + 1).innerHTML = test11[0];
function Check() {
    var woord = test10;
    var letters = document.getElementById("input2").value;
    var arrayWoord = woord.split("");
    var arrayLetters = letters.split("");

    for (var i = 0; i < arrayWoord.length; i++) {
        document.getElementById('KURK' + rij + (i + 1)).innerHTML = letters[i];
        if (arrayLetters[i] == arrayWoord[i]) {
            document.getElementById('KURK' + rij + (i + 1)).style.backgroundColor = 'green';
        } else {
            document.getElementById('KURK' + rij + (i + 1)).style.backgroundColor = 'red';
        }
    }
    if (woord === letters) {
        setTimeout(function () {
            var gewonnen = confirm("U heeft gewonnen! Wilt u nog een keer spelen?");
            if (gewonnen) {
                window.location = window.location
            }
        },100)
    } else {
        for (var i = 0; i < arrayWoord.length; i++) {
            if (document.getElementById('KURK' + rij + (i + 1)).style.backgroundColor == 'red') {
                var position = arrayWoord.indexOf(letters[i])
                console.log(position)
                if (position > -1) {
                    document.getElementById( 'KURK' + rij + (i + 1)).style.backgroundColor = "yellow";
                    document.getElementById('KURK' + rij + (i + 1)).style.borderRadius = "50%";
                }
            }
        }
        rij++
        if (rij == 6) {
            var verloren = confirm("U heeft verloren... Wilt u het nog een keer proberen?");
            if (verloren) {
                window.location = window.location;
            }
        }
                document.getElementById('KURK' + rij + 1).innerHTML = test11[0];
        }
}