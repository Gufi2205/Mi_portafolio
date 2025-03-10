// src/app/api/contact/route.js
import mysql from 'mysql2/promise';

export async function POST(request) {
    const { name, email, subject, message } = await request.json();

    // Conexión a DB
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    try {
        await connection.execute(
            'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
            [name, email, subject, message]
        );

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Database error:', error);
        return new Response(JSON.stringify({ error: 'Error del servidor' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    } finally {
        await connection.end();
    }
}