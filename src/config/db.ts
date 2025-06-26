import {Pool} from 'pg';

export const pool = new Pool({
    host: 'localhost',
    user: 'myuser',
    password: 'mypassword',
    database: 'mydb',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    maxLifetimeSeconds: 60
});
