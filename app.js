// este comando sirve para mostrar lo que se puede estar haciendo en la consola
console.log ('date'); //string
console.log(true); //tipo boleano
console.log(false); //tipo boleano
console.log(40); //number

//operaciones matematicas
console.log(12*5)
console.log(12+5)
console.log(12-5)
console.log(12/5)

//variables
// la declaracion y la asiggnacion se manejan con let (nombre de la variable crea la declaracion, = (tipo de dato asigna la variable ))
// let nombre = prompt('Tu nombre');
// let apellido = prompt('Tu apellido');
// let edad = prompt('Tu edad');

// // tipeof sirve para saber que tipo de dato se eta utilizando, ya sea string, number, etc.
// console.log('Hola ' + ' ' + nombre +' ' + apellido + ' tu edad es ' + edad);

// let salario = prompt('Cuantos pesos colombianos ganas')

// let peso_colombiano = 0.00031

// console.log('tu salario en peso colombianos es de ' + salario / dolar )


// let peso = prompt('cual es tu peso?')

// console.log('Tu peso en venus es de ' + peso * 91 / 100);
// console.log('tu peso en marte es de ' + peso * 38 /100);
// console.log('tu peso en la luna es de ' + peso * 16.6 /100);




// let base = prompt('cual es la base del triangulo?');

// let altura = prompt('cual es la altura del triangulo?');

// let area = base * altura / 2;

// console.log('El area de tu riangulo es de: ' + area);



// let gradosc = prompt('Cuales son los grados de esta sala en celcius? ');

// let gradosf = gradosc * 1.8 + 32;

// console.log('La temperatura de la habitacion en Fahrenheit  es de: ' + gradosf);


// let km = prompt('cuantos kilometros has recorrido hoy?' );

// let metros = km * 1000;

// console.log('Recorriste ' + metros + 'metros' );


// let precio = Number(prompt('Cual es el precio de tu producto?'));

// let descuento = precio * 20 / 100;

// console.log('El precio de tu producto con el 20% de descuento es de: ' + descuento);


// let a = Number(prompt('cuanto te sacaste en la primer nota?'));
// let b = Number(prompt('cuanto te sacaste en la segunda nota?'));
// let c = Number(prompt('cuanto te sacaste en la tercera nota?'));

// let promedio = (a + b + c) / 3;

// console.log('Su promedio de las notas es de: ' + promedio);


// let dias = Number(prompt('Cuantos días han pasado desde que ella se fue?'));

let peso = Number(prompt('Cual es tu peso en  KG (kilogramos) '));

let libras = peso * 2.2046;

console.log('Tu peso en libras es de: ' + libras);

if ( libras < 160) {
    console.log('Debes competir en peso mosca');
    
}else if( libras >= 160 & libras <=180 ){
    console.log('Debes competir en la categoria clase baja');

}else{
    console.log('Tu categoria es sumo');50
}








