let edadCliente = parseInt( prompt("Ingrese edad"));

while (isNaN(edadCliente) || edadCliente>105 || edadCliente <=0) {
    edadCliente = parseInt( prompt("Ingrese edad"))
}

console.log(edadCliente)