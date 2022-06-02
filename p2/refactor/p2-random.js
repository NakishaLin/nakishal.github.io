/*
    CIT 281 Project 2
    Name: Nakisha Lin 
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";
let lengthOfOutputString = getRandomInteger(5, 26);

for (let i = 0; i < lengthOfOutputString; i++) {
    result += alphabet[getRandomInteger(0,alphabet.length)];
}


/*function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }
*/

console.log(result);
//console.log(getRandomLetter())



//return a single, random, lowercase letter.
const characters ='abcdefghijklmnopqrstuvwxyz';
function getRandomLetter() {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < 1; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(getRandomLetter());

//return the random length string
function getRandomString(minLength, maxLength){
    let result ='';
    let randomString = getRandomInteger(minLength, maxLength);
    for (let i=0; i <randomString; i++){
        result += getRandomLetter();
    }
    return result;

} 
console.log(getRandomString(10,20));


//return a string in ascending order (i.e., xpacd would return acdpx)

//this is the one with the constrain 
/*function getSortedString(string){
    return string.split('').sort().join('');
}
console.log(getSortedString("xpacd"));
*/

// do the one without the constrain 
function getSortedString(){
    return getRandomString(10,20).split('').sort().join('');
}
console.log(getSortedString());
