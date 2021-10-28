export const auxiliar = { 
  isEmail(word){
    const a = '@';
    var name;
    if(word.includes(a)){
    name = word.substring(0, word.indexOf(a));
    }
    else{
    name = word;
    }
    return name;
  }
}