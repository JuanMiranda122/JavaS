// este comando sirve para mostrar lo que se puede estar haciendo en la consola
// console.log ('date'); //string
// console.log(true); //tipo boleano
// console.log(false); //tipo boleano
// console.log(40); //number

// //operaciones matematicas
// console.log(12*5)
// console.log(12+5)
// console.log(12-5)
// console.log(12/5)

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

// let peso = Number(prompt('Cual es tu peso en  KG (kilogramos) '));

// let genero = String(prompt('Cual es tu genero? solo f o m'))

// let libras = peso * 2.2046;

// let bajo = 160;
// let medio = 180;
// if(genero == 'f'){
//     bajo = 115;
//     medio = 135;
// }

// if(libras <= bajo){
//     console.log('peso mosca')
// }else if(libras <= medio){
//     console.log('peso medio')
// }else{
//     console.log('peso sumo')
// }



// let metodo = String(prompt('Que metodo de preparacion utilizas? especiificar estas tres opciones: francesa, moka y v60'));



// let agua = Number(prompt('Cuantos gramos de cafe le va a agregar?'))

// let  francesa = 'francesa'

// let  moka = 'moka'

// let  v60 = 'v60'

// if(metodo == 'francesa'){
//     let mlf = agua * 15
//     console.log('Los militros de agua que tienes que echarle a tu cafe son: ' + mlf)

// } else if(metodo == 'moka'){
//     let mlm = agua * 16
//     console.log('Los militros de agua que tienes que echarle a tu cafe son: ' + mlm)

// }else{

//     let mlv = agua * 14
//     console.log('Los militros de agua que tienes que echarle a tu cafe son: ' + mlv)

// }


// let año = Number(prompt('Cual es tu año de nacimiento?'));

// let dias = Number(prompt('Cuantos dias tiene el año que ya puso?'))

// if(dias == 366){ 
//     console.log('El año ' + año + '  es bisiesto' )

// }else if(dias == 365){
//     console.log('El año ' + año + '  no es bisiesto' )

// }else{
//     console.log('dato erroneo')
// }


// let cuenta = Number(prompt('Cuanto costo la cena en total?'))

// let np = Number(prompt('Cuantas personas comieron? '))
  

// let pc = (prompt('Cual fue la persona que mas comio?'))

// let vpagarindividual = cuenta / np 

// let pcv = vpagarindividual * 2 

// let vpi = pcv / (np-1)
 
// console.log(pc + ' tiene que pagar ' + pcv + ' los demas tienen que pagar  ' + vpi);

//  let vp = Number(prompt('Cuantas veces quieres que se multiplique'))

// for(let i = 1; i <= vp; i++){

    

// //     let mp = i  * num;

// //     console.log('la tabla del de multiplicacion es ' + mp)
// // }

// let num = Number(prompt('Dame cualquier numero entero'));

// for(let i = 0; i = num; i++){


// let fact = i * num 

// console.log('el factorial de ' + fact + ' es:')




// }





// for(let i= 1; i <= 3; i++){

//     let nom = String(prompt('Cual es tu nombre?'))

    

//     for( i=1; i <= 3; i++){

//         let notas = [not1, not2, not3]

//         let not1 = Number(prompt('Cual es tu primer nota?'))
//         let not2 = Number(prompt('Cual es tu segunda nota?'))
//         let not3 = Number(prompt('Cual es tu tercer nota?'))

//         let promedio = notas / 3

// if(promedio <= 3){

//     console.log('su promedio es de: ' + promedio + ' tiene que nivelar')
// }else if(promedio >=3 && promedio <= 5){
//     console.log('su promedio es de: ' + promedio + ' paso bien pelado')

// }else{
//     console.log('Datos no validos')
// }

//     }




// }



// let computadores = ['','',''];
// //El elemento length sirve para mostrar cuantos elementos tiene una lista 
// console.log(computadores.length);

// console.log(computadores[computadores.length - 1]);



// let hashes = ['ljuthdit9', '548347', 'jdjhsktn', '486154', 'hifadshl47#', '876416597', 'ñlnpikpew']

// let seguras = []
// let media = []
// let inseguras = []

// for (let i = 0; i < hashes.length; i++){

//     let logcon = hashes[i].length;
//     let ce = hashes[i].includes('#')

//     if(ce && logcon>= 8 ){

//         seguras.push(hashes[i]);
        
            
//     }else if(logcon >= 8 ){
//         media.push(hashes[i]);
//     }else{
//         inseguras.push(hashes[i]);
//     }

// }

// console.log('las contraseñas seguras son: ' + seguras)
// console.log('las contraseñas medias son: ' + media)

// console.log('las contraseñas iseguras son: ' + inseguras)


let numAzar = Math.floor((Math.random() * 10) + 1)

for(let i = 1; i <= 5; i++){

    let num = Number(prompt('ingrese un numero'));




    if( num === numAzar ){
        console.log('Gano')
        break
    
    }else if(num < numAzar){
        console.log('Escriba un numero mayor')
    }else if(num > numAzar){
        console.log('Escriba un numero menor')
    }else{
        console.log('PERDIO')
    }

}







