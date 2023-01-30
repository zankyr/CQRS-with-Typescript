import IQueryConfig from "../../common/IQueryConfig";
import { GetItems } from "./GetItems";

export class QueryFactory<IQueryFactory> {
  makeCommand = (config: IQueryConfig) => {
    if (config.queryName == GetItems.name) {
      return new GetItems();
    }

    throw new Error("Command not found");
  };
}
