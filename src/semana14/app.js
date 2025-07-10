// app.js
import info, { suma, resta, multiplicacion, division } from './cacluladora.js';

function calcular(operacion, a, b) {
  let resultado;
  switch (operacion) {
    case 'suma':
      resultado = suma(a, b);
      break;
    case 'resta':
      resultado = resta(a, b);
      break;
    case 'multiplicacion':
      resultado = multiplicacion(a, b);
      break;
    case 'division':
      resultado = division(a, b);
      break;
    default:
      resultado = 'Operación no soportada.';
  }
  console.log(`Resultado de ${operacion}:`, resultado);
}

console.log(info());

// Pruebas de las operaciones
calcular('suma', 5, 3);
calcular('resta', 10, 4);
calcular('multiplicacion', 6, 7);
calcular('division', 20, 4);
calcular('division', 10, 0);
calcular('potencia', 2, 3); // Operación no soportada
