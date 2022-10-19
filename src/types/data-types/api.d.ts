export interface ApiBase<Name, Type> {
  id: string;
  type: Name;
  attributes: Type;
}
