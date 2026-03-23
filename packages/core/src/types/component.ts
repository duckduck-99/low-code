import type { Recordable } from './base';

export interface ComponentSchema {
  id: string;
  type: string;
  props?: Recordable;
  children?: ComponentSchema[];
}
