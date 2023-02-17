

const pais = prompt("Ingresa pais")

const parsePais = parseInt(pais)

// console.log(typeof Number.isInteger(parsePais))

// console.log(Number.isInteger(parsePais))

if(Number.isInteger(parsePais)){
    console.log("Entro")  // => flags
}

