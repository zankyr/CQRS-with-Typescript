import { getManager } from "typeorm";
import { Items } from "../../../entity/Items";

export class CreateItem<ICommand> {
  private item: Items;

  constructor(item: Items) {
    this.item = item;
  }

  public execute = () => {
    let item = new Items();

    for (let key of Object.keys(this.item)) {
      item[key] = this.item[key];
    }

    const status = getManager()
      .getRepository("Items")
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
