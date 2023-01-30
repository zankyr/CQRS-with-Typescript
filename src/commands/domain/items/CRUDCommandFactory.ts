import ICommandConfig from "../../../common/ICommandConfig";
import { CreateItem } from "./CreateItem";

export class CRUDCommandFactory<ICommandFactory> {
  makeCommand = (config: ICommandConfig) => {
    if (config.commandName == CreateItem.name) {
      return new CreateItem(config.args);
    }

    throw new Error("Command not found");
  };
}
