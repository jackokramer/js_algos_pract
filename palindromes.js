// Palindromes
// Write a function to determine if the supplied string is a palindrome
// ex: racecar, kayak, redder, widow. Spelled backwards and forwards the same.
// Acrobats stab orca. A slut nixes sex in Tulsa.

let palindrome = function(word){
    let len = word.length;
    let start = word.substring(0, Math.floor(len/2));
    let end = word.substring(len - Math.floor(len/2));
    let flip = end.split('').reverse().join('');
    return (start === flip);
    //for(let x = 0; word.length>x; x++){
        //var temp = word[0];
        //word[0] = word[word.length- x - 1];
        //word[word.length- x - 1] = temp;
    //}
    //return word;
}

console.log(palindrome('widow'));
console.log(palindrome('racecar'));
console.log(palindrome('kayak'));

// 




