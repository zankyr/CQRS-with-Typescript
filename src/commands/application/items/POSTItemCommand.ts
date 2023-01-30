import { Items } from "../../../entity/Items";
import * as DomainItemCommands from "../../domain/items";

export class POSTItemCommand<ICommand> {
  private item: Items;

  constructor(item: Items) {
    this.item = item;
  }

  public execute = () => {
    const crudCommandFactory = new DomainItemCommands.CRUDCommandFactory();

    const commandName = DomainItemCommands.CreateItem.name;

    const config = {
      commandName,
      args: this.item,
    };

    const command = crudCommandFactory.makeCommand(config);

    const results = command.execute();

    return results.status ? { status: true } : { status: false };
  };
}
