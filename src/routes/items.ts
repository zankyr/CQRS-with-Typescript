import * as AppItemCommands from "../commands/application/items";
import * as AppItemQueries from "../queries/items";
import { Items } from "../entity/Items";

// Configure express.js so it can read and parse JSON bodies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var jsonParser = bodyParser.json();
var itemsRouter = express.Router();

// Configure factories
const itemCommandFactory = new AppItemCommands.ItemCommandFactory();
const itemQueryFactory = new AppItemQueries.QueryFactory();

// Get all items
itemsRouter.get("/", (req, res, next) => {
  const queryName = "GetItems";

  const queryConfig = {
    queryName,
    args: {},
  };

  const query = itemQueryFactory.makeCommand(queryConfig);
  const results = query.execute();
  const statusCode = results.status ? 200 : 500;
  const items = results.items;

  console.log(items);

  res.status(statusCode).send(items);
});

// Create new item
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
