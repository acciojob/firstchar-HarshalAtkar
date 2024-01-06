function firstChar(text) {
  // your code herefunction firstChar(inputString) {
    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        if (char !== ' ') {
            return char;
        }
    }
    return ''; // If all characters are spaces

}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
