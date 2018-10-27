const isOdd = function(number){
  return number%2;
}

const repeatCharacter = function(character,times){
  let characters = new Array(times).fill(character);
  return characters.join("").toString();
}

const justify = function(text){
  let times = Math.floor((100 - text.length)/2);
  prefix = repeatCharacter(" ",times);
  suffix = (prefix+repeatCharacter(" ",isOdd(text.length)));
  return prefix+text+suffix;
}

const display = function(text){
  let message = justify(text);
  return ("╎"+message+"╎");
}

exports.repeatCharacter = repeatCharacter;
exports.display = display;



