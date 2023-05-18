const gastos = [100, 200, 300, 400, 500]

// Ingresa el nombre via prompt
const nombre = prompt("Ingresa tu nombre:")

// Funcion para mostrar el resultado al final
function mostrarResultado(resultado) {
  console.log(resultado);
alert(resultado);
}

//Funcion para pedir confirmacion de la suma de gastos almacenados
const calcularGastos = () => {
  const confirmacion = confirm(nombre + ", desea calcular la suma de los gastos?😀")
  if (confirmacion) {
    let total = 0
    for (let i = 0; i < gastos.length; i++) {
      total += gastos[i]
    }
    const mensaje = "🤑 "+ nombre + "El total de gastos es: $$"+ total
    mostrarResultado(mensaje)
  } else {
    alert("⚠Cancelaste el cálculo de gastos.")
  }
}

