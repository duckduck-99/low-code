import type { Recordable } from './base';

export interface ComponentMeta {
  type: string;
  title: string;
  category: 'basic' | 'layout' | 'form' | 'display';
  icon?: string;
  defaultProps?: Recordable;
  propsSchema?: PropSchema[];
}

export interface PropSchema {
  name: string;
  title: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'enum';
  defaultValue?: any;
  options?: { label: string; value: any }[];
}
