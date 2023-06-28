import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
const cors = require('cors');

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(routes);

  console.log("conectado");

  app.get("/", (req, res) => {
    return res.json("ok");
  });

  return app.listen(process.env.PORT);
});