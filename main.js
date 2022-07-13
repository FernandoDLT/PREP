// PREP
// Take in a word - palindrome
// return a boolean
// racecar => true
// bob -> true
// brirthday => false

// function isPalindrome(word) {
// // reverse the word
// // compare the original word to the reversed
// let wordReverse = word.split('').reverse().join("")
// return word === wordReverse


// //clean code
// function isPalindrome(word) {
//     return word === word.split("").reverse().join("")
// }
// }
const isPalindrome = word => word.split("").reverse().join("")

console.log(isPalindrome("racecar"), true)
console.log(isPalindrome("bob"), true)
console.log(isPalindrome("birthday"), false)

