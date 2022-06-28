alert("Bienvenido a FizzBuzz")

console.log("El juego va a ejecutar una cuenta del 1 al 100, pero puedes decidir hasta que numero va a contar. A continuación si deseas que el conteo se haga hasta cierto punto ingresa un NUMERO, de lo contrario solo dale click a aceptar")

let limite = parseInt(prompt("Ingresa un numero"))

while (limite > 100) {
    console.log("Debe ingresar un numero menor a 100")
    limite = parseInt(prompt("Ingresa un numero"))
}
if (isNaN(limite)) {
    limite = 100
}
console.log("Limite " + limite)

alert("Ahora debes ingresar 2 palabras diferentes")

let string1 = prompt("Ingrese la primera palabra")

while (string1 == ! " ") {
    alert("Error")
    string1 = prompt("Ingrese la primera palabra")
}

let string2 = prompt("Ingrese la segunda palabra")

while (string2 == ! " ") {
    alert("Error")
    string2 = prompt("Ingrese la segunda palabra")
}

while (string1 == string2) {
    console.log("Error las palabras no deben ser las mismas")
    string1 = prompt("Ingrese la primera palabra nuevamente")
    string2 = prompt("Ingrese la segunda palabra nuevamente")
}
console.log("Primera palabra " + string1)
console.log("Segunda palabra " + string2)

alert("Ahora ingresa 2 numeros distintos")

let Fizz_num = parseInt(prompt("ingresa el primer divisor"))
let Buzz_num = parseInt(prompt("ingresa el segundo divisor"))

while ((isNaN(Fizz_num)) || (isNaN(Buzz_num))) {
    alert("Error los datos ingresados son incorrectos")
    Fizz_num = parseInt(prompt("Ingresa nuevamente  el primer numero divisor"))
    Buzz_num = parseInt(prompt("Ingresa nuevamente el segundo numero divisor"))
}
console.log("Divisores " + Fizz_num + " y " + Buzz_num)

console.log("Los números que sean divisibles por los números que acabas de ingresar serán sustituidos por las palabras que ingresaste anteriormente ")

function FizzBuzz(string1, string2) {

    let stringAcumulado = " "
    for (let i = 1; i < limite; i++) {
        let mensaje = " "
        if (i % Fizz_num == 0 & i % Buzz_num == 0) {
            mensaje = (string1 + string2)
        } else if (i % Buzz_num == 0) {
            mensaje = (string2)
        } else if (i % Fizz_num == 0) {
            mensaje = (string1)
        } else {
            mensaje = (i)
        }

        if (i < limite) {
            stringAcumulado += `${mensaje || i},`
        }
        else {
            stringAcumulado += `${mensaje || i}`
        }
    }


    return stringAcumulado

}

let ejecutar = FizzBuzz(string1, string2)
console.log(ejecutar)