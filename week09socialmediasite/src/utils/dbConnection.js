import pg from "pg";
export function dbConnect() {
    const connectionString = process.env.local
    NEXT_PUBLIC_DATABASE_URL;
    const db = new pg.Pool({
        connectionString: connectionString,
    });

    return db;
}