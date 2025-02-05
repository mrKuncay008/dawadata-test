function proccesString(input) {
    let lowerCase = input.replace(/\s+/g, '').toLowerCase();

    let vowels = 'aeiou';

    let vowelChars = '';
    let consonantChars = '';

    for (let i = 0; i < lowerCase.length; i++) {
        if (vowels.includes(lowerCase[i])) {
            vowelChars += lowerCase[i];
        } else {
            consonantChars += lowerCase[i];
        }
    }

    console.log("Vowel characters is:");
    console.log(vowelChars);

    console.log("Consonant Character is:");
    console.log(consonantChars);
}

// Input = Sample case
console.log("it's input ;Sample case");
let input = "Sample case";
proccesString(input);
console.log("====================================\n");
console.log("it's input ;Next Case");
let inputNext = "Next Case";
proccesString(inputNext);