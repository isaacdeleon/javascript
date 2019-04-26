

// let keword


var message = "hi";

{
  let message = "bye";
}

//console.log(message);


var fs = [];

for(let i = 0; i < 10 ; i++) {
  fs.push(function () {
    console.info(i);
  });
}

fs.forEach(function(f) {
  f();
});




