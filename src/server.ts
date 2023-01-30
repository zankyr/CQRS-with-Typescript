import * as express from "express";
import itemsRouter from "./routes/items";
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello, CQRS World!");
});

app.use("/items", itemsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
