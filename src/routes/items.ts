var express = require("express");
var itemsRouter = express.Router();

itemsRouter.get("/", (req, res, next) => {
  res.send("Hello CQRS World from Items");
});

export default itemsRouter;
