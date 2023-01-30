import IQuery from "./IQuery";
import IQueryConfig from "./IQueryConfig";

export default interface IQueryFactory {
  makeCommand: (config: IQueryConfig) => IQuery;
}
