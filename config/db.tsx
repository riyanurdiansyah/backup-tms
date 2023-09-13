import mysql, { Connection } from "mysql2/promise";

interface QueryOptions {
    query: string;
    values?: any[];
}

export async function query({ query, values = [] }: QueryOptions) {
    const dbConn: Connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    })

    try {
        const [results] = await dbConn.execute(query, values);
        dbConn.end();
        return results;
    } catch (e) {
        console.log(e);
        return { e }
    }
}