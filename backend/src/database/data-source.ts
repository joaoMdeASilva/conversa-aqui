import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 3333,
    username: "postgres",
    password: "joao8505",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [],
    migrations: [],
    subscribers: [],
})
