

//javascript
var createGreeting = function(message, name){
  return message + name;
}

//ECMA
//var arrowGreeting = (message, name) => {
//  return message + name;
//}

var arrowGreeting = (message, name) => message + name;
console.log(createGreeting("Hola ","Marco"));


var multiplyx = x => x*2;
console.log(multiplyx(2));




