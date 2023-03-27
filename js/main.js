
//algoritmos JavaScript acciones Sabados Félipe Okin Martinez 2395912

function saludo () {
    alert ("Bienvenido amiguito");

}

function circulo (){
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
    
}

function rectangulo (){

    var figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");

}

function movetop (){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("top");

}


function left (){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("left");

}

function right (){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("right");

}

function botton (){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("botton");

}

function diagonal (){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("diagonal");

}


function imagen (){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("imagen");

}

function rombo (){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rombo");

}

//algoritmos 

function suma(){
    var A = 0;
    var B = 0 ;
    var suma= 0 ;


    alert("Algoritmo que suma dos valores ingresados por el usuario");

    A  = parseInt(prompt("Ingrese el primer valor a sumar"))

    B  = parseInt(prompt("Ingrese el segundo valor a sumar"))

    suma= A + B;

    alert("La suma de los dos valores es: " + suma)

}



function operacionesBasicas (){
    var A = 0;
    var B = 0;

    var suma = 0 ;
    var resta = 0 ;
    var multiplicacion = 0 ;
    var division = 0 ;

   alert ("Algoritmo que Operar dos valores");
   
   A = parseInt(prompt("Ingrese el primer valor a operar"));
   B = parseInt(prompt("Ingrese el segundo valor a operar"));

   suma = A + B;
   resta = A - B;
   multiplicacion = A * B;
   division = A / B; 

   
   alert("El resultado de la suma es: "+ suma);
   alert("El resultado de la resta es: "+ resta);
   alert("El resultado de la multiplicacion es: "+ multiplicacion);
   alert("El resultado de la división es: "+ division);
    

}

//Algoritmo Promedio

//el colejio ABC requiere un sistema que le permita 
//calcular el promedio de un alumno que tiene 7 calificaciones,
//estas seran en una escala del 1 al 10 en donde aprueba si el promedio 
//es mayor o igual a 6.2.



function promedio(){

alert("Algoritmo que da el promedio de 7 notas");    

    nota1  = parseInt(prompt("Ingrese la primera nota"));
    nota2  = parseInt(prompt("Ingrese la segunda nota"))
    nota3  = parseInt(prompt("Ingrese la tercera nota"))
    nota4  = parseInt(prompt("Ingrese la cuarta nota"))
    nota5  = parseInt(prompt("Ingrese la quinta nota"))
    nota6  = parseInt(prompt("Ingrese la sexta nota"))
    nota7  = parseInt(prompt("Ingrese la septima nota"))



    suma= nota1+nota2+nota3+nota4+nota5+nota6+nota7;
    promedio = suma / 7;

    if (promedio >= 6.2 ) {

        alert("El estudiante aprobo, su promedio es : " + promedio);
        
    } else {
        alert("El estudiante perdio, su promedio es : " + promedio);
    }
}

    //Area de Un triangulo 
 
    function area(){
        var A = 0;
        var B = 0 ;
        var area= 0 ;
    
    
        alert("Area de un triángulo");
    
        A  = parseInt(prompt("Ingrese la base"))
    
        B  = parseInt(prompt("Ingrese la altura"))
    
        area= (A * B)/2;
    
        alert("Area de un triángulo: " + area)
    
    }

    // // Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara
// // despues de n# de años teniendo en cuenta que el banco paga un interes del 1,7% mensual

function inversion(){
    var saldo = 0;
    var tiempo = 0 ;
    var gananciaAño= 0 ;
    var total= 0 ;
    var gananciaNeta = 0;
    var meses = 12;
    var interes = 1.7;


    alert("Ganancia");

    saldo  = parseInt(prompt("Ingrese su sueldo"))

    tiempo  = parseInt(prompt("Ingrese la cantidad de años"))

    gananciaAño= (((saldo * interes)/100)*meses)*tiempo;
    total= gananciaAño+saldo;

    alert("La ganancia por año fue: " + gananciaAño + "\nMientras la ganancia total fue de: " + total)

}

// una fruteria vende manzanas a 4.500 el kilo realice un algoritmo que permitasaber al 
// vendedor cuanto debe pagar un cliente teniendo en cuenta que la fruteria tiene la siguiente 
// tabla de descuentos



function descuento(){



    valor = 4500;
    kilos = 0;
    kilosPrecio = 0;
    total = 0;

    alert("Fruteria");
    kilos  = parseInt(prompt("Ingrese la cantidad de kilos que quiere comprar"))
    kilosPrecio = kilos*valor;

    if (kilos <= 2 ) {
        alert("El precio total es : " + kilosPrecio)
        
    } else if (3 >= kilos <=5) {
        total= kilosPrecio * 0.10;
        kilosPrecio-=total
        
        alert("El precio total es : " + kilosPrecio)
        
    }else if (6 >= kilos <=10) {
        total= kilosPrecio * 0.15;
        kilosPrecio-=total
        
        alert("El precio total es : " + kilosPrecio)
        
    } else if (kilos == 0){
        alert("No disponible ")
        
    }
    else {
        total= kilosPrecio * 0.20;
        kilosPrecio-=total
        alert("El precio total es : " + kilosPrecio)
    }
}