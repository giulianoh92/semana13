import dotenv from 'dotenv';
dotenv.config(); // carga las variables de entorno desde el archivo .env

import mysql from 'mysql2/promise'; // importa el paquete mysql2

// crea un pool de conexiones a la base de datos usando las variables de entorno
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10) || 10 // establece un límite de conexiones
});

export default pool; // exporta el pool de conexiones para que pueda ser utilizado en otros archivos