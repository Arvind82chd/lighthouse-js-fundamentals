const sayHelloConsole = function (name) {
  console.log("Hello " + name );
}
sayHelloConsole("Jack");


const sayHelloReturn = function(name) {
    return "Hello " + name;
}
const greet = sayHelloReturn("Sam");
console.log(greet);


