const target_text = document.getElementById("target_text");
const phrases = ["Indie Game Developer", "Front-end Developer", "College Student"];

var currentPhrase = 0;
var currentChar = 0;
var forward = true;
var delay = 75;

function UpdateText() {
    if (forward) {
        if (currentChar < phrases[currentPhrase].length) {
            target_text.innerHTML += phrases[currentPhrase].charAt(currentChar);
            currentChar++;
        }
        else if (currentChar == phrases[currentPhrase].length) {
            delay = 2000;
            forward = false;
            
            currentPhrase += 1;
            if (currentPhrase > phrases.length-1) { currentPhrase = 0; }
        }
    }

    else {
        if (currentChar >= 0) {
            delay = 75;
            var currentText = target_text.innerHTML;
            target_text.innerHTML = currentText.slice(0, currentChar);
            if (target_text.innerHTML.length == 0) target_text.innerHTML = "‎ ";

            currentChar -= 1;
        }
        else {
            forward = true;
        }
    }
    
    setTimeout(UpdateText, delay); 
}

UpdateText();
