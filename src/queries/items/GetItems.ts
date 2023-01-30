import { getManager } from "typeorm";

export class GetItems<IQuery> {
  public execute = () => {
    const items = getManager()
      .getRepository("Item")
      .find()
      .then((items) => {
        console.log(`Item found: ${items.length}`);
        return items;
      })
      .catch((err) => {
        console.error(`Error retrieving items: ${err}`);
        return undefined;
      });

    const status = items ? true : false;

    console.log("RIK:: ", items, status);

    return {
      status,
      items,
    };
  };
}
