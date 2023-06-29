function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length -1;

  while (left <= right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Add your pseudocode here
  function isPalindrome(word);
  left = 0;
  right = (length of word)- 1
  while left <= right:
    if the left word is not equal to the right word:
      return false
    left = left + 1
    right = right - 1

  return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
