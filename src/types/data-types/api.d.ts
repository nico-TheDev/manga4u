import { Relationship } from '@/types/data-types/relationship';

export interface ApiBase<Name, Type> {
  id: string;
  type: Name;
  attributes: Type;
  relationships?: Relationship[];
}
