import type { Recordable } from '@low-code/core';

export interface LcContext {
  $v: Recordable;
  $m: Recordable;
}

export interface LcMethod {
  (ctx: LcContext): void;
}
