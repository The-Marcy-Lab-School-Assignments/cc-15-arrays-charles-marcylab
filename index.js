//declare function called findLongestWord
//function should take in an array of strings
// initialize parameter(words)
//declare a variable called longestWord should compare the length all strings in array
//return the first longest string in array
//write your code here
const findLongestWord = (words) =>{
  let longestWord = "";
  //for (let i = 0; i > words.length; i++) {
  //let word = words[i]
  //if (word.length > longestWord.length) {
    //longestWord = word;
    //}
  for (let word of words){  
    if (word.length > longestWord.length) {
    longestWord = word;
    }
  }
  return longestWord;
};
console.log(findLongestWord(['jazzy', 'jumpy', 'quaky']));