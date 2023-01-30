import * as express from "express";
import itemsRouter from "./routes/items";
import { createConnection } from "typeorm";
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));

app.get("/health", (req, res) => {
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
