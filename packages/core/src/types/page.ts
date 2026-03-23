import type { ComponentSchema } from './component';
import type { Recordable } from './base';

/**
 * 页面级 Schema：描述一页的根树与元信息。
 * 画布/运行时通常从 `root` 开始递归渲染。
 */
export interface PageSchema {
  id: string;
  style: string;
  state: Recordable;
  methods: LcMethodSchema[];
  children: ComponentSchema[];
}

export interface LcMethodSchema {
  name: string;
  body: string;
}
