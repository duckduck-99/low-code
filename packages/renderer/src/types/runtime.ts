import type { AnyObject } from './common';

/**
 * 运行时上下文
 */
export interface LcRuntimeContext {
  $v: AnyObject;
}

/**
 * 页面运行时
 */
export interface LcRuntimePage {
  id: string;
  title: string;
  className: string;
  children: LcRuntimeComponent[];
}

/**
 * 组件运行时
 */
export interface LcRuntimeComponent {
  id: string;
  type: string;
  props: LcRuntimePropItem[];
  className: string;
  children: LcRuntimeComponent[];
}

/**
 * 组件属性项
 */
export type LcRuntimePropItem =
  | {
      isExp: false;
      name: string;
      value: any;
    }
  | {
      isExp: true;
      name: string;
      value: (context: LcRuntimeContext) => any;
    };
