const ciudades = []
let ciudad, cantidadRestantes, error = 0;
let indice = 0


// SOLUCION 1:
ciudad = prompt("Ingrese una ciudad")

while(ciudad !== "0") {
    if(ciudad !== "-1" && ciudad.trim() !== ""){
        ciudades.push(ciudad)
    }
    do{
        error = 0
        ciudad = prompt("Ingrese una ciudad")// => ciudad = "La Pampa" 
        ciudadNumber = parseInt(ciudad) // => ciudadNumber = NaN
        if(Number.isInteger(ciudadNumber) && ciudadNumber !== 0){
            error = 1  // => flags
        }
    }while(!ciudad || error === 1 || ciudad.trim() === "")
    if(ciudad === "0" && ciudades.length < 8){
        cantidadRestantes = 8 - ciudades.length
        alert(`Aún te faltan ${cantidadRestantes} ciudades`)
        ciudad = "-1"
    }
}


console.log(ciudades)
// Mostra la longitud del arreglo
console.log("Longitud del arreglo: " , ciudades.length)

// Mostrar las posiciones 1, 3 y la ultima
console.log("Primera posición ", ciudades[0])
console.log("Tercera posición ", ciudades[2])
/*let cantidad = 0
for(let i = 0 ; i< ciudades.length; i++){
    cantidad++
}
console.log("Ultima posición ", ciudades[cantidad])
*/
console.log("Ultima posición ", ciudades[ciudades.length - 1 ])

ciudades.push("Paris")

console.log("Segunda posición ", ciudades[1])

ciudades[1] = "Barcelona"



/*
// SOLUCION 2:
do{
    ciudades[indice] = prompt("Ingrese una ciudad") 
    indice++
}while(ciudades[indice] !== "0")
ciudades.pop()
indice--
if(indice === 10){
    console.log("Se ingresaron 10 ciudades")
}

/////////////////////////////

// Solucion 3:

while(ciudad !== "0") {
    ciudad = prompt("Ingrese una ciudad")
    if(ciudad!=="0"){
        ciudades.push(ciudad)
        // ....
    }
}

// Solucion 4:

do {
    ciudad = prompt("Ingrese una ciudad")
    if(ciudad!=="0"){
        ciudades.push(ciudad)
        // ....
    }
}while(ciudad !== "0")

// Termina el programa
*/



// Agrega al final del array un elemento => Prompt 