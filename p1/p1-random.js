/*
    CIT 281 Project 1
    Name: Nakisha Lin
*/

// Define the lowercase alphabet first 
let alphabet = "abcdefghijklmnopqrstuvwxyz";
// Set the string of random length between 5 - 25 characters
let random = alphabet.slice (getRandomInteger(5,25));
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(random);