import { getManager } from "typeorm";
import { Item } from "../../../entity/Item";

export class CreateItem<ICommand> {
  private item: Item;

  constructor(item: Item) {
    this.item = item;
  }

  public execute = () => {
    let item = new Item();

    for (let key of Object.keys(this.item)) {
      item[key] = this.item[key];
    }

    const status = getManager()
      .getRepository("Item")
      .save(item)
      .then((item) => {
        console.log(`Item addedd successfully: ${item.id}`);
        return true;
      })
      .catch((err) => {
        console.log(`Error adding game: ${err}`);
        return false;
      });

    return { status };
  };
}
