const triangleLeft = function(number){
  let line="";
  delimiter ="";

  for(let index = 1; index <= number; index++){
    line +=delimiter;
    delimiter="\n";

    for(let innerIndex =1; innerIndex <=index; innerIndex++){
      line +="*";
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
        line +=" ";
      } else {
        line += "*";
      }
    }
  }
  return line;
}

const main = function(){
  let align = process.argv[2];
  let number = process.argv[3];

  if(align == "left"){
    console.log(triangleLeft(number));
  }

  if(align == "right"){
    console.log(triangleRight(number));
  }
}

main();
