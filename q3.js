
// **Problem Statement**#Write a function that takes a variable testVariable, 
// which contains a string, and checks whether or not it is a palindrome.
// *What is a “Palindrome”?*#A Palindrome is a string that reads the same backward and forwards. 
// For example madammadam, poppop, etc. All strings with length 11 are considered palindromes.
// Remember, lower case letters are different from upper case letters, therefore, AdaAda is not a palindrome.**Input**#A variable testVariable containing a string.**Output**#true if the input string is a palindrome. false if the string is not a palindrome.Sample Input#"madam"Sample Output#true


// take input
const string =('madam');

// call the function
const value = checkPalindrome(string);

function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}



console.log(value);