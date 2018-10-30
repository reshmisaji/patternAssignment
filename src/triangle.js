const addCharacter = function(line,character){
let row = line;
  return row += character;
}

const triangleLeft = function(number){
  let line="";
  delimiter ="";

  for(let index = 1; index <= number; index++){
    line +=delimiter;
    delimiter="\n";

    for(let innerIndex =1; innerIndex <=index; innerIndex++){
      line = addCharacter(line,"*");
    }
  }
  return line;
}

const triangleRight = function(number){
  let line = "";
  let delimiter = "";

  for(let index = 1; index <=number; index++){
    line +=delimiter;
    delimiter = "\n";

    for(let innerIndex =1; innerIndex <=number; innerIndex++){

      if(innerIndex <= (number-index)){
        line = addCharacter(line," ");
      } else {
        line = addCharacter(line,"*");
      }
    }
  }
  return line;
}


exports.triangleRight = triangleRight;
exports.triangleLeft = triangleLeft;
