// receives returns an obj that holds all unique characters
function countLetters(str) {
 // Obj that holds the characters
 var characters = {};
 // formatted string (no spaces)
 var convertedStr = str.split(' ').join('');
 for (var i = 0; i < convertedStr.length; i++) {
   // checks if character is present in the obj
   if (characters[convertedStr[i]] >= 1) {
     // Increments key value by 1
     // in this case ++ is different than += 1
     characters[convertedStr[i]] = characters[convertedStr[i]] += 1;
   } else {
     // First initialization in the obj
     characters[convertedStr[i]] = 1;
   }
 }
 return characters;
}

console.log(countLetters("lighthouse labs in the house"));