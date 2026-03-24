import type { AnyObject } from './common';

/**
 * 页面 Schema
 */
export interface LcSchemaPage {
  id: string;
  title: string;
  style: string;
  children?: LcSchemaComponent[];
}

/**
 * 组件 Schema
 */
export interface LcSchemaComponent {
  id: string;
  type: string;
  props: AnyObject;
  style: string;
  children?: LcSchemaComponent[];
}
