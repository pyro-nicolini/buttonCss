


let variableBoton = document.getElementById('boton');

/*forma óptima*/
variableBoton.addEventListener('click', () => {
    variableBoton.classList.toggle('active');
});


/*forma lógica básica condicional*/
// let variableBoton = document.getElementById('boton');

// variableBoton.addEventListener('click', () => {
//     if (variableBoton.classList != 'boton active') {
//         variableBoton.classList = 'boton active';
//     } else {
//         variableBoton.classList = 'boton';
//     }
// })


/* forma con comprobación*/
// variableBoton.addEventListener('click', () => {
//     if (!variableBoton.classList.contains('active')) {
//         variableBoton.classList.add('active');
//     } else {
//         variableBoton.classList.remove('active');
//     }
// });