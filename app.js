function greet(){
    console.log("Hello");
}
greet();

function logGreeting(fn){
    fn();
}
logGreeting(greet);

let greetMe =  function(){
    console.log("Hello* from the function expression");
}
greetMe();

let greetMe2 = ()=>{console.log("Hello Arrow");}
greetMe2();

let saludo =(nombre, tratamineto) => {
    console.log("Hola " + tratamineto + " " + nombre);
}
saludo('Miguel', 'sr.');

let cuadro = numero => {
    return numero + numero;
}

let cuadrado = numero => numero * numero;