//// receives returns an obj that tells us the placement of all unique characters
function characterPosition(str) {
 // Obj that holds the characters
 var characters = {};
 // formatted string (no spaces)
 var convertedStr = str.split(' ').join('');
 for (var i = 0; i < convertedStr.length; i++) {
   // checks if character is present in the obj
   if (characters[convertedStr[i]] !== undefined) {
     // Increments key value by 1
     // in this case ++ is different than += 1
     characters[convertedStr[i]].push(i)  ;
   } else {
     // First initialization in the obj
     characters[convertedStr[i]] = [];
     characters[convertedStr[i]].push(i);

   }
 }
 return characters;
}

console.log(characterPosition("lighthouse labs in the house"));