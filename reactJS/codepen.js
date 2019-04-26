const saludo = (nombre) => {
  return "Hola " + nombre;
}


//console.log(saludo("marco"));

const obj = {
  prop1: "uno",
  prop2: "dos",
  prop3: 3
};

const {prop1, prop2, prop3} = obj;

//console.log(prop1);
//console.log(prop2);
//console.log(prop3);

const {prop2: propdos, prop3 : proptres} = obj; //object destructiring

//console.log(propdos);
//console.log(proptres);


const array = ["uno", "dos", "tercero"];
const [uno, dos , tres] = array;

console.log(uno);
console.log(dos);
console.log(tres);


const numero = 5;
const otroTexto = "nuevo texto";
const texto = `Esto es un literal ${numero} - ${otroTexto}`;

console.log(texto);
