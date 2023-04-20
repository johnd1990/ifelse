/*
Is Truthy Pseudocode:
    Define a function called checkTruthy that takes one parameter called value.
    Print a message that says "Input: " followed by the value of value.
    Use an if/else statement to check if value is truthy or falsy.
    If value is truthy, print a message that says "Output: true".
    If value is falsy, use another if/else statement to check what type of falsy value it is.
    Depending on the type of falsy value, print the corresponding message:
    a. If value is false, print "Output: The boolean value false is falsy".
    b. If value is null, print "Output: The null value is falsy".
    c. If value is undefined, print "Output: undefined is falsy".
    d. If value is 0, print "Output: The number 0 is falsy (the only falsy number)".
    e. If value is an empty string, print "Output: The empty string is falsy (the only falsy string)".
    Call the checkTruthy function with each of the input values and verify that it outputs the expected results.
*/
console.log("Block 13 Workshop: If/Else")
console.log("******************************************************")
console.log("Is Truthy:")
console.log("");

function checkTruthy(inputValue) {
    console.log("Input: " + inputValue);
    if (inputValue) {
        console.log("Output: true");
    } else if (inputValue === false) {
        console.log("Output: The boolean value false is falsy");
    } else if (inputValue === null) {
        console.log("Output: The null value is falsy");
    } else if (inputValue === undefined) {
        console.log("Output: undefined is falsy");
    } else if (inputValue === 0) {
        console.log("Output: The number 0 is falsy (the only falsy number)");
    } else if (inputValue === "") {
        console.log("Output: The empty string is falsy (the only falsy string)");
    }
}

// Test cases
checkTruthy("I am a string"); // true
checkTruthy(false); // "The boolean value false is falsy"
checkTruthy(null); // "The null value is falsy"
checkTruthy(undefined); // "undefined is falsy"
checkTruthy(0); // "The number 0 is falsy (the only falsy number)"
checkTruthy(""); // "The empty string is falsy (the only falsy string)"


/*
Number Line Pseudocode:
    Define a function checkSum that takes two parameters, num1 and num2.
    Add num1 and num2 and assign the result to the variable sum.
    Print a message indicating which sum is being checked, including num1 and num2.
    If sum is greater than 100, print a message indicating that it is greater than 100.
    If sum is greater than 0 and not greater than 100, print a message indicating that it is greater than 0.
    If sum is equal to 0 and not greater than 0, print a message indicating that it is equal to 0.
    If sum is less than -1000 and not equal to 0, print a message indicating that it is less than -1000.
    If sum is not greater than 100, not greater than 0, not equal to 0, and not less than -1000, print a message indicating that it is a negative number.
    Call checkSum with 50 and 51 as arguments, printing a message checking the sum of 50 and 51.
    Call checkSum with 99 and -2 as arguments, printing a message checking the sum of 99 and -2.
    Call checkSum with 0 and 101 as arguments, printing a message checking the sum of 0 and 101.
    Call checkSum with 500 and -500 as arguments, printing a message checking the sum of 500 and -500.
    Call checkSum with -1000 and 0 as arguments, printing a message checking the sum of -1000 and 0.
    Call checkSum with -5 and 0 as arguments, printing a message checking the sum of -5 and 0.
*/
console.log("******************************************************")
console.log("Number Line:")
console.log("");

function checkSum(num1, num2) {
    let sum = num1 + num2;
    console.log("Checking sum of " + num1 + " and " + num2 + "...");
    if (sum > 100) {
        console.log(sum + " is greater than 100\n");
    } else if (sum > 0) {
        console.log(sum + " is larger than 0\n");
    } else if (sum == 0) {
        console.log(sum + " is equal to 0\n");
    } else if (sum < -1000) {
        console.log(sum + " is less than -1000\n");
    } else {
        console.log(sum + " is a negative number\n");
    }
}

// Sum Tests
checkSum(50, 51); // Checking sum of 50 and 51... 101 is greater than 100
checkSum(99, -2); // Checking sum of 99 and -2... 97 is greater than 0
checkSum(0, 101); // Checking sum of 0 and 101... 101 is greater than 100
checkSum(500, -500); // Checking sum of 500 and -500... 0 is equal to 0
checkSum(-1000, 0); // Checking sum of -1000 and 0... -1000 is a negative number
checkSum(-5, 0); // Checking sum of -5 and 0... -5 is a negative number

/*
Greater than 5 Pseudocode:
    Define a function called checkGreaterEqual5 that takes two parameters a and b.
    Check if both a and b are greater than or equal to 5.
    If both a and b are greater than or equal to 5, print a message indicating that it is true.
    If either a or b is not greater than or equal to 5, print a message indicating that it is false.
    Call the checkGreaterEqual5 function with different sets of parameters.
    Define a function called comparePairs that takes four parameters param1A, param1B, param2A, and param2B.
    Print a message indicating that we are comparing two pairs of values.
    Check if either param1A and param1B or param2A and param2B is truthy.
    If either of the pairs is truthy, print true.
    If neither of the pairs is truthy, print false.
    Call the comparePairs function with different sets of parameters.
*/
console.log("******************************************************")
console.log("Greater Than Or Equal To 5:")
console.log("");

function checkGreaterEqual5(a, b) {
    if (a >= 5 && b >= 5) {
        console.log(a + " and " + b + " are both greater or equal to 5: true");
    } else {
        console.log(a + " and " + b + " are not both greater or equal to 5: false");
    }
}

checkGreaterEqual5(5, 6);
checkGreaterEqual5(10, 11);
checkGreaterEqual5(0, 0);
checkGreaterEqual5(1000, -1000);
checkGreaterEqual5(6, 4);
checkGreaterEqual5(5, 5);

console.log("******************************************************")
console.log("Pair and Compare:")
console.log("");

/*
Pair and Compare Pseudocode:
    Define a function called checkGreaterEqual5 that takes two parameters a and b.
    If a is greater than or equal to 5 AND b is greater than or equal to 5:
    Print a message indicating that both a and b are greater than or equal to 5, and print true.
    Else:
    Print a message indicating that both a and b are not greater than or equal to 5, and print false.
    Call the checkGreaterEqual5 function with different sets of parameters.
    Define a function called comparePairs that takes four parameters param1A, param1B, param2A, and param2B.
    Print a message indicating that we are comparing two pairs of values.
    If either param1A and param1B or param2A and param2B is truthy:
    Print true.
    Else:
    Print false.
    Call the comparePairs function with different sets of parameters.
*/
function comparePairs(param1A, param1B, param2A, param2B) {
    console.log(`Comparing (${param1A}, ${param1B}) and (${param2A}, ${param2B})`);
    if (param1A && param1B || param2A && param2B) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log('\n');
}

// Test cases
comparePairs("cat", "cat", 6, "6"); // true
comparePairs("five", 5, "dog", "dawg"); // false
comparePairs(0, false, "horse", "horse"); // true
comparePairs("eight", "eight", "ate", "ate"); // true
comparePairs(11, "eleven", "four", "for"); // false
comparePairs("cake", "cake", "pie", "pie"); // true

console.log("******************************************************")