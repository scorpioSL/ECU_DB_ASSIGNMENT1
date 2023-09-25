import { createConnection } from 'mysql2/promise';
import { Environment } from './environment';


export async function createDB() {
    const connection = await createConnection({
        host: Environment.DB_HOST,
        user: Environment.DB_USERNAME,
        password: Environment.DB_PASSWORD,
        port: Environment.DB_PORT,
    });
    const query = `CREATE DATABASE IF NOT EXISTS ${Environment.DB_NAME};`;
    await connection.query(query);
}