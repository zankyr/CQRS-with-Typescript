import * as express from "express";
import itemsRouter from "./routes/items";
const morgan = require("morgan");
import { createConnection } from "typeorm";

const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello, CQRS World!");
});

app.use("/items", itemsRouter);

createConnection()
  .then((connection) => {
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error(error));
