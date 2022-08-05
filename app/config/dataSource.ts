import { DataSource } from "typeorm";
import { Users } from "../user/userEntity";
import "reflect-metadata";
const initializationDataSource = () => {
  const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1503tjdan",
    database: "insta",
    logging: true,
    entities: [Users],
  });

  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
};

export default initializationDataSource;
