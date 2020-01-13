var container = document.getElementById("container");

var inputs = document.createElement("div");
inputs.id =  "inputs";

container.appendChild(inputs);

var words = document.createElement("p");
words.innerHTML = "Words:";

inputs.appendChild(words);

var input1 = document.createElement("input");
input1.id = "input1";

inputs.appendChild(input1);

var checkLetter = document.createElement("p");
checkLetter.innerHTML = "Check letter:";

inputs.appendChild(checkLetter);

var input2 = document.createElement("input");
input2.id = "input2";

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
        woordDiv.innerHTML = ' ';
        woordDiv.style.width = "50%";
        woordDiv.style.margin = "0 auto";

        for (var j = 1; j <= 5; j++) {
            var test = document.createElement("DIV");
            test.id = "KURK" + i + j;
            woordDiv.appendChild(test);
        }
        uitkomst.appendChild(woordDiv);
    }
    var rij = 1

function Check() {
    var woord = document.getElementById("input1").value;
    var letters = document.getElementById("input2").value;
    var arrayWoord = woord.split("");
    var arrayLetters = letters.split("");

    // goed of fout loop (plaats)
    for (var i = 0; i < arrayWoord.length; i++) {
        document.getElementById('KURK' + rij + (i + 1)).innerHTML = letters[i];
        if (arrayLetters[i] == arrayWoord[i]) {
            document.getElementById('KURK' + rij + (i + 1)).style.backgroundColor = 'green';
        } else {
            document.getElementById('KURK' + rij + (i + 1)).style.backgroundColor = 'red';
        }
    }
    if (woord === letters) {
        var accepteren = confirm("U heeft gewonnen! Wilt u nog een keer spelen?");
        if (accepteren){
            window.location = window.location;
        }
    } else {
        for (var i = 0; i < arrayWoord.length; i++) {
            if (document.getElementById('KURK' + rij + (i + 1)).style.backgroundColor == 'red') {
                var position = arrayWoord.indexOf(letters[i])
                console.log(position)
                if (position > -1) {
                    document.getElementById('KURK' + rij + (i + 1)).style.backgroundColor = "yellow";
                    document.getElementById('KURK' + rij + (i + 1)).style.borderRadius = "50%";
                }
            }
        }
        rij++
    }
}



    // button.onclick = function () { window.location = window.location };