import ICommandConfig from "../../../common/ICommandConfig";
import { POSTItemCommand } from "./POSTItemCommand";

export class ItemCommandFactory<ICommandFactory> {
  makeCommand = (config: ICommandConfig) => {
    if (config.commandName == POSTItemCommand.name) {
      return new POSTItemCommand(config.args);
    }

    throw new Error("Command not found!");
  };
}
