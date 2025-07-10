// cacluladora.js
// Módulo de operaciones matemáticas básicas

function validarNumeros(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return 'Error: Ambos parámetros deben ser números válidos.';
  }
  return null;
}

export function suma(a, b) {
  const error = validarNumeros(a, b);
  if (error) return error;
  return a + b;
}

export function resta(a, b) {
  const error = validarNumeros(a, b);
  if (error) return error;
  return a - b;
}

export function multiplicacion(a, b) {
  const error = validarNumeros(a, b);
  if (error) return error;
  return a * b;
}

export function division(a, b) {
  const error = validarNumeros(a, b);
  if (error) return error;
  if (b === 0) return 'Error: No se puede dividir por cero.';
  return a / b;
}

export default function info() {
  return 'Este módulo permite realizar operaciones básicas: suma, resta, multiplicación y división.';
}
