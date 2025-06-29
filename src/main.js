// index.js
const db = require('./db.js');


async function pruebaConexion() {
  try {
    const [rows] = await db.query('SELECT NOW() AS fecha_actual');
    console.log('Conexión exitosa. Fecha actual en DB:', rows[0].fecha_actual);
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
  }
}

async function getTelefonos() {
    try {
        const [rows] = await db.query('SELECT nombre, apellido, telefono FROM PACIENTE');
        return rows.map(row => row.telefono);
    } catch (error) {
        console.error('Error al obtener los teléfonos:', error);
        return [];
    }
}

async function getTelefonoPaciente(numero_historial) {
    try {
        const [rows] = await db.query('SELECT telefono FROM PACIENTE WHERE nro_historial_clinico = ?', [numero_historial]);
        if (rows.length > 0) {
            return rows[0].telefono;
        }
        return null; // Si no se encuentra el paciente
    } catch (error) {
        console.error('Error al obtener el teléfono del paciente:', error);
        return null;
    }
}

async function getMedicosPaciente(numero_historial) {
    try {
        const [rows] = await db.query(`
            SELECT m.matricula AS matricula, m.nombre AS nombre, m.apellido AS apellido
            FROM MEDICO m 
            INNER JOIN INGRESO i ON matricula_medico = m.matricula 
            INNER JOIN PACIENTE p ON p.nro_historial_clinico = i.nro_historial_paciente
            WHERE p.nro_historial_clinico = ?
        `, [numero_historial]);
        return rows.map(row => ({
            matricula: row.matricula,
            nombre: row.nombre,
            apellido: row.apellido
        }));
    } catch (error) {
        console.error('Error al obtener los médicos del paciente:', error);
        return [];
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log('Esperando 10 segundos para que la base de datos esté lista...');
    await delay(10000);

    await pruebaConexion();

    const telefonos = await getTelefonos();
    console.log('Teléfonos de pacientes:', telefonos);

    const telefono = await getTelefonoPaciente(1884);
    if (telefono) {
        console.log('Teléfono del paciente con historial 1884:', telefono);
    } else {
        console.log('Paciente no encontrado o sin teléfono registrado.');
    }

    const medicos = await getMedicosPaciente(1884);
    if (medicos.length > 0) {
        console.log('Médicos del paciente con historial 1884:', medicos);
    } else {
        console.log('No se encontraron médicos para el paciente con historial 1884.');
    }
}

main();