// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// This was very useful!
// https://stackoverflow.com/questions/1206911/why-do-i-need-to-add-g-when-using-string-replace-in-javascript
// example
// let str = 'JS will, JS will rock you!';
// let newStr = str.replace(/JS/g,'JavaScript');

// Start by creating a function that takes in a string
// I think there are many many ways to solve this problem. I could use a map or a for loop. I could also do if/else statements or use .replace.
var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// Start by creating a function that takes in a string
const secretMessage = (string) => {
    // use the .replace method to substitute a for 4, e for 3, i for 1 and o for 0 here
    return string.replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0")
}

// console.log(secretMessage(secretCodeWord1));
// console.log(secretMessage(secretCodeWord2));

// Even though the function above works, Rachael mentioned that we should use higher order functions whenever we have a chance. 
// Start by creating a function that takes in a string

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// Start by creating a function that takes in a string
const secretMessageTwo = (string) => {
// Now create a local variable and use .split in order to split the string and map over it
    newString = string.split("")
    // we need to create a second variable in order to use .map
    var secretString = newString.map(value =>{
        // If else statements to set letters a/e/i/o to numbers
        if(value === 'a'){
            return value = 4
        }else if(value === 'e'){
            return value = 3
        }else if(value === 'i'){
            return value = 1
        }else if(value === 'o'){
            return value = 0
        } else {
            return value = value
        }
    })
    // return back our function and use .join to join our string back
    return secretString.join(" ")
}
// console.log(secretMessageTwo(secretCodeWord1));
// console.log(secretMessageTwo(secretCodeWord2));



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"


// Start by creating a function that takes in an array and returns words containing letter a
const letterA = (array) =>{
    // create a local variable and start filtering our array and using .includes in order to isolate words that include the letter "a"
    newArr = array.filter(value => value.includes("a") || value.includes("A"))
    // return the function, .join us not really needed, 
    return newArr.join(" ")
}
// console.log(letterA(arrayOfWords));

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true
var hand5 = [3, 2, 2, 3,3]
// STRETCH:
var hand5 = ["K", 5, "K", 5, "K"]
// Expected output: true
var hand6 = ["A", "Q", "A", 5, 3]
// Expected output: false

// // Start by creating a function that takes in array
const fullHouse = (arr) => {
    // Sort the array in order
    let orderArr = arr.sort((a,b)=>a-b)
    // Check to see if the values are equal to one another 0-2 and 3-4  0-1 and 2-4
    if (orderArr[0] === orderArr[1] && orderArr[0] === orderArr[2] && orderArr[3] === orderArr[4]) {
      return true
    } else if (orderArr[0] === orderArr[1] && orderArr[2] === orderArr[3] && orderArr[2] === orderArr[4]) {
      return true
    }
      else return false
    } 
//   console.log(fullHouse(hand1));
//   console.log(fullHouse(hand2));
//   console.log(fullHouse(hand5));