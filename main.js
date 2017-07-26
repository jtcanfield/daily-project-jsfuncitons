// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
  if (num1 === num2){
    return "Numbers are equal"
  } else if (num1 > num2){
    return num1
  } else if (num2 > num1){
    return num2
  } else {
    return "Numbers are Invalid"
  }
}
console.log(max(4, 5));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
  return "The largest of the three numbers is " + Math.max(num1, num2, num3);//Math.max returns the largest of a list of numbers
}
console.log(maxOfThree(6, 8, 2));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(character){
    let char = character.toLowerCase();
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
      return true
    } else {
      return false
    }
}
console.log(isVowel("a"));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2){
  if (arguments.length !== 2){
    return "This argument only takes 2 numbers"
  } else if (typeof num1 !=='number' || typeof num2 !=='number'){
    return "This argument only takes numbers"
  } else if (num1, num2){
    return "The sum of the two numbers is " + (num1 * num2)
  } else {
    return "Invalid"
  }
}
console.log(sum(3, 4));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(num1, num2, num3){
  if (arguments.length !== 3){
    return "This argument only takes 3 numbers"
  } else if (typeof num1 !=='number' || typeof num2 !=='number' || typeof num3 !=='number'){
    return "This argument only takes numbers"
  } else if (num1, num2, num3){
    return "The Average of the three numbers is " + (num1 * num2 * num3)
  } else {
    return "Invalid"
  }
}
console.log(avg(2, 4, 8));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(string){
  if (typeof string !=='string'){
    return "This is not a string"
  } else {
    return "The String is " + string.length + " characters long."
  }
}
console.log(getLength("hello there"));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(num1, num2){
  if (num1 === num2){
    return "Numbers are equal"
  } else if (num1, num2){
    return "The greatest parameter is " + Math.max(num1, num2);
  } else {
    return "Numbers are Invalid"
  }
}
console.log(greaterThan(7, 9));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){
  return "Hello, " + name + "!"
}
console.log(greet("Jonathan"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
