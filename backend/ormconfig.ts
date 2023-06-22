import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: '10.11.6.9',
    port: 5432,
    username: 'postgres',
    password: '1337',
    database: 'trans',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    // logging: true,
}

export default config;