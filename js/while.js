let iteraciones = 1;

let numeroMaximo = 176;

// while( iteraciones <= 31 ) {
//     document.write(`${iteraciones + 1} - Hola desde document write <br>`)

//     iteraciones = iteraciones + 1;

// }


while ( iteraciones <= numeroMaximo ) {
    if(iteraciones % 7 === 0) {
        document.write(`El numero ${iteraciones} es multiplo de 7 <br>`)
    }
    iteraciones++
}

