// var permite re-declarar variables y reasignar valores
// var edad = 10;
// var edad = 20;

// let no permite re-declarar variables pero si reasignar valores
// let edad = 10;
// edad = 20;

// const no permite re-declarar variables ni reasignar valores
const edad = 10;
console.log(edad);

// Ojo con el scope de los tipos de variable

const persona =  {
  nombre:'julio'
}

console.log(persona)

persona.nombre = 'Gerardo'

console.log(persona)

function sumar (num){
    console.log(num)
}

sumar(25)


const sumarDos = (num1,num2 ) => {
  console.log(num1 + num2)
}

sumarDos(30, 40)

const sumarTres = num => {
    console.log(num)
}

sumarTres(35)

const sumarCuatro = (num1,num2 ) => {
    return (num1 + num2)
}
const resultado = sumarCuatro(75, 80)
console.log(resultado)


const sumarCinco = (num1,num2 ) => (num1 + num2)
const resultado2 = sumarCinco(160, 165)
console.log(resultado2)

const mensaje = (nombre) => {
  return 'I\'m ' + nombre
}


const resultado3 = mensaje('Gerardo')

console.log(resultado3)

const suma3 = (num= 0) => {
  console.log(num + 3)
}

suma3();