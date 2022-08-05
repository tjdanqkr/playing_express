import express from "express";
import { corsConfig } from "./config/corsConfig";
import initializationDataSource from "./config/dataSource";
import { errorHandler } from "./exception/errorHandler";
import cors from "cors";
import morgan from "morgan";
import userController from "./user/userController";
const app: express.Application = express();

const PORT = 8000;
initializationDataSource();
app.use(express.json());
app.use(cors(corsConfig));
app.use(morgan("common"));
app.use(errorHandler);

app.use("/user", userController);
app.get("/", function (req, res) {
  throw new Error("gogo");
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
