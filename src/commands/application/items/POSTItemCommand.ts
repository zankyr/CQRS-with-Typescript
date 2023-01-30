import { Item } from "../../../entity/Item";
import * as DomainItemCommands from "../../domain/items";

export class POSTItemCommand<ICommand> {
  private item: Item;

  constructor(item: Item) {
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
