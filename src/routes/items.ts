import * as AppItemCommands from "../commands/application/items";
import { Items } from "../entity/Items";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var jsonParser = bodyParser.json();

var itemsRouter = express.Router();

const itemCommandFactory = new AppItemCommands.ItemCommandFactory();

itemsRouter.get("/", (req, res, next) => {
  res.send("Hello CQRS World from Items");
});

itemsRouter.post("/create", jsonParser, (req, res, next) => {
  const item: Items = req.body;

  const commandName = "POSTItemCommand";

  const commandConfig = {
    commandName,
    args: item,
  };

  const command = itemCommandFactory.makeCommand(commandConfig);
  const results = command.execute();
  const statusCode = results.status ? 200 : 500;

  res.status(statusCode).send("Foo");
});

export default itemsRouter;
